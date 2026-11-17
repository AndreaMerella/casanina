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
      style={{ maxHeight: 'none' }}
    >
      <svg
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block", overflow: "hidden" }}
      >
        <defs>
          {/* Hard clip for the entire scene — prevents Safari animation bleed */}
          <clipPath id="bocca-viewport">
            <rect x="0" y="0" width="900" height="200"/>
          </clipPath>
          <clipPath id="bocca-sea-clip">
            <rect x="0" y="0" width="446" height="200"/>
          </clipPath>
        </defs>

        <g clipPath="url(#bocca-viewport)">
        {/* ── Sky ── */}
        <rect x="0" y="0" width="900" height="200" fill="#faf8f4" />
        <rect x="0" y="70" width="900" height="24" fill="#dce8ee" opacity="0.35" />

        {/* ── Distant coastal hills on left horizon ── */}
        <path d="M0 92 Q80 84 180 88 Q260 91 340 87 L340 200 L0 200 Z"
          fill="#c8d4c0" opacity="0.28" />

        {/* ══ WAVES — drawn BEFORE cliff so cliff occludes them ══ */}

        {/* Background sea (deep blue-grey) — clipped to sea area only */}
        <g clipPath="url(#bocca-sea-clip)">
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
        </g>

        {/* Mid sea — clipped to sea area only */}
        <g clipPath="url(#bocca-sea-clip)">
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
        </g>

        {/* ══ CLIFF — drawn AFTER waves, occludes them on right side ══ */}
        {/* Main cliff body: covers x=436-900 from curved top down to y=200 */}
        <path
          d="M436 200 L436 90 Q450 72 470 64 Q510 54 580 48 Q660 43 750 40 Q820 38 900 36 L900 200 Z"
          fill="#b8a888"
        />
        {/* Cliff shadow/depth */}
        <path
          d="M436 200 L436 120 Q460 108 500 104 Q540 102 580 104 L580 200 Z"
          fill="#a89878" opacity="0.4"
        />
        {/* Safety belt — ensures full coverage at the bottom strip */}
        <rect x="435" y="184" width="465" height="16" fill="#b8a888"/>

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

        {/* ── Boats pulled up ON the pebble beach (beached, grounded) ── */}
        {/* Each boat: a soft shadow on the pebbles, then mast/sail, then hull
            drawn last so the keel rests on the beach surface (no sinking). */}

        {/* Blue sailboat */}
        <g transform="translate(72,153)">
          <ellipse cx="0" cy="12" rx="30" ry="3" fill="#8a7e6e" opacity="0.32" />
          <line x1="0" y1="2" x2="0" y2="-18" stroke="#2a1810" strokeWidth="1.5" />
          <path d="M0 -18 L15 -10 L0 -3 Z" fill="#e8d4a0" opacity="0.85" />
          <path d="M-28 2 Q-30 8 -23 11 L23 11 Q30 8 28 2 Z" fill="#3a5878" />
          <rect x="-24" y="0" width="48" height="3.5" fill="#4a6888" />
        </g>

        {/* Red sailboat */}
        <g transform="translate(166,155)">
          <ellipse cx="0" cy="10" rx="24" ry="2.6" fill="#8a7e6e" opacity="0.32" />
          <line x1="0" y1="1" x2="0" y2="-15" stroke="#2a1810" strokeWidth="1.2" />
          <path d="M0 -15 L12 -9 L0 -2 Z" fill="#e8d4a0" opacity="0.8" />
          <path d="M-22 1 Q-24 6 -18 9 L18 9 Q24 6 22 1 Z" fill="#b83820" />
          <rect x="-18" y="-1" width="36" height="3" fill="#c84830" />
        </g>

        {/* Green rowing boat */}
        <g transform="translate(250,157)">
          <ellipse cx="0" cy="10" rx="22" ry="2.4" fill="#8a7e6e" opacity="0.3" />
          <path d="M-20 1 Q-22 6 -16 9 L16 9 Q22 6 20 1 Z" fill="#7a9840" />
          <rect x="-17" y="-1" width="34" height="3" fill="#8aaa50" />
        </g>

        {/* Brown rowing boat */}
        <g transform="translate(324,159)">
          <ellipse cx="0" cy="9" rx="18" ry="2.2" fill="#8a7e6e" opacity="0.3" />
          <path d="M-16 1 Q-18 5 -13 8 L13 8 Q18 5 16 1 Z" fill="#7a5830" />
          <rect x="-14" y="-1" width="28" height="3" fill="#8a6840" />
        </g>

        {/* Plum skiff */}
        <g transform="translate(378,157)">
          <ellipse cx="0" cy="8" rx="15" ry="2" fill="#8a7e6e" opacity="0.28" />
          <path d="M-13 1 Q-15 5 -11 7 L11 7 Q15 5 13 1 Z" fill="#884858" />
          <rect x="-11" y="-1" width="22" height="2.5" fill="#986868" />
        </g>

        {/* ── A few people down on the pebble beach (original figures) ── */}
        {[
          { x: 112, c: "#9a5a48", hair: "#2a1d14", skin: "#d8b08c" },
          { x: 158, c: "#4a6a7a", hair: "#5a3a24", skin: "#e4c0a0" },
          { x: 300, c: "#6f8f6a", hair: "#2e2018", skin: "#d8ac88" },
        ].map(({ x, c, hair, skin }, i) => (
          <g key={i} transform={`translate(${x},171)`}>
            <line x1="-1" y1="0" x2="-0.9" y2="-4.6" stroke="#44392f" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="1" y1="0" x2="0.9" y2="-4.6" stroke="#44392f" strokeWidth="1.3" strokeLinecap="round" />
            <path d={`M-1.9 -4.6 L-1.7 -10 Q0 -10.7 1.7 -10 L1.9 -4.6 Q0 -5.1 -1.9 -4.6 Z`} fill={c} />
            <circle cx="0" cy="-12" r="1.7" fill={skin} />
            <path d="M-1.7 -11.9 Q-1.5 -14 0 -14.1 Q1.5 -14 1.7 -11.9 Q0.9 -13 0 -13 Q-0.9 -13 -1.7 -11.9 Z" fill={hair} />
          </g>
        ))}

        {/* ── Foreground wave — clipped to sea area only ── */}
        <g clipPath="url(#bocca-sea-clip)">
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
        </g>

        {/* ── Seagull — SVG-native animation so it's clipped by viewport ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="40 52" to="860 42" dur="18s" repeatCount="indefinite" begin="-6s"/>
          <path d="M0 0 Q5 -4 10 0" fill="none" stroke="#746a5e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 0 Q17 -4 22 0" fill="none" stroke="#746a5e" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* ── Label ── */}
        <text x="230" y="196" textAnchor="middle" fontSize="7" fill="#746a5e"
          fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.65">
          BOCCADASSE
        </text>
        </g>{/* end bocca-viewport clip */}
      </svg>
    </div>
  );
}
