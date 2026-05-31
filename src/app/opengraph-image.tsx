import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Nina Carignano — Appartamento a Genova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Shutter slat helper
function Slats({ left }: { left: number }) {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 12 + i * 14,
            left,
            width: 40,
            height: 2,
            background: "#1e4028",
            opacity: 0.5,
          }}
        />
      ))}
    </>
  );
}

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>

        {/* ── LEFT: pink facade ── */}
        <div
          style={{
            width: 440,
            height: 630,
            background: "#e8a898",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Sky strip at top */}
          <div style={{ width: 440, height: 40, background: "#252120", display: "flex" }} />

          {/* Wall with windows */}
          <div style={{ flex: 1, background: "#e8a898", display: "flex", flexDirection: "column", padding: "20px 28px 0 28px" }}>

            {/* Window row */}
            <div style={{ display: "flex", gap: 16 }}>
              {/* Window 1 */}
              <div style={{ display: "flex" }}>
                <div style={{ width: 40, height: 115, background: "#2d5a3a" }} />
                <div style={{ width: 70, height: 115, background: "#c8dce8" }} />
                <div style={{ width: 40, height: 115, background: "#2d5a3a" }} />
              </div>
              {/* Window 2 partial */}
              <div style={{ display: "flex" }}>
                <div style={{ width: 40, height: 115, background: "#2d5a3a" }} />
                <div style={{ width: 55, height: 115, background: "#c8dce8" }} />
              </div>
            </div>

            {/* Sill */}
            <div style={{ width: 265, height: 8, background: "#d8ccbe", marginTop: 0 }} />

            {/* Flower box */}
            <div style={{ width: 265, height: 22, background: "#8a6040", display: "flex", alignItems: "center", paddingLeft: 8, gap: 6 }}>
              {[0,1,2,3,4,5,6,7,8].map((i) => (
                <div key={i} style={{ width: 16, height: 16, borderRadius: 8, background: "#cc2233" }} />
              ))}
            </div>

            {/* String course */}
            <div style={{ width: 384, height: 4, background: "#d09080", opacity: 0.6, marginTop: 80 }} />

            {/* Door row */}
            <div style={{ display: "flex", gap: 20, marginTop: 16, alignItems: "flex-end" }}>
              <div style={{ width: 82, height: 220, background: "#2d5a3a", display: "flex", flexDirection: "column", padding: 10, gap: 10 }}>
                <div style={{ width: 62, height: 65, background: "#265033", opacity: 0.4 }} />
                <div style={{ width: 10, height: 10, borderRadius: 5, background: "#c89828", alignSelf: "flex-end" }} />
              </div>

              {/* Ground flowers */}
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {[0,1,2,3,4,5].map((i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                      <div style={{ width: 18, height: 18, borderRadius: 9, background: "#cc2233" }} />
                      <div style={{ width: 22, height: 14, borderRadius: 11, background: "#3a7040" }} />
                    </div>
                  ))}
                </div>
                <div style={{ width: 155, height: 16, background: "#8a6040", borderRadius: 2 }} />
              </div>
            </div>

          </div>

          {/* Drain pipe — right edge */}
          <div style={{ position: "absolute", top: 40, left: 430, width: 7, height: 590, background: "#9a9088", borderRadius: 3 }} />
        </div>

        {/* Green divider */}
        <div style={{ width: 5, height: 630, background: "#2d5a3a" }} />

        {/* ── RIGHT: text ── */}
        <div
          style={{
            flex: 1,
            height: 630,
            background: "#292524",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div style={{ width: 48, height: 1, background: "#faf8f4", opacity: 0.25, marginBottom: 40 }} />

          <div style={{ fontSize: 88, color: "#faf8f4", fontFamily: "Georgia, serif", lineHeight: 1, opacity: 0.92 }}>
            Casa Nina
          </div>

          <div style={{ fontSize: 18, color: "#faf8f4", letterSpacing: "0.28em", marginTop: 22, opacity: 0.38, fontFamily: "sans-serif" }}>
            CARIGNANO · GENOVA
          </div>

          <div style={{ width: 48, height: 1, background: "#faf8f4", opacity: 0.2, marginTop: 40 }} />

          <div style={{ fontSize: 14, color: "#faf8f4", letterSpacing: "0.08em", marginTop: 28, opacity: 0.22, fontFamily: "sans-serif" }}>
            casaninacarignano.com
          </div>
        </div>

      </div>
    ),
    { ...size }
  );
}
