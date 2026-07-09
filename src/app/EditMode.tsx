"use client";

import { useEffect, useState } from "react";

// Copy-review mode, activated with ?edit in the URL (e.g. wisdom-frontiers.com/?edit).
// Every text block becomes contentEditable; edits are collected and can be sent
// back as JSON via clipboard or email. Purely client-side — nothing is persisted.

const CONTACT_EMAIL = "dereklomas@gmail.com";

type Change = { id: string; original: string; edited: string };

type Tracked = { el: HTMLElement; id: string; original: string };

function collectEditables(): Tracked[] {
  const candidates = Array.from(
    document.querySelectorAll<HTMLElement>(
      "h1, h2, h3, h4, h5, p, li, blockquote, figcaption, a, button"
    )
  );
  const set = new Set(candidates);
  // Keep only outermost candidates so a link inside a paragraph is edited
  // as part of the paragraph, not tracked twice.
  const outermost = candidates.filter((el) => {
    for (let a = el.parentElement; a; a = a.parentElement) {
      if (set.has(a)) return false;
    }
    return true;
  });
  const tagCounts: Record<string, number> = {};
  return outermost
    .filter((el) => (el.innerText ?? "").trim().length > 0)
    .map((el) => {
      const tag = el.tagName.toLowerCase();
      const n = (tagCounts[tag] = (tagCounts[tag] ?? 0) + 1);
      return { el, id: `${tag}:${n}`, original: el.innerText };
    });
}

export default function EditMode() {
  const [active, setActive] = useState(false);
  const [changes, setChanges] = useState<Change[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("edit")) return;
    setActive(true);

    const tracked = collectEditables();
    for (const t of tracked) {
      t.el.setAttribute("contenteditable", "true");
      t.el.setAttribute("data-wf-edit", t.id);
      t.el.setAttribute("spellcheck", "false");
    }

    const recompute = () => {
      setChanges(
        tracked
          .filter((t) => t.el.innerText !== t.original)
          .map((t) => ({ id: t.id, original: t.original, edited: t.el.innerText }))
      );
    };
    document.addEventListener("input", recompute);

    // In edit mode, clicking a link should place the cursor, not navigate.
    const blockNav = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) e.preventDefault();
    };
    document.addEventListener("click", blockNav, true);

    return () => {
      document.removeEventListener("input", recompute);
      document.removeEventListener("click", blockNav, true);
      for (const t of tracked) {
        t.el.removeAttribute("contenteditable");
        t.el.removeAttribute("data-wf-edit");
      }
    };
  }, []);

  if (!active) return null;

  const payload = JSON.stringify(
    {
      site: "wisdom-frontiers.com",
      page: typeof window === "undefined" ? "/" : window.location.pathname,
      exportedAt: new Date().toISOString(),
      changes,
    },
    null,
    2
  );

  const copyJson = async () => {
    await navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailJson = () => {
    const subject = encodeURIComponent("Wisdom Frontiers copy edits");
    const body = encodeURIComponent(payload);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <style>{`
        [data-wf-edit] { cursor: text; }
        [data-wf-edit]:hover { outline: 1px dashed rgba(232, 181, 74, 0.6); outline-offset: 3px; }
        [data-wf-edit]:focus { outline: 2px solid rgba(232, 181, 74, 0.9); outline-offset: 3px; }
      `}</style>
      <div
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "#111",
          color: "#f7f5f0",
          border: "1px solid rgba(232, 181, 74, 0.5)",
          borderRadius: 999,
          padding: "10px 18px",
          fontSize: 13,
          fontFamily: "var(--font-geist-sans), sans-serif",
          boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          maxWidth: "calc(100vw - 32px)",
        }}
      >
        <span style={{ whiteSpace: "nowrap" }}>
          <strong style={{ color: "#e8b54a" }}>Edit mode</strong>
          {" — click any text · "}
          {changes.length} change{changes.length === 1 ? "" : "s"}
        </span>
        <button
          onClick={copyJson}
          disabled={changes.length === 0}
          style={{
            background: changes.length ? "#e8b54a" : "#333",
            color: changes.length ? "#111" : "#777",
            border: "none",
            borderRadius: 999,
            padding: "6px 14px",
            fontWeight: 600,
            fontSize: 13,
            cursor: changes.length ? "pointer" : "default",
            whiteSpace: "nowrap",
          }}
        >
          {copied ? "Copied!" : "Copy JSON"}
        </button>
        <button
          onClick={emailJson}
          disabled={changes.length === 0}
          style={{
            background: "transparent",
            color: changes.length ? "#f7f5f0" : "#777",
            border: "1px solid #555",
            borderRadius: 999,
            padding: "6px 14px",
            fontWeight: 600,
            fontSize: 13,
            cursor: changes.length ? "pointer" : "default",
            whiteSpace: "nowrap",
          }}
        >
          Email edits
        </button>
      </div>
    </>
  );
}
