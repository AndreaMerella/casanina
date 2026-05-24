"use client";

/**
 * GenovaBoccadasse — the fishing village east of the city
 * Pastel houses on the cliff, coloured boats on the pebble beach
 * Full-width scene — sea left, cove centre, houses right
 *
 * SVG element order (painter's algorithm, back → front):
 *   sky → distant hills → sea waves → cliff (occludes waves) → houses →
 *   harbour wall → beach → boats → foreground wave → seagull → label
 */
export default function GenovaBoccadasse() {
  return (
    <div
      className="w-full overflow-hidden select-none"
      aria-hidden="true"
      style={{ maxHeight: 240 }}
    >
      <svg
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block", overflow: "hidden" }}
      >
        <style>{`
          @keyframes bocca-boat-a {
            0%,100% { transform: rotate(-4deg); }
            50%     { transform: rotate(4deg); }
          }
          @keyframes bocca-boat-b {
            0%,100% { transform: rotate(3deg); }
            50%     { transform: rotate(-4deg); }
          }
          @keyframes bocca-boat-c {
            0%,100% { transform: rotate(-3deg); }
            50%     { transform: rotate(3deg); }
          }
          @keyframes bocca-gull {
            0%   { transform: translate(0px,0px); }
            100% { transform: translate(820px,-10px); }
          }
          .bocca-a { animation: bocca-boat-a 4s ease-in-out infinite; transform-origin: 0px 0px; }
          .bocca-b { animation: bocca-boat-b 5s ease-in-out infinite; transform-origin: 0px 0px; animation-delay:-1.5s; }
          .bocca-c { animation: bocca-boat-c 3.5s ease-in-out infinite; transform-origin: 0px 0px; animation-delay:-0.8s; }
          .bocca-d { animation: bocca-boat-a 4.8s ease-in-out infinite; transform-origin: 0px 0px; animation-delay:-2.2s; }
          .bocca-gull { animation: bocca-gull 18s linear infinite; animation-delay:-6s; }
        `}</style>

        {/* ── Sky ── */}
        <rect x="0" y="0" width="900" height="200" fill="#faf8f4" />
        <rect x="0" y="70" width="900" height="24" fill="#dce8ee" opacity="0.35" />

        {/* ── Distant coastal hills on left horizon ── */}
        <path d="M0 92 Q80 84 180 88 Q260 91 340 87 L340 200 L0 200 Z"
          fill="#c8d4c0" opacity="0.28" />

        {/* ══ WAVES — drawn BEFORE cliff so cliff occludes them ══ */}

        {/* Background sea (deep blue-grey) */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="0 0" to="-900 0" dur="16s" repeatCount="indefinite" />
          <path
            d="M0 108 Q112 103 225 108 Q337 113 450 108 Q562 103 675 108 Q787 113 900 108
               Q1012 103 1125 108 Q1237 113 1350 108 Q1462 103 1575 108 Q1687 113 1800 108
               L1800 185 L0 185 Z"
            fill="#8fa8b8" opacity="0.75"
          />
        </g>

        {/* Mid sea */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="0 0" to="-900 0" dur="10s" repeatCount="indefinite" />
          <path
            d="M0 132 Q75 126 150 132 Q225 138 300 132 Q375 126 450 132 Q525 138 600 132
               Q675 126 750 132 Q825 138 900 132 Q975 126 1050 132 Q1125 138 1200 132
               Q1275 126 1350 132 Q1425 138 1500 132 Q1575 126 1650 132 Q1725 138 1800 132
               L1800 185 L0 185 Z"
            fill="#7a9eae"
          />
        </g>

        {/* ══ CLIFF — drawn AFTER waves, occludes them on right side ══ */}
        {/* Curved shore edge (natural, not boxy straight line) */}
        <path
          d="M900 200 L900 54 Q860 55 820 58 Q740 62 660 55 Q600 50 540 52
             Q490 54 460 66 Q448 72 444 88 Q441 104 442 120 Q442 138 448 155
             Q454 168 462 176 Q470 182 490 186 L900 186 Z"
          fill="#b8a888"
        />
        {/* Cliff depth / shadow on near face */}
        <path
          d="M442 120 Q448 110 460 105 Q490 98 530 100 Q570 102 620 108 L620 200 L442 200 Z"
          fill="#a89878" opacity="0.45"
        />

        {/* ══ HOUSES stacked on cliff ══ */}

        {/* Row 3 — highest, smallest */}
        {[
          { x: 660, y: 38, w: 20, h: 24, fill: "#d4b880", roof: "#c0a060" },
          { x: 686, y: 34, w: 22, h: 26, fill: "#c0a8a0", roof: "#a89090" },
          { x: 714, y: 32, w: 20, h: 24, fill: "#a8c4a0", roof: "#88a880" },
          { x: 740, y: 26, w: 24, h: 28, fill: "#c8b0a0", roof: "#a89080" },
          { x: 770, y: 22, w: 22, h: 28, fill: "#d8c890", roof: "#c0b070" },
          { x: 800, y: 18, w: 24, h: 30, fill: "#b8c8b0", roof: "#98a890" },
          { x: 830, y: 14, w: 28, h: 34, fill: "#d0b8a0", roof: "#b89880" },
          { x: 864, y: 10, w: 36, h: 38, fill: "#e0c8a8", roof: "#c8a888" },
        ].map(({ x, y, w, h, fill, roof }) => (
          <g key={x}>
            <rect x={x} y={y} width={w} height={h} rx="1" fill={fill} />
            <path d={`M${x - 2} ${y} L${x + w / 2} ${y - 8} L${x + w + 2} ${y} Z`} fill={roof} />
            <rect x={x + 4} y={y + 6} width={5} height={7} rx="1" fill="#8a9878" opacity="0.5" />
          </g>
        ))}

        {/* Row 2 — middle */}
        {[
          { x: 480, y: 72, w: 30, h: 40, fill: "#e8d098", roof: "#c8b078" },
          { x: 516, y: 66, w: 32, h: 46, fill: "#d4a8a0", roof: "#b88880" },
          { x: 554, y: 60, w: 28, h: 52, fill: "#a8c0b0", roof: "#88a090" },
          { x: 588, y: 54, w: 26, h: 56, fill: "#e0d0a8", roof: "#c0b088" },
          { x: 620, y: 50, w: 30, h: 62, fill: "#c8e0c8", roof: "#a8c0a8" },
        ].map(({ x, y, w, h, fill, roof }) => (
          <g key={x}>
            <rect x={x} y={y} width={w} height={h} rx="1" fill={fill} />
            <path d={`M${x - 2} ${y} L${x + w / 2} ${y - 10} L${x + w + 2} ${y} Z`} fill={roof} />
            <rect x={x + 4} y={y + 8} width={8} height={10} rx="1" fill="#8a9878" opacity="0.6" />
            <rect x={x + w - 14} y={y + 8} width={8} height={10} rx="1" fill="#8a9878" opacity="0.5" />
          </g>
        ))}

        {/* Row 1 — lowest and most detailed */}
        <rect x="458" y="108" width="34" height="68" rx="1" fill="#e8c888" />
        <path d="M456 108 L475 95 L494 108 Z" fill="#c8a868" />
        <rect x="462" y="118" width="9" height="13" rx="1" fill="#8a9878" opacity="0.65" />
        <rect x="476" y="118" width="9" height="13" rx="1" fill="#8a9878" opacity="0.55" />

        <rect x="498" y="102" width="36" height="74" rx="1" fill="#c8a898" />
        <path d="M496 102 L516 88 L536 102 Z" fill="#a88878" />
        <rect x="502" y="112" width="9" height="13" rx="1" fill="#8a9878" opacity="0.65" />
        <rect x="518" y="112" width="9" height="13" rx="1" fill="#8a9878" opacity="0.55" />
        {/* Balcony */}
        <rect x="514" y="111" width="14" height="2" fill="#b89878" />
        <rect x="514" y="113" width="2" height="7" fill="#b89878" />
        <rect x="526" y="113" width="2" height="7" fill="#b89878" />

        <rect x="540" y="96" width="32" height="80" rx="1" fill="#b8d0b0" />
        <path d="M538 96 L556 82 L574 96 Z" fill="#98b090" />
        <rect x="544" y="106" width="8" height="12" rx="1" fill="#8a9878" opacity="0.65" />
        <rect x="558" y="106" width="8" height="12" rx="1" fill="#8a9878" opacity="0.55" />

        {/* ── Harbour wall / breakwater ── */}
        <rect x="406" y="152" width="56" height="18" rx="2" fill="#a89878" />
        <rect x="396" y="148" width="20" height="22" rx="1" fill="#a89878" />
        <rect x="406" y="144" width="14" height="8" rx="1" fill="#988868" />

        {/* ── Pebble beach ── */}
        <path d="M0 168 Q100 162 220 164 Q320 166 414 162 Q430 161 448 164 L448 200 L0 200 Z"
          fill="#c4b8a8" />
        {[...Array(30)].map((_, i) => {
          const x = 10 + (i * 71) % 430;
          const y = 172 + (i * 11) % 18;
          const r = 2 + (i * 5) % 4;
          return <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.55} fill="#b0a494" opacity="0.5" />;
        })}

        {/* ── Boats on the beach ── */}
        <g transform="translate(65,166)" className="bocca-a">
          <path d="M-28 0 Q-30 6 -24 10 L24 10 Q30 6 28 0 Z" fill="#3a5878" />
          <rect x="-24" y="-2" width="48" height="4" fill="#4a6888" />
          <line x1="0" y1="-2" x2="0" y2="-20" stroke="#2a1810" strokeWidth="1.5" />
          <path d="M0 -20 L16 -12 L0 -4 Z" fill="#e8d4a0" opacity="0.8" />
        </g>
        <g transform="translate(162,164)" className="bocca-b">
          <path d="M-22 0 Q-24 5 -18 8 L18 8 Q24 5 22 0 Z" fill="#b83820" />
          <rect x="-18" y="-1" width="36" height="3" fill="#c84830" />
          <line x1="0" y1="-1" x2="0" y2="-16" stroke="#2a1810" strokeWidth="1.2" />
          <path d="M0 -16 L12 -10 L0 -3 Z" fill="#e8d4a0" opacity="0.75" />
        </g>
        <g transform="translate(248,166)" className="bocca-c">
          <path d="M-20 0 Q-22 5 -17 8 L17 8 Q22 5 20 0 Z" fill="#7a9840" />
          <rect x="-17" y="-1" width="34" height="3" fill="#8aaa50" />
        </g>
        <g transform="translate(322,165)" className="bocca-d">
          <path d="M-16 0 Q-18 4 -14 7 L14 7 Q18 4 16 0 Z" fill="#7a5830" />
          <rect x="-14" y="-1" width="28" height="3" fill="#8a6840" />
        </g>
        <g transform="translate(375,167)" className="bocca-a" style={{ animationDelay: "-3s" }}>
          <path d="M-13 0 Q-15 4 -11 6 L11 6 Q15 4 13 0 Z" fill="#884858" />
          <rect x="-11" y="-1" width="22" height="2.5" fill="#986868" />
        </g>

        {/* ── Foreground wave ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="-60 0" to="-960 0" dur="6s" repeatCount="indefinite" />
          <path
            d="M0 158 Q60 153 120 158 Q180 163 240 158 Q300 153 360 158 Q420 163 480 158
               Q540 153 600 158 Q660 163 720 158 Q780 153 840 158 Q900 163 960 158
               Q1020 153 1080 158 Q1140 163 1200 158 Q1260 153 1320 158 Q1380 163 1440 158
               Q1500 153 1560 158 Q1620 163 1680 158 Q1740 153 1800 158
               L1800 185 L0 185 Z"
            fill="#5a8898" opacity="0.5"
          />
        </g>

        {/* ── Seagull ── */}
        <g className="bocca-gull" style={{ transform: "translate(40px, 52px)" }}>
          <path d="M0 0 Q5 -4 10 0" fill="none" stroke="#746a5e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 0 Q17 -4 22 0" fill="none" stroke="#746a5e" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* ── Label ── */}
        <text x="230" y="196" textAnchor="middle" fontSize="7" fill="#746a5e"
          fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.65">
          BOCCADASSE
        </text>
      </svg>
    </div>
  );
}
