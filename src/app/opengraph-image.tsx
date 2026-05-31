import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Nina Carignano — Appartamento a Genova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // Load DM Serif Display to match the site's loading screen font
  let fontData: ArrayBuffer | undefined;
  try {
    fontData = await fetch(
      "https://fonts.gstatic.com/s/dmserifdisplay/v14/-nFnOHM81r4j6k0gjALR8uVHf8JmQq_8.woff"
    ).then((r) => r.arrayBuffer());
  } catch {}

  return new ImageResponse(
    (
      <div
        style={{
          background: "#292524",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* ── LEFT: Pink facade illustration ── */}
        <div
          style={{
            width: 480,
            height: 630,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#252120",
          }}
        >
          {/* Building wrapper — relative container */}
          <div style={{ position: "relative", width: 300, height: 520 }}>

            {/* Warm Ligurian sky behind building */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 300, height: 520, background: "#252120" }} />

            {/* Drain pipe — far right */}
            <div style={{ position: "absolute", top: 30, right: 2, width: 7, height: 490, background: "#8a8078", borderRadius: 4 }} />

            {/* PINK STUCCO WALL */}
            <div style={{ position: "absolute", top: 30, left: 0, width: 292, height: 490, background: "#e8a898" }} />

            {/* Horizontal string course */}
            <div style={{ position: "absolute", top: 290, left: 0, width: 292, height: 5, background: "#d09080", opacity: 0.6 }} />

            {/* Metal awning over door */}
            <div style={{ position: "absolute", top: 200, left: 8, width: 110, height: 8, background: "#9a9088" }} />
            <div style={{ position: "absolute", top: 196, left: 8, width: 110, height: 5, background: "#b4b0a4" }} />

            {/* DOOR — dark green */}
            <div style={{ position: "absolute", top: 208, left: 14, width: 76, height: 312, background: "#2d5a3a" }} />
            {/* Door upper panel */}
            <div style={{ position: "absolute", top: 216, left: 22, width: 60, height: 70, background: "#265033", opacity: 0.4 }} />
            {/* Door lower panel */}
            <div style={{ position: "absolute", top: 294, left: 22, width: 60, height: 220, background: "#265033", opacity: 0.4 }} />
            {/* Door handle — brass */}
            <div style={{ position: "absolute", top: 380, left: 82, width: 12, height: 12, borderRadius: 6, background: "#c89828" }} />

            {/* WREATH on door */}
            <div style={{ position: "absolute", top: 246, left: 34, width: 52, height: 52, borderRadius: 26, border: "8px solid #1e4028", background: "transparent" }} />
            {/* Wreath flowers */}
            <div style={{ position: "absolute", top: 242, left: 54, width: 12, height: 12, borderRadius: 6, background: "#cc3344" }} />
            <div style={{ position: "absolute", top: 260, left: 78, width: 10, height: 10, borderRadius: 5, background: "#cc3344" }} />
            <div style={{ position: "absolute", top: 260, left: 28, width: 10, height: 10, borderRadius: 5, background: "#cc3344" }} />

            {/* WINDOW — left shutter */}
            <div style={{ position: "absolute", top: 50, left: 104, width: 44, height: 130, background: "#2d5a3a" }} />
            {/* Shutter slats */}
            {[66, 78, 90, 102, 114, 126, 138, 150, 162].map((t) => (
              <div key={t} style={{ position: "absolute", top: t, left: 104, width: 44, height: 2, background: "#1e4028", opacity: 0.5 }} />
            ))}
            {/* Window glass */}
            <div style={{ position: "absolute", top: 50, left: 148, width: 72, height: 130, background: "#c8dce8" }} />
            {/* Window cross */}
            <div style={{ position: "absolute", top: 50, left: 181, width: 3, height: 130, background: "#f0ece8", opacity: 0.7 }} />
            <div style={{ position: "absolute", top: 113, left: 148, width: 72, height: 3, background: "#f0ece8", opacity: 0.7 }} />
            {/* Right shutter */}
            <div style={{ position: "absolute", top: 50, left: 220, width: 44, height: 130, background: "#2d5a3a" }} />
            {[66, 78, 90, 102, 114, 126, 138, 150, 162].map((t) => (
              <div key={t} style={{ position: "absolute", top: t, left: 220, width: 44, height: 2, background: "#1e4028", opacity: 0.5 }} />
            ))}

            {/* Window sill */}
            <div style={{ position: "absolute", top: 180, left: 100, width: 172, height: 10, background: "#d8ccbe", borderRadius: 2 }} />

            {/* FLOWER BOX under window */}
            <div style={{ position: "absolute", top: 190, left: 106, width: 158, height: 28, background: "#8a6040", borderRadius: 4 }} />
            {/* Green foliage */}
            {[120, 145, 168, 192, 215, 238].map((l) => (
              <div key={l} style={{ position: "absolute", top: 178, left: l, width: 26, height: 20, borderRadius: 13, background: "#3a7040" }} />
            ))}
            {/* Red cyclamen */}
            {[126, 150, 173, 197, 220].map((l) => (
              <div key={l} style={{ position: "absolute", top: 172, left: l, width: 18, height: 18, borderRadius: 9, background: "#cc2233" }} />
            ))}

            {/* GROUND FLOWER STAND */}
            <div style={{ position: "absolute", bottom: 0, left: 14, width: 140, height: 28, background: "#8a6040", borderRadius: 4 }} />
            {/* Stand legs */}
            {[34, 74, 114].map((l) => (
              <div key={l} style={{ position: "absolute", bottom: 28, left: l, width: 8, height: 30, background: "#7a5030" }} />
            ))}
            {/* Foliage */}
            {[22, 50, 78, 106, 130].map((l) => (
              <div key={l} style={{ position: "absolute", bottom: 50, left: l, width: 28, height: 24, borderRadius: 14, background: "#3a7040" }} />
            ))}
            {/* Flowers */}
            {[26, 54, 82, 110, 134].map((l) => (
              <div key={l} style={{ position: "absolute", bottom: 56, left: l, width: 20, height: 20, borderRadius: 10, background: "#cc2233" }} />
            ))}

            {/* Seagulls in sky */}
            <div style={{ position: "absolute", top: 8, left: 150, fontSize: 0, lineHeight: 0 }}>
              <svg width="120" height="20" viewBox="0 0 120 20">
                <path d="M0 10 Q8 4 16 10 Q24 4 32 10" fill="none" stroke="#9a8070" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                <path d="M44 8 Q50 3 56 8 Q62 3 68 8" fill="none" stroke="#9a8070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
              </svg>
            </div>

          </div>
        </div>

        {/* Thin dark green accent divider */}
        <div style={{ width: 4, height: 630, background: "#2d5a3a", opacity: 0.7 }} />

        {/* ── RIGHT: Text ── */}
        <div
          style={{
            flex: 1,
            height: 630,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            background: "#292524",
          }}
        >
          {/* Top rule */}
          <div style={{ width: 48, height: 1, background: "#faf8f4", opacity: 0.25, marginBottom: 40 }} />

          {/* Main title */}
          <div
            style={{
              fontSize: 88,
              color: "#faf8f4",
              fontFamily: fontData ? "DM Serif Display" : "Georgia, serif",
              lineHeight: 1,
              opacity: 0.92,
              letterSpacing: "0.01em",
            }}
          >
            Casa Nina
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              color: "#faf8f4",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginTop: 24,
              opacity: 0.38,
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            Carignano · Genova
          </div>

          {/* Bottom rule */}
          <div style={{ width: 48, height: 1, background: "#faf8f4", opacity: 0.25, marginTop: 40 }} />

          {/* URL */}
          <div
            style={{
              fontSize: 14,
              color: "#faf8f4",
              letterSpacing: "0.08em",
              marginTop: 28,
              opacity: 0.25,
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
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
