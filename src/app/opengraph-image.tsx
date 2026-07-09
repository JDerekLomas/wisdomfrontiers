import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Wisdom Frontiers — Real wisdom for artificial intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const YELLOW = "#FFCB05";

// Satori can't use woff2; fetching Google's css2 endpoint without a browser
// user-agent returns TTF urls. Runs once at build time.
async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`,
    { headers: { "User-Agent": "curl/8" } }
  ).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`No font URL for ${family} ${weight}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function OpengraphImage() {
  const [archivoBlack, archivoSemibold, bg] = await Promise.all([
    loadGoogleFont("Archivo", 900),
    loadGoogleFont("Archivo", 600),
    readFile(join(process.cwd(), "public/explorer/ottoman-celestial.jpg")),
  ]);
  const bgSrc = `data:image/jpeg;base64,${bg.toString("base64")}`;

  const triangle = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,6 95,94 5,94" fill="${YELLOW}"/></svg>`
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0c0a09",
          fontFamily: "Archivo",
        }}
      >
        {/* Celestial map background, mirroring the hero */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgSrc}
          width={1200}
          height={1184}
          alt=""
          style={{
            position: "absolute",
            top: -280,
            left: 0,
            width: 1200,
            height: 1184,
            objectFit: "cover",
            opacity: 0.8,
          }}
        />
        {/* Bottom-heavy dark gradient, same as the hero overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            background:
              "linear-gradient(to top, rgba(12,10,9,0.96) 0%, rgba(12,10,9,0.55) 45%, rgba(12,10,9,0.35) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px 56px",
          }}
        >
          {/* Wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={triangle} width="38" height="38" alt="" />
            <div
              style={{
                color: "#ffffff",
                fontSize: "27px",
                fontWeight: 600,
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              Wisdom Frontiers
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: YELLOW,
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "8px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              A society of explorers
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#ffffff",
                fontSize: "96px",
                fontWeight: 900,
                lineHeight: 0.98,
                letterSpacing: "-3px",
              }}
            >
              <div style={{ display: "flex" }}>
                <span>Real&nbsp;</span>
                <span style={{ color: YELLOW }}>wisdom</span>
              </div>
              <div style={{ display: "flex" }}>for artificial</div>
              <div style={{ display: "flex" }}>intelligence.</div>
            </div>
          </div>

          {/* Footer line */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "5px", height: "26px", background: YELLOW }} />
            <div
              style={{
                color: "#d6d3d1",
                fontSize: "23px",
                fontWeight: 600,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              wisdom-frontiers.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivoBlack, weight: 900, style: "normal" },
        { name: "Archivo", data: archivoSemibold, weight: 600, style: "normal" },
      ],
    }
  );
}
