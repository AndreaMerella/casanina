"use client";

/**
 * GenovaVignette — animated SVG divider strip
 *
 * Depicts (left→right):
 *   - La Lanterna: two stacked square prisms, red-white checkerboard band, 112m total height
 *   - Caruggi: dense medieval building profile of the historic centre
 *   - Funicolare Zecca-Righi: two counterbalancing cars on the 1895 line
 *     bottom station → Largo della Zecca, top → Righi (292m)
 *   - Basilica di Carignano: central dome + 4 corner domes (Galeazzo Alessi, 1552)
 *
 * Colors pulled from site design tokens.
 */

const TRACK = "M 148 177 L 818 53";

export default function GenovaVignette() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true" style={{ maxHeight: 240 }}>
      <svg
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block", overflow: "hidden" }}
      >
        <style>{`
          @keyframes zecca-righi-up {
            from { offset-distance: 3%; }
            to   { offset-distance: 97%; }
          }
          @keyframes zecca-righi-down {
            from { offset-distance: 97%; }
            to   { offset-distance: 3%; }
          }
          .car-up {
            offset-path: path('${TRACK}');
            offset-rotate: auto;
            animation: zecca-righi-up 9s linear infinite;
          }
          .car-down {
            offset-path: path('${TRACK}');
            offset-rotate: auto;
            animation: zecca-righi-down 9s linear infinite;
          }
        `}</style>

        {/* ── Hill / terrain ── */}
        <path
          d="M0 200 L0 162 Q70 148 155 133 Q290 110 450 86 Q600 63 720 46 Q800 36 900 30 L900 200 Z"
          fill="#f3f0e9"
        />
        {/* Lower foreground mass (shadow depth on near slope) */}
        <path
          d="M0 200 L0 178 Q55 172 130 165 Q200 158 280 168 L280 200 Z"
          fill="#e4ddd3"
          opacity="0.45"
        />
        {/* Ground baseline */}
        <rect x="0" y="186" width="900" height="14" fill="#e4ddd3" />

        {/* ── La Lanterna ── */}
        {/* Rock outcrop / promontory base */}
        <ellipse cx="50" cy="192" rx="32" ry="9" fill="#c9bdb0" />
        <path d="M30 192 Q50 185 70 192 Z" fill="#c9bdb0" />
        {/* Lower square prism (wider, taller — ~2/3 of total) */}
        <rect x="36" y="128" width="28" height="64" fill="#746a5e" />
        {/* Lower cornice / terrace */}
        <rect x="31" y="123" width="38" height="7" rx="1" fill="#5a5248" />
        {/* Upper square prism (narrower, shorter) */}
        <rect x="41" y="90" width="18" height="35" fill="#746a5e" />
        {/* Upper cornice */}
        <rect x="36" y="85" width="28" height="7" rx="1" fill="#5a5248" />
        {/* Lantern gallery */}
        <rect x="39" y="74" width="22" height="14" fill="#18120c" />
        {/* Lens glow */}
        <ellipse cx="50" cy="76" rx="7" ry="5" fill="#faf8f4" opacity="0.75" />
        {/* Cap roof */}
        <polygon points="38,74 62,74 50,64" fill="#5a5248" />
        {/* Checkerboard band — authentic detail (red-white, city colours) */}
        <rect x="39" y="71" width="5" height="4" fill="#b5703a" />
        <rect x="44" y="71" width="5" height="4" fill="#faf8f4" />
        <rect x="49" y="71" width="5" height="4" fill="#b5703a" />
        <rect x="54" y="71" width="5" height="4" fill="#faf8f4" />
        {/* Lower section windows */}
        <rect x="43" y="136" width="7" height="9" rx="1" fill="#faf8f4" opacity="0.25" />
        <rect x="43" y="153" width="7" height="9" rx="1" fill="#faf8f4" opacity="0.25" />
        {/* Upper section window */}
        <rect x="45" y="98" width="5" height="7" rx="1" fill="#faf8f4" opacity="0.25" />

        {/* ── Caruggi profile ── */}
        {/* Irregular medieval building silhouette — tight, uneven, authentic */}
        <path
          d={`
            M88 186
            L88 152 L92 152 L92 141 L95 141 L95 131 L98 131 L98 128
            L100 128 L100 120 L103 120 L103 128 L106 128 L106 141 L109 141
            L109 152 L112 152 L112 142 L115 142 L115 134 L118 134 L118 128
            L120 128 L120 121 L122 121 L122 128 L124 128 L124 134 L126 134
            L126 152 L129 152 L129 143 L132 143 L132 136 L134 136 L134 129
            L136 129 L136 124 L138 124 L138 131 L140 131 L140 143
            L142 143 L142 152 L145 152 L145 140 L148 140 L148 152
            L150 152 L150 144 L153 144 L153 136 L156 136 L156 144 L158 144
            L158 152 L161 152 L161 146 L163 146 L163 152
            L165 152 L165 186 Z
          `}
          fill="#d4ccc4"
        />
        {/* Caruggi windows — tiny, suggesting alleys and laundry light */}
        <rect x="100" y="122" width="4" height="4" fill="#faf8f4" opacity="0.35" />
        <rect x="120" y="123" width="4" height="4" fill="#faf8f4" opacity="0.35" />
        <rect x="134" y="126" width="4" height="4" fill="#faf8f4" opacity="0.35" />
        <rect x="148" y="141" width="4" height="4" fill="#faf8f4" opacity="0.35" />
        <rect x="153" y="137" width="4" height="4" fill="#faf8f4" opacity="0.35" />

        {/* ── Basilica di Carignano ── */}
        {/* Galeazzo Alessi, 1552 — Greek cross plan, central dome + 4 corner domes */}
        {/* Position: on the hill mid-right, behind where the cars will pass */}
        {/* Lateral arms of Greek cross */}
        <rect x="616" y="91" width="13" height="22" fill="#e4ddd3" />
        <rect x="693" y="91" width="13" height="22" fill="#e4ddd3" />
        {/* Nave body */}
        <rect x="629" y="82" width="64" height="32" fill="#e4ddd3" />
        {/* 4 corner towers / smaller domes — front pair */}
        <rect x="630" y="71" width="12" height="14" fill="#d4ccc4" />
        <path d="M628 71 Q636 61 644 71 Z" fill="#c9bdb0" />
        <rect x="680" y="71" width="12" height="14" fill="#d4ccc4" />
        <path d="M678 71 Q686 61 694 71 Z" fill="#c9bdb0" />
        {/* Rear pair (slightly occluded) */}
        <rect x="632" y="76" width="10" height="10" fill="#d4ccc4" opacity="0.6" />
        <rect x="680" y="76" width="10" height="10" fill="#d4ccc4" opacity="0.6" />
        {/* Main drum */}
        <rect x="648" y="57" width="26" height="28" fill="#d4ccc4" />
        {/* Main dome — hemisphere */}
        <path d="M645 57 Q661 36 677 57 Z" fill="#c9bdb0" />
        {/* Dome lanternino */}
        <rect x="658" y="34" width="6" height="7" fill="#746a5e" />
        <polygon points="656,34 668,34 662,28" fill="#5a5248" />
        {/* Facade detail — arched entrance suggestion */}
        <path d="M652 114 Q661 107 670 114" fill="none" stroke="#c9bdb0" strokeWidth="1.2" />

        {/* ── Funicolare Zecca-Righi ── */}
        {/* Cross-ties / traversine */}
        {Array.from({ length: 22 }, (_, i) => {
          const t = i / 21;
          const cx = 148 + t * 670;
          const cy = 177 - t * 124;
          const angle = Math.atan2(-124, 670);
          const px = Math.sin(angle) * 7;
          const py = -Math.cos(angle) * 7;
          return (
            <line
              key={i}
              x1={cx - px}
              y1={cy - py}
              x2={cx + px}
              y2={cy + py}
              stroke="#c9bdb0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          );
        })}
        {/* Left rail */}
        <line
          x1="140" y1="181" x2="810" y2="57"
          stroke="#a89880" strokeWidth="2.5" strokeLinecap="round"
        />
        {/* Right rail */}
        <line
          x1="156" y1="174" x2="826" y2="50"
          stroke="#a89880" strokeWidth="2.5" strokeLinecap="round"
        />
        {/* Overhead cable — dashed */}
        <line
          x1="148" y1="177" x2="818" y2="53"
          stroke="#746a5e" strokeWidth="0.8" strokeDasharray="5 3" opacity="0.45"
        />

        {/* ── Bottom station — Largo della Zecca ── */}
        <rect x="84" y="153" width="58" height="34" rx="3" fill="#e4ddd3" />
        <rect x="84" y="147" width="58" height="9" rx="2" fill="#c9bdb0" />
        <rect x="93" y="163" width="11" height="14" rx="1.5" fill="#faf8f4" opacity="0.65" />
        <rect x="124" y="163" width="11" height="14" rx="1.5" fill="#faf8f4" opacity="0.65" />
        <text
          x="113" y="144"
          textAnchor="middle"
          fontSize="6"
          fill="#746a5e"
          fontFamily="Georgia, 'Times New Roman', serif"
          letterSpacing="0.06em"
        >
          Largo della Zecca
        </text>

        {/* ── Top station — Righi ── */}
        <rect x="814" y="35" width="54" height="30" rx="3" fill="#e4ddd3" />
        <rect x="814" y="28" width="54" height="9" rx="2" fill="#c9bdb0" />
        <rect x="822" y="44" width="10" height="12" rx="1.5" fill="#faf8f4" opacity="0.65" />
        <rect x="848" y="44" width="10" height="12" rx="1.5" fill="#faf8f4" opacity="0.65" />
        <text
          x="841" y="25"
          textAnchor="middle"
          fontSize="6"
          fill="#746a5e"
          fontFamily="Georgia, 'Times New Roman', serif"
          letterSpacing="0.06em"
        >
          Righi
        </text>

        {/* ── Car — ascending (Zecca → Righi) ── */}
        <g className="car-up">
          {/* Body — Genovese red */}
          <rect x="-22" y="-13" width="44" height="20" rx="3" fill="#c0302a" />
          {/* Windows */}
          <rect x="-17" y="-9" width="10" height="8" rx="1.5" fill="#faf8f4" opacity="0.9" />
          <rect x="-3" y="-9" width="10" height="8" rx="1.5" fill="#faf8f4" opacity="0.9" />
          <rect x="11" y="-9" width="7" height="8" rx="1.5" fill="#faf8f4" opacity="0.9" />
          {/* White band below windows */}
          <rect x="-20" y="5" width="40" height="4" rx="1" fill="#faf8f4" opacity="0.3" />
          {/* Undercarriage */}
          <rect x="-18" y="10" width="36" height="4" rx="1" fill="#8a1f1a" />
          {/* Wheels */}
          <circle cx="-11" cy="14" r="5" fill="#3a1512" stroke="#8a1f1a" strokeWidth="1.5" />
          <circle cx="11" cy="14" r="5" fill="#3a1512" stroke="#8a1f1a" strokeWidth="1.5" />
          <circle cx="-11" cy="14" r="2" fill="#c0302a" />
          <circle cx="11" cy="14" r="2" fill="#c0302a" />
          {/* Cable grip on roof */}
          <rect x="-4" y="-20" width="8" height="9" rx="1.5" fill="#8a1f1a" />
          <rect x="-2" y="-23" width="4" height="5" rx="1" fill="#5a1410" />
        </g>

        {/* ── Car — descending (Righi → Zecca) ── */}
        <g className="car-down">
          <rect x="-22" y="-13" width="44" height="20" rx="3" fill="#c0302a" />
          <rect x="-17" y="-9" width="10" height="8" rx="1.5" fill="#faf8f4" opacity="0.9" />
          <rect x="-3" y="-9" width="10" height="8" rx="1.5" fill="#faf8f4" opacity="0.9" />
          <rect x="11" y="-9" width="7" height="8" rx="1.5" fill="#faf8f4" opacity="0.9" />
          <rect x="-20" y="5" width="40" height="4" rx="1" fill="#faf8f4" opacity="0.3" />
          <rect x="-18" y="10" width="36" height="4" rx="1" fill="#8a1f1a" />
          <circle cx="-11" cy="14" r="5" fill="#3a1512" stroke="#8a1f1a" strokeWidth="1.5" />
          <circle cx="11" cy="14" r="5" fill="#3a1512" stroke="#8a1f1a" strokeWidth="1.5" />
          <circle cx="-11" cy="14" r="2" fill="#c0302a" />
          <circle cx="11" cy="14" r="2" fill="#c0302a" />
          <rect x="-4" y="-20" width="8" height="9" rx="1.5" fill="#8a1f1a" />
          <rect x="-2" y="-23" width="4" height="5" rx="1" fill="#5a1410" />
        </g>
      </svg>
    </div>
  );
}
