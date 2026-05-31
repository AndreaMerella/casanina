import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Nina Carignano — Appartamento a Genova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf8f4",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* ── Left panel: illustrated facade ── */}
        <div
          style={{
            width: 520,
            background: "#f6f1e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
          }}
        >
          <svg
            viewBox="0 0 140 180"
            width={340}
            height={440}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pink stucco wall */}
            <rect x="10" y="10" width="120" height="165" fill="#e8a898" />

            {/* Horizontal string course */}
            <rect x="10" y="105" width="120" height="3" fill="#d09080" opacity="0.6" />
            <rect x="10" y="130" width="120" height="2" fill="#d09080" opacity="0.45" />

            {/* Drain pipe */}
            <rect x="126" y="10" width="3" height="165" rx="1.5" fill="#9a9088" />
            <rect x="125.5" y="22" width="4" height="3" rx="0.8" fill="#7a7068" />
            <rect x="125.5" y="70" width="4" height="3" rx="0.8" fill="#7a7068" />
            <rect x="125.5" y="120" width="4" height="3" rx="0.8" fill="#7a7068" />

            {/* Metal awning over door */}
            <path d="M10 60 Q30 48 50 60" fill="#b4b0a4" stroke="#9a9088" strokeWidth="0.8" />
            <rect x="9.5" y="59" width="42" height="2.5" fill="#9a9088" />

            {/* DOOR */}
            <rect x="13" y="62" width="32" height="113" rx="1" fill="#2d5a3a" />
            <rect x="16" y="65" width="26" height="30" rx="0.8" fill="#265033" opacity="0.4" />
            <rect x="16" y="97" width="26" height="75" rx="0.8" fill="#265033" opacity="0.4" />
            <line x1="29" y1="62" x2="29" y2="175" stroke="#1e4028" strokeWidth="1" opacity="0.4" />
            <circle cx="42" cy="115" r="2.8" fill="#c89828" />

            {/* Wreath */}
            <circle cx="29" cy="82" r="7" fill="none" stroke="#1e4028" strokeWidth="3" />
            <circle cx="29" cy="75" r="1.8" fill="#cc3344" />
            <circle cx="35" cy="79" r="1.5" fill="#cc3344" />
            <circle cx="36" cy="86" r="1.4" fill="#cc3344" />
            <circle cx="23" cy="79" r="1.5" fill="#cc3344" />
            <circle cx="22" cy="86" r="1.5" fill="#cc3344" />

            {/* WINDOW — left shutter */}
            <rect x="50" y="18" width="18" height="52" rx="0.8" fill="#2d5a3a" />
            <line x1="50" y1="23" x2="68" y2="23" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="50" y1="28" x2="68" y2="28" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="50" y1="33" x2="68" y2="33" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="50" y1="38" x2="68" y2="38" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="50" y1="43" x2="68" y2="43" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="50" y1="48" x2="68" y2="48" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="50" y1="53" x2="68" y2="53" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="50" y1="58" x2="68" y2="58" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="50" y1="63" x2="68" y2="63" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />

            {/* Window glass */}
            <rect x="68" y="18" width="30" height="52" fill="#c8dce8" />
            <rect x="68" y="18" width="30" height="52" fill="none" stroke="#f0ece8" strokeWidth="2" />
            <line x1="68" y1="44" x2="98" y2="44" stroke="#f0ece8" strokeWidth="1.2" />
            <line x1="83" y1="18" x2="83" y2="70" stroke="#f0ece8" strokeWidth="1.2" />

            {/* Window right shutter */}
            <rect x="98" y="18" width="18" height="52" rx="0.8" fill="#2d5a3a" />
            <line x1="98" y1="23" x2="116" y2="23" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="98" y1="28" x2="116" y2="28" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="98" y1="33" x2="116" y2="33" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="98" y1="38" x2="116" y2="38" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="98" y1="43" x2="116" y2="43" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="98" y1="48" x2="116" y2="48" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="98" y1="53" x2="116" y2="53" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="98" y1="58" x2="116" y2="58" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />
            <line x1="98" y1="63" x2="116" y2="63" stroke="#1e4028" strokeWidth="0.7" opacity="0.6" />

            {/* Window sill */}
            <rect x="47" y="70" width="72" height="4" rx="1" fill="#d8ccbe" />

            {/* FLOWER BOX */}
            <rect x="50" y="74" width="64" height="11" rx="2" fill="#8a6040" />
            {/* Foliage */}
            <ellipse cx="57" cy="73" rx="6" ry="5" fill="#3a7040" />
            <ellipse cx="68" cy="72" rx="6" ry="5.5" fill="#3a7040" />
            <ellipse cx="79" cy="73" rx="5.5" ry="5" fill="#3a7040" />
            <ellipse cx="90" cy="72" rx="6" ry="5.5" fill="#3a7040" />
            <ellipse cx="101" cy="73" rx="5.5" ry="5" fill="#3a7040" />
            {/* Cyclamen */}
            <circle cx="56" cy="70" r="3.5" fill="#cc2233" />
            <circle cx="67" cy="69" r="4" fill="#cc2233" />
            <circle cx="78" cy="70" r="3.5" fill="#cc2233" />
            <circle cx="89" cy="69" r="4" fill="#cc2233" />
            <circle cx="100" cy="70" r="3.5" fill="#cc2233" />

            {/* GROUND FLOWER STAND */}
            <rect x="13" y="138" width="55" height="10" rx="2" fill="#8a6040" />
            <line x1="22" y1="138" x2="22" y2="148" stroke="#7a5030" strokeWidth="2.5" />
            <line x1="38" y1="138" x2="38" y2="148" stroke="#7a5030" strokeWidth="2.5" />
            <line x1="54" y1="138" x2="54" y2="148" stroke="#7a5030" strokeWidth="2.5" />
            <ellipse cx="18" cy="137" rx="5.5" ry="5" fill="#3a7040" />
            <ellipse cx="29" cy="136" rx="6" ry="5.5" fill="#3a7040" />
            <ellipse cx="40" cy="136" rx="6" ry="5.5" fill="#3a7040" />
            <ellipse cx="51" cy="137" rx="5.5" ry="5" fill="#3a7040" />
            <circle cx="17" cy="134" r="4" fill="#cc2233" />
            <circle cx="28" cy="133" r="4.5" fill="#cc2233" />
            <circle cx="39" cy="133" r="4.5" fill="#cc2233" />
            <circle cx="50" cy="134" r="4" fill="#cc2233" />

            {/* Seagulls in sky */}
            <path d="M60 5 Q65 1 70 5 Q75 1 80 5" fill="none" stroke="#9a8070" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            <path d="M85 3 Q88 0 91 3 Q94 0 97 3" fill="none" stroke="#9a8070" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
          </svg>
        </div>

        {/* ── Right panel: text ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px",
            background: "#faf8f4",
          }}
        >
          {/* Top accent line */}
          <div style={{ display: "flex", marginBottom: 28 }}>
            <div style={{ width: 48, height: 1.5, background: "#c89888" }} />
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: 82,
              color: "#3a2e28",
              letterSpacing: "-0.5px",
              lineHeight: 1,
              marginBottom: 20,
            }}
          >
            Casa Nina
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 22,
              color: "#8a6a5a",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: 36,
              fontFamily: "Georgia, serif",
            }}
          >
            Carignano · Genova
          </div>

          {/* Divider */}
          <div style={{ width: 320, height: 1, background: "#d4c4b4", marginBottom: 36 }} />

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: "#9a8a7a",
              lineHeight: 1.6,
              letterSpacing: "0.02em",
              maxWidth: 480,
              marginBottom: 40,
              fontFamily: "Georgia, serif",
            }}
          >
            Appartamento nel cuore di Genova
            {"\n"}con vista, soffitti alti e stile.
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 16,
              color: "#b89888",
              letterSpacing: "0.1em",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            casaninacarignano.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
