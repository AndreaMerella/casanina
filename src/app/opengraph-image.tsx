import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Nina Carignano — Appartamento a Genova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  let fontData: ArrayBuffer | undefined;
  try {
    fontData = await fetch(
      "https://fonts.gstatic.com/s/dmserifdisplay/v14/-nFnOHM81r4j6k0gjALR8uVHf8JmQq_8.woff"
    ).then((r) => r.arrayBuffer());
  } catch {}

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "row" }}>

        {/* ── LEFT: pink facade — pure flexbox, no absolute ── */}
        <div style={{
          width: 420,
          height: 630,
          background: "#e8a898",
          display: "flex",
          flexDirection: "column",
          padding: "40px 28px 0 28px",
          gap: 0,
        }}>

          {/* Windows row */}
          <div style={{ display: "flex", flexDirection: "row", gap: 14, marginTop: 10 }}>

            {/* Window 1 — fully open shutters */}
            <div style={{ display: "flex", flexDirection: "row", gap: 3 }}>
              {/* Left shutter */}
              <div style={{ width: 38, height: 110, background: "#2d5a3a", display: "flex", flexDirection: "column", gap: 8, padding: "10px 0" }}>
                {[0,1,2,3,4,5,6].map(i => (
                  <div key={i} style={{ width: 38, height: 2, background: "#1e4028", opacity: 0.5 }} />
                ))}
              </div>
              {/* Glass */}
              <div style={{ width: 68, height: 110, background: "#c8dce8", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: 1, borderRight: "2px solid rgba(240,236,232,0.7)" }} />
                  <div style={{ flex: 1 }} />
                </div>
                <div style={{ height: 2, background: "rgba(240,236,232,0.7)" }} />
                <div style={{ flex: 1 }} />
              </div>
              {/* Right shutter */}
              <div style={{ width: 38, height: 110, background: "#2d5a3a", display: "flex", flexDirection: "column", gap: 8, padding: "10px 0" }}>
                {[0,1,2,3,4,5,6].map(i => (
                  <div key={i} style={{ width: 38, height: 2, background: "#1e4028", opacity: 0.5 }} />
                ))}
              </div>
            </div>

            {/* Window 2 — partial (right edge) */}
            <div style={{ display: "flex", flexDirection: "row", gap: 3 }}>
              <div style={{ width: 38, height: 110, background: "#2d5a3a", display: "flex", flexDirection: "column", gap: 8, padding: "10px 0" }}>
                {[0,1,2,3,4,5,6].map(i => (
                  <div key={i} style={{ width: 38, height: 2, background: "#1e4028", opacity: 0.5 }} />
                ))}
              </div>
              <div style={{ width: 52, height: 110, background: "#c8dce8" }} />
            </div>
          </div>

          {/* Window sill */}
          <div style={{ width: 260, height: 9, background: "#d8ccbe", borderRadius: 2, marginTop: 2 }} />

          {/* Flower box */}
          <div style={{ width: 260, height: 24, background: "#8a6040", borderRadius: 3, marginTop: 0, display: "flex", flexDirection: "row", alignItems: "flex-start", paddingTop: 0, gap: 4, padding: "0 8px" }}>
            {[0,1,2,3,4,5,6,7,8].map(i => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: -10, gap: 2 }}>
                <div style={{ width: 16, height: 16, borderRadius: 8, background: "#cc2233" }} />
                <div style={{ width: 20, height: 14, borderRadius: 10, background: "#3a7040" }} />
              </div>
            ))}
          </div>

          {/* Wall space + string course */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ width: 364, height: 4, background: "#d09080", opacity: 0.5, marginBottom: 60 }} />
          </div>

          {/* Bottom row: door + ground flowers */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 16 }}>
            {/* Door */}
            <div style={{ width: 80, height: 200, background: "#2d5a3a", display: "flex", flexDirection: "column", padding: "10px 8px", gap: 8 }}>
              {/* Upper panel */}
              <div style={{ width: 64, height: 60, background: "#265033", opacity: 0.45 }} />
              {/* Handle */}
              <div style={{ width: 10, height: 10, borderRadius: 5, background: "#c89828", alignSelf: "flex-end" }} />
            </div>

            {/* Ground flower stand */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {/* Flowers */}
              <div style={{ display: "flex", flexDirection: "row", gap: 5, paddingLeft: 6 }}>
                {[0,1,2,3,4,5].map(i => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 9, background: "#cc2233" }} />
                    <div style={{ width: 22, height: 16, borderRadius: 11, background: "#3a7040" }} />
                  </div>
                ))}
              </div>
              {/* Stand bar */}
              <div style={{ width: 160, height: 18, background: "#8a6040", borderRadius: 3 }} />
            </div>
          </div>

        </div>

        {/* Dark green divider */}
        <div style={{ width: 5, height: 630, background: "#2d5a3a" }} />

        {/* ── RIGHT: text — dark stone ── */}
        <div style={{
          flex: 1,
          height: 630,
          background: "#292524",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          gap: 0,
        }}>
          {/* Top rule */}
          <div style={{ width: 48, height: 1, background: "#faf8f4", opacity: 0.25, marginBottom: 40 }} />

          <div style={{
            fontSize: 86,
            color: "#faf8f4",
            fontFamily: fontData ? "DM Serif Display" : "Georgia, serif",
            lineHeight: 1,
            opacity: 0.92,
          }}>
            Casa Nina
          </div>

          <div style={{
            fontSize: 18,
            color: "#faf8f4",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            marginTop: 22,
            opacity: 0.38,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}>
            Carignano · Genova
          </div>

          <div style={{ width: 48, height: 1, background: "#faf8f4", opacity: 0.2, marginTop: 40 }} />

          <div style={{
            fontSize: 14,
            color: "#faf8f4",
            letterSpacing: "0.08em",
            marginTop: 28,
            opacity: 0.22,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}>
            casaninacarignano.com
          </div>
        </div>

      </div>
    ),
    {
      ...size,
      ...(fontData
        ? { fonts: [{ name: "DM Serif Display", data: fontData, style: "normal" as const, weight: 400 }] }
        : {}),
    }
  );
}
