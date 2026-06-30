import { ImageResponse } from "next/og";

export const alt = "Wisdom Frontiers — Real wisdom for artificial intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const YELLOW = "#FFCB05";

export default function OpengraphImage() {
  const triangle = `data:image/svg+xml,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,6 95,94 5,94" fill="#FFCB05"/></svg>'
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0c0a09 0%, #1c1917 100%)",
          padding: "76px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={triangle} width="46" height="46" alt="" />
          <div
            style={{
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "9px",
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
              color: "#a8a29e",
              fontSize: "25px",
              letterSpacing: "7px",
              textTransform: "uppercase",
              marginBottom: "26px",
            }}
          >
            A society of explorers
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              color: "#ffffff",
              fontSize: "86px",
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-2px",
            }}
          >
            <span>Real&nbsp;</span>
            <span style={{ color: YELLOW }}>wisdom</span>
            <span>&nbsp;for artificial intelligence.</span>
          </div>
        </div>

        {/* Footer line */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "44px", height: "4px", background: YELLOW }} />
          <div style={{ color: "#a8a29e", fontSize: "25px" }}>
            wisdomfrontiers.org
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
