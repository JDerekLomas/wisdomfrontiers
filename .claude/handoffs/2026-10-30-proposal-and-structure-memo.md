# 2026-10-30 — Source Library × Wisdom Frontiers proposal edits + structure memo

Owner: Derek — accept/reject suggested edits in the proposal; decide rights/income ownership with the Embassy (memo step 1)

## Docs
- Proposal (gmail Drive): https://docs.google.com/document/d/1OEBIOyEFqfcyTn1XLOCwHFNyiidLCTStK-1TXFn-Jec/edit
- Structure memo (derek@sourcelibrary.org Drive, because the Drive connector switched accounts on re-login): https://docs.google.com/document/d/1VNM8rgRPhwbDqqZUoqNQwCMH90eq8HMhSZoa-yY5cnE/edit

## Proposal: what was done
- Direct edits: broken opening sentence fixed; USTC paragraph (≈500,000 Latin editions 1400–1700, ≈366,000 works; <1 in 10 Renaissance works ever in English); pace paragraph (≈40 first translations/yr at the 2000s peak → >7,000 years); empty "How the work is organized" heading and "This is self-evident." removed.
- Suggested edits (pending Derek's review): tightened opening, vision and Background; "Since December 2025 … two-thirds as much as every earlier translator" (6,400 SL works vs 9,800 catalogued, same matcher); 9,800 vs 2,000 clarified; AI-made translations disclosed; NAF/Embassy gift route; Carolyn Stuart; David Stuart (Mayanist) as adviser on Canul; new top section "What we are asking" (USD 295K Step 1, USD 90K by 1 Dec, ≈1.6M rest).
- Derek's own edits during the session: hard costs USD 150K + volunteer hours; his own projects sentence; cut the "thousand years" line.

## Open on the proposal
- Is David Stuart the paid "scholarly lead" on Canul? If so say it outright.
- Canul total: USD 90K/yr × 19 months ≈ 142.5K, doc says 135K.
- Numbers disagree with sourcelibrary.org/give and /sponsors (book counts, 10,000 vs 7,000 years, "<3%" vs "<1 in 10", scan cost). Pick one set.
- Licence: CC BY-SA vs "AI training requires a license" — see memo §5.
- Cold-read questions not yet answered: Mexican deductibility, what if no patrons by June 2027, what being a patron of "a part" means, sustainability after 2028, Laura's surname, "Since June" year.

## Sources for figures
- ~/sourcelibrary/.claude/docs/translation-gap-paper.md; sl-coverage-report.json (issue #7751 worktree); Supabase translation_catalogs. See memory note latin-gap-figures-source.
- Research notes behind the memo were in the session scratchpad (not kept).

## Tooling note
- Google Docs MCP failed to reconnect (HTTP 404) after /login; Drive connector now points at derek@sourcelibrary.org. Proposal edits used Docs API suggest mode (writeMode SUGGEST works with replaceAllText).

## Later on 2026-10-30: brevity rewrite (all as suggestions)
- About 90 suggested edits: merged the two English parts and the two Spanish parts, grouped TAE/Intercycle/Nature under "Born at Tecoh", reframed Maya sources as Test/Ask/Correct, set Canul to $145K (total $1,985,000), broke down the team's $340K a year, added the Friedman/Kahle/Sloan prospects, and inserted the vine v3 image (https://wisdom-frontiers.com/proposal/vine-v3.png, generator scripts/vine-v3.mjs).
- Still open: after Derek accepts, delete the empty heading and bullet paragraphs left by paragraph deletions; Derek resolves the 6 comments by hand (Chrome extension not connected); reason for the $90K by 1 Dec; who receives the money.
- Note: wisdomfrontiers.org is a parked domain. The site is wisdom-frontiers.com.

## Final cleanup (2026-10-30, after Derek accepted)
- Direct edits: subtitle line under the title; Latin paragraph now gives the total (about 9,800 of 366,000 works, under 3%) to answer Derek's comment; vision line rewritten; the CC licence and AI-infrastructure lines merged into one paragraph; NAF line moved to Team and governance; labels (Now / By … / Hand-checked / Test …) bold with the rest plain; the Tecoh items made bullets; table header and total rows bold; sourcelibrary.org linked.
- Left for Derek: resolve the 3 open comments by hand; say what the $90K by 1 Dec pays for; say who receives the money.

## Later on 2026-10-30: translation-gap figures (session "center-is-everywhere")
Owner: #7778 | bg gap-7778 on l7a
- Compared the Tecoh book (~/Downloads/the-center-is-everywhere.pdf) with the proposal; added the Maya sources part as suggestions (since reframed by the brevity rewrite).
- The proposal's "two-thirds of every earlier translator", "~2,000 Renaissance works translated" and "7,000 years" rest on catalogues the gap paper shows undercount real translations (all-print validated ~15%, ~55K clusters vs 9,830 catalogued). Only "fewer than one in ten" is safe until #7778 posts its quotable-figures section.
- Job gap-7778 (l7a): stage validation-found translations (no writes to translation_catalogs), audit our USTC work clustering (merge/split rates, edition-level cross-check), absolute counts, capture-corrected pace, quotable figures. Check: `ssh root@167.233.32.250 /root/bin/claude-job.sh status gap-7778`.
- Structured numerator (MARC 041/240, Open Library, Wikidata) is #7769, two jobs live on l7a for it (possible duplicate, flagged on the issue).

## Frond Studio added (2026-10-30)
- Team and governance: new line on Frond Studio (design and strategy for Source Library; built the Embassy website), from frond-studio.com.
- Sharing: the doc is "anyone with the link can edit". Derek shares the link with Frond himself; consider switching link access to commenter first.
