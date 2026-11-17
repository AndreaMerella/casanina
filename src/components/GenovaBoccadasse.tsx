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

        {/* ── Promontory retaining wall / rock base under the houses ── */}
        <rect x="486" y="182" width="414" height="18" fill="#b0a184" />
        <rect x="486" y="182" width="414" height="3" fill="#9c8e72" opacity="0.6" />

        {/* ══ Dense hillside houses covering the promontory (back → front) ══ */}
        {[
          /* back row — high on the hill, smaller, tucked under the ridge */
          { x: 468, y: 68, w: 26, h: 52, c: "#e8c060", r: "#c8a040" },
          { x: 498, y: 62, w: 28, h: 58, c: "#dd8a70", r: "#bd6a50" },
          { x: 530, y: 56, w: 26, h: 62, c: "#8fb878", r: "#6f9858" },
          { x: 560, y: 52, w: 28, h: 66, c: "#e0a878", r: "#c08858" },
          { x: 592, y: 50, w: 26, h: 68, c: "#d890a0", r: "#b87080" },
          { x: 616, y: 118, w: 30, h: 64, c: "#d8a878", r: "#b88858" },
          { x: 658, y: 48, w: 26, h: 64, c: "#e8c868", r: "#c8a848" },
          { x: 690, y: 46, w: 28, h: 66, c: "#c88a78", r: "#a86a58" },
          { x: 722, y: 44, w: 26, h: 68, c: "#9cc080", r: "#7ca060" },
          { x: 754, y: 42, w: 28, h: 70, c: "#e0b070", r: "#c09050" },
          { x: 786, y: 42, w: 26, h: 70, c: "#dd96a0", r: "#bd7680" },
          { x: 818, y: 40, w: 28, h: 72, c: "#e8cc78", r: "#c8ac58" },
          { x: 850, y: 40, w: 30, h: 72, c: "#c0a888", r: "#a08868" },
          /* front row — lower, larger, overlapping the back-row bases */
          { x: 584, y: 98, w: 30, h: 84, c: "#e8b84a", r: "#c89830" },
          { x: 656, y: 90, w: 32, h: 92, c: "#8ab890", r: "#6a9870" },
          { x: 694, y: 86, w: 32, h: 96, c: "#e0a060", r: "#c08040" },
          { x: 732, y: 84, w: 32, h: 98, c: "#d890a8", r: "#b87088" },
          { x: 770, y: 82, w: 32, h: 100, c: "#ecc868", r: "#cca848" },
          { x: 808, y: 80, w: 34, h: 102, c: "#c8a890", r: "#a88870" },
          { x: 846, y: 78, w: 34, h: 104, c: "#e0956a", r: "#c0754a" },
        ].map(({ x, y, w, h, c, r }, i) => (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx="1" fill={c} />
            <path d={`M${x - 2} ${y} L${x + w / 2} ${y - 9} L${x + w + 2} ${y} Z`} fill={r} />
            <rect x={x + w * 0.18} y={y + 7} width={w * 0.24} height="7" rx="1" fill="#3a2a1e" opacity="0.38" />
            <rect x={x + w * 0.56} y={y + 7} width={w * 0.24} height="7" rx="1" fill="#3a2a1e" opacity="0.32" />
            <rect x={x + w * 0.36} y={y + 20} width={w * 0.28} height="8" rx="1" fill="#3a2a1e" opacity="0.28" />
          </g>
        ))}

        {/* ── Castello — the landmark tower that crowns the cove ── */}
        <g>
          {/* main tower body */}
          <rect x="606" y="48" width="42" height="64" fill="#b4543e" />
          <rect x="606" y="100" width="42" height="12" fill="#9c4634" />
          {/* crenellated parapet */}
          <rect x="606" y="42" width="8" height="7" fill="#b4543e" />
          <rect x="618" y="42" width="8" height="7" fill="#b4543e" />
          <rect x="630" y="42" width="8" height="7" fill="#b4543e" />
          <rect x="640" y="42" width="8" height="7" fill="#b4543e" />
          {/* taller corner turret */}
          <rect x="636" y="30" width="14" height="19" fill="#aa4e38" />
          <rect x="636" y="26" width="5" height="5" fill="#aa4e38" />
          <rect x="645" y="26" width="5" height="5" fill="#aa4e38" />
          {/* arched windows */}
          <rect x="613" y="56" width="6" height="10" rx="2" fill="#4e241c" />
          <rect x="633" y="56" width="6" height="10" rx="2" fill="#4e241c" />
          <rect x="613" y="74" width="6" height="10" rx="2" fill="#4e241c" />
          <rect x="633" y="74" width="6" height="10" rx="2" fill="#4e241c" />
          <rect x="639" y="34" width="4" height="7" rx="1" fill="#4e241c" />
          <rect x="622" y="92" width="8" height="15" rx="2" fill="#4e241c" />
        </g>

        {/* Row 1 — lowest and most detailed */}
        <rect x="458" y="108" width="34" height="68" rx="1" fill="#f0b84a" />
        <path d="M456 108 L475 95 L494 108 Z" fill="#d09838" />
        <rect x="462" y="118" width="9" height="13" rx="1" fill="#8a9878" opacity="0.65" />
        <rect x="476" y="118" width="9" height="13" rx="1" fill="#8a9878" opacity="0.55" />

        <rect x="498" y="102" width="36" height="74" rx="1" fill="#e58a68" />
        <path d="M496 102 L516 88 L536 102 Z" fill="#c06a4a" />
        <rect x="502" y="112" width="9" height="13" rx="1" fill="#8a9878" opacity="0.65" />
        <rect x="518" y="112" width="9" height="13" rx="1" fill="#8a9878" opacity="0.55" />
        {/* Balcony */}
        <rect x="514" y="111" width="14" height="2" fill="#b89878" />
        <rect x="514" y="113" width="2" height="7" fill="#b89878" />
        <rect x="526" y="113" width="2" height="7" fill="#b89878" />

        <rect x="540" y="96" width="32" height="80" rx="1" fill="#9ec878" />
        <path d="M538 96 L556 82 L574 96 Z" fill="#7ca858" />
        <rect x="544" y="106" width="8" height="12" rx="1" fill="#8a9878" opacity="0.65" />
        <rect x="558" y="106" width="8" height="12" rx="1" fill="#8a9878" opacity="0.55" />

        {/* ── Harbour wall / breakwater ── */}
        <rect x="406" y="152" width="56" height="18" rx="2" fill="#a89878" />
        <rect x="396" y="148" width="20" height="22" rx="1" fill="#a89878" />
        <rect x="406" y="144" width="14" height="8" rx="1" fill="#988868" />

        {/* ══ BEACH & SHORELINE — layered back-to-front for real depth ══ */}

        {/* Dry pebble beach fills the foreground below the tide line */}
        <path d="M0 172 Q120 167 240 170 Q340 172 414 168 Q430 167 448 170 L448 200 L0 200 Z"
          fill="#ccc1b1" />

        {/* Damp-sand band at the water's edge (darker, where the sea just reached) */}
        <path d="M0 168 Q110 163 230 166 Q330 168 414 164 Q430 163 448 166
                 L448 175 Q430 174 414 176 Q330 180 230 178 Q110 175 0 180 Z"
          fill="#a89a82" opacity="0.8" />

        {/* Rocky foot of the promontory where the cliff meets the shore */}
        <path d="M436 200 L436 179 Q448 171 462 177 Q476 171 490 178 L490 200 Z" fill="#9a8c74" />
        <ellipse cx="452" cy="183" rx="9" ry="4.5" fill="#8c7e66" />
        <ellipse cx="474" cy="185" rx="7" ry="4" fill="#8c7e66" />
        <ellipse cx="463" cy="189" rx="11" ry="4" fill="#a2957d" opacity="0.65" />

        {/* Shallow water + foam crest right at the water's edge (clipped to sea) */}
        <g clipPath="url(#bocca-sea-clip)">
          <g>
            <animateTransform attributeName="transform" type="translate"
              from="-60 0" to="-960 0" dur="6s" repeatCount="indefinite" />
            <path
              d="M0 157 Q60 153 120 157 Q180 161 240 157 Q300 153 360 157 Q420 161 480 157
                 Q540 153 600 157 Q660 161 720 157 Q780 153 840 157 Q900 161 960 157
                 Q1020 153 1080 157 Q1140 161 1200 157 Q1260 153 1320 157 Q1380 161 1440 157
                 Q1500 153 1560 157 Q1620 161 1680 157 Q1740 153 1800 157
                 L1800 165 L0 165 Z"
              fill="#6c98a6" opacity="0.38"
            />
            <path
              d="M0 160 Q60 156 120 160 Q180 164 240 160 Q300 156 360 160 Q420 164 480 160
                 Q540 156 600 160 Q660 164 720 160 Q780 156 840 160 Q900 164 960 160
                 Q1020 156 1080 160 Q1140 164 1200 160 Q1260 156 1320 160 Q1380 164 1440 160
                 Q1500 156 1560 160 Q1620 164 1680 160 Q1740 156 1800 160"
              fill="none" stroke="#eef2ee" strokeWidth="1.3" opacity="0.6"
            />
          </g>
        </g>

        {/* Pebble texture on the dry beach */}
        {[...Array(24)].map((_, i) => {
          const x = 8 + (i * 73) % 420;
          const y = 183 + (i * 11) % 13;
          const r = 2 + (i * 5) % 4;
          return <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.5} fill="#b6aa96" opacity="0.5" />;
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

        {/* ── People on the dry beach — some with a glass of wine or a beer ── */}
        {[
          { x: 92, c: "#9a5a48", hair: "#2a1d14", skin: "#d8b08c", drink: "wine" },
          { x: 150, c: "#4a6a7a", hair: "#5a3a24", skin: "#e4c0a0", drink: "beer" },
          { x: 206, c: "#6f8f6a", hair: "#2e2018", skin: "#d8ac88", drink: null },
          { x: 262, c: "#b5654a", hair: "#3a2a1c", skin: "#e4c0a0", drink: "wine" },
          { x: 320, c: "#3f6075", hair: "#2a1d12", skin: "#d8ac88", drink: null },
          { x: 376, c: "#8a5a3a", hair: "#4a3020", skin: "#e4c0a0", drink: "beer" },
        ].map(({ x, c, hair, skin, drink }, i) => (
          <g key={i} transform={`translate(${x},191) scale(1.5)`}>
            <ellipse cx="0" cy="0.6" rx="3" ry="0.9" fill="#8a7e6e" opacity="0.3" />
            <line x1="-1" y1="0" x2="-0.9" y2="-4.6" stroke="#44392f" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="1" y1="0" x2="0.9" y2="-4.6" stroke="#44392f" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M-1.9 -4.6 L-1.7 -10 Q0 -10.7 1.7 -10 L1.9 -4.6 Q0 -5.1 -1.9 -4.6 Z" fill={c} />
            <circle cx="0" cy="-12" r="1.7" fill={skin} />
            <path d="M-1.7 -11.9 Q-1.5 -14 0 -14.1 Q1.5 -14 1.7 -11.9 Q0.9 -13 0 -13 Q-0.9 -13 -1.7 -11.9 Z" fill={hair} />
            {drink === "wine" && (
              <>
                <line x1="1.3" y1="-8" x2="2.8" y2="-10.6" stroke={c} strokeWidth="1.1" strokeLinecap="round" />
                <line x1="2.8" y1="-10.6" x2="2.8" y2="-12.7" stroke="#6a5a48" strokeWidth="0.5" />
                <path d="M1.9 -12.7 L3.7 -12.7 L2.8 -14.3 Z" fill="#7a1e2e" />
              </>
            )}
            {drink === "beer" && (
              <>
                <line x1="1.3" y1="-8" x2="2.5" y2="-10.6" stroke={c} strokeWidth="1.1" strokeLinecap="round" />
                <rect x="2" y="-13.9" width="2.3" height="3.4" rx="0.3" fill="#e2a828" />
                <rect x="2" y="-14.2" width="2.3" height="0.8" fill="#f5efe0" />
              </>
            )}
          </g>
        ))}

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
