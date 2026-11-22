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
            {/* Water area: full width at the horizon, right edge recedes along the
                shore and tucks behind the pier/headland — no vertical "wall" of sea */}
            <path d="M0 0 L444 0 L444 120 Q432 150 408 170 L0 172 Z" />
          </clipPath>
          <linearGradient id="bocca-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ecefe9" />
            <stop offset="0.3" stopColor="#bcdcea" />
            <stop offset="0.68" stopColor="#d2e6ec" />
            <stop offset="1" stopColor="#eef1ec" />
          </linearGradient>
        </defs>

        <g clipPath="url(#bocca-viewport)">
        {/* ── Sky — soft sunny Ligurian blue ── */}
        <rect x="0" y="0" width="900" height="200" fill="url(#bocca-sky)" />

        {/* Drifting clouds */}
        {[
          { x0: 120, y: 24, s: 1.1, o: 0.9, dur: "26s", begin: "0s" },
          { x0: 520, y: 40, s: 0.78, o: 0.78, dur: "34s", begin: "-14s" },
          { x0: 770, y: 30, s: 0.95, o: 0.85, dur: "30s", begin: "-22s" },
        ].map((cl, i) => (
          <g key={i} opacity={cl.o}>
            <animateTransform attributeName="transform" type="translate"
              values={`${cl.x0} ${cl.y}; ${cl.x0 + 34} ${cl.y}; ${cl.x0} ${cl.y}`}
              dur={cl.dur} begin={cl.begin} repeatCount="indefinite" />
            <g transform={`scale(${cl.s})`}>
              <ellipse cx="0" cy="0" rx="20" ry="6.5" fill="#fdfefe" />
              <ellipse cx="-12" cy="2.5" rx="13" ry="5.5" fill="#fdfefe" />
              <ellipse cx="13" cy="2.5" rx="13" ry="5.5" fill="#fdfefe" />
              <ellipse cx="2" cy="-3" rx="11" ry="5.5" fill="#fdfefe" />
            </g>
          </g>
        ))}

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

        {/* ══ Open sea beyond the headland (right side) ══ */}
        <rect x="772" y="108" width="128" height="92" fill="#7a9eae" />
        <rect x="772" y="108" width="128" height="30" fill="#8fa8b8" opacity="0.5" />
        <path d="M800 108 Q850 101 900 105 L900 116 L800 116 Z" fill="#c8d4c0" opacity="0.3" />

        {/* ══ HEADLAND — rises from the water, then drops back to the sea on the right ══ */}
        <path
          d="M436 200 L436 92 Q452 74 480 66 Q548 50 648 46 Q700 44 742 50 Q782 58 800 96 Q814 132 818 166 Q820 186 814 200 Z"
          fill="#b8a888"
        />
        {/* Cliff shadow/depth */}
        <path
          d="M436 200 L436 120 Q460 108 500 104 Q540 102 580 104 L580 200 Z"
          fill="#a89878" opacity="0.4"
        />
        {/* Rocks where the headland drops into the sea */}
        <ellipse cx="812" cy="186" rx="14" ry="6" fill="#9a8c74" />
        <ellipse cx="826" cy="192" rx="9" ry="4" fill="#8c7e66" />
        {/* Safety belt — bottom strip under the houses */}
        <rect x="435" y="184" width="382" height="16" fill="#b8a888"/>

        {/* ══ HOUSES stacked on cliff ══ */}

        {/* ── Promontory retaining wall / rock base under the houses ── */}
        <rect x="486" y="182" width="326" height="18" fill="#b0a184" />
        <rect x="486" y="182" width="326" height="3" fill="#9c8e72" opacity="0.6" />

        {/* ── Green vegetation on the upper headland ── */}
        <path d="M436 96 Q510 62 620 50 Q710 44 772 50 Q798 56 808 90 L808 122 Q740 114 640 116 Q540 120 470 118 Q452 116 436 128 Z"
          fill="#9eb078" opacity="0.72" />
        <path d="M540 68 Q630 52 720 50 Q772 50 794 62 L798 94 Q720 90 630 94 Q560 98 540 100 Z"
          fill="#8aa068" opacity="0.5" />
        {[
          [470, 90], [512, 74], [556, 64], [598, 58], [700, 54],
          [740, 58], [772, 70], [540, 70], [628, 54],
        ].map(([tx, ty], i) => (
          <g key={`t${i}`}>
            <ellipse cx={tx} cy={ty} rx="7" ry="5.5" fill="#7c9460" opacity="0.62" />
            <ellipse cx={tx + 4} cy={ty + 1.5} rx="5" ry="4.5" fill="#8ca66c" opacity="0.6" />
          </g>
        ))}

        {/* ── Castello — set back on the hill, mostly behind the houses ── */}
        <g>
          <rect x="654" y="42" width="28" height="46" fill="#b06048" />
          <rect x="654" y="38" width="28" height="5" fill="#b06048" />
          <rect x="654" y="34" width="6" height="5" fill="#b06048" />
          <rect x="665" y="34" width="6" height="5" fill="#b06048" />
          <rect x="676" y="34" width="6" height="5" fill="#b06048" />
          <rect x="672" y="26" width="12" height="13" fill="#a85840" />
          <rect x="672" y="23" width="4" height="4" fill="#a85840" />
          <rect x="680" y="23" width="4" height="4" fill="#a85840" />
          <rect x="660" y="50" width="5" height="8" rx="1.5" fill="#4e241c" />
          <rect x="672" y="50" width="5" height="8" rx="1.5" fill="#4e241c" />
          <rect x="660" y="64" width="5" height="8" rx="1.5" fill="#4e241c" />
          <rect x="672" y="64" width="5" height="8" rx="1.5" fill="#4e241c" />
        </g>

        {/* ══ Boccadasse houses — short Ligurian facades, flat tops, real colours ══ */}
        {[
          /* TIER 3 — highest on the slope, just under the green */
          { x: 540, y: 66, w: 30, h: 46, c: "#7f9fae" },
          { x: 574, y: 62, w: 30, h: 50, c: "#b8c490" },
          { x: 608, y: 62, w: 28, h: 50, c: "#d98a7a" },
          { x: 690, y: 62, w: 30, h: 50, c: "#e0b85a" },
          { x: 724, y: 64, w: 30, h: 48, c: "#cf7a5a" },
          /* TIER 2 — middle, overlapping the backs of tier 1 */
          { x: 500, y: 100, w: 32, h: 50, c: "#e0b85a" },
          { x: 536, y: 96, w: 32, h: 54, c: "#cf7a5a" },
          { x: 572, y: 98, w: 30, h: 52, c: "#e8ddc4" },
          { x: 606, y: 100, w: 30, h: 52, c: "#d4a84c" },
          { x: 640, y: 100, w: 32, h: 52, c: "#8fb4a0" },
          { x: 676, y: 98, w: 32, h: 54, c: "#c99ab0" },
          { x: 712, y: 100, w: 32, h: 50, c: "#d89068" },
          /* TIER 1 — front row, right down at the water's edge */
          { x: 440, y: 134, w: 34, h: 48, c: "#cf7a5a" },
          { x: 476, y: 130, w: 34, h: 52, c: "#e0b85a" },
          { x: 512, y: 132, w: 34, h: 50, c: "#d98a7a" },
          { x: 548, y: 134, w: 32, h: 48, c: "#b8c490" },
          { x: 582, y: 136, w: 32, h: 46, c: "#e8ddc4" },
          { x: 616, y: 138, w: 32, h: 44, c: "#7f9fae" },
          { x: 650, y: 138, w: 34, h: 44, c: "#d89068" },
          { x: 686, y: 136, w: 34, h: 46, c: "#d4a84c" },
          { x: 722, y: 138, w: 34, h: 44, c: "#d98a7a" },
        ].map(({ x, y, w, h, c }, i) => {
          const rows = Math.max(2, Math.round((h - 6) / 19));
          const wins = [];
          for (let r = 0; r < rows; r++) {
            for (let k = 0; k < 2; k++) {
              wins.push([x + (w / 3) * (k + 1) - 2.4, y + 7 + r * ((h - 12) / rows)]);
            }
          }
          return (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} fill={c} />
              <rect x={x} y={y} width={w} height="2" fill="#2a1d14" opacity="0.12" />
              {wins.map(([wx, wy], k) => (
                <g key={k}>
                  <rect x={wx} y={wy} width="4.8" height="6.4" rx="0.4" fill="#2e2016" opacity="0.42" />
                  <rect x={wx - 1.1} y={wy} width="1.1" height="6.4" fill="#5c6a48" opacity="0.5" />
                  <rect x={wx + 4.8} y={wy} width="1.1" height="6.4" fill="#5c6a48" opacity="0.5" />
                </g>
              ))}
            </g>
          );
        })}

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

        {/* Beach towels / mats laid on the pebbles */}
        {[
          { x: 62, y: 197, w: 22, c: "#d87a6a" },
          { x: 104, y: 199, w: 20, c: "#5a8aa0" },
          { x: 246, y: 194, w: 18, c: "#e0b050" },
          { x: 268, y: 191, w: 15, c: "#8ab890" },
          { x: 384, y: 188, w: 12, c: "#c88aa8" },
        ].map(({ x, y, w, c }, i) => (
          <ellipse key={i} cx={x} cy={y} rx={w / 2} ry={w * 0.16} fill={c} opacity="0.7" />
        ))}

        {/* ── Beach crowd — mostly sitting & relaxing, a few standing (orig. figures) ── */}
        {[
          // foreground sitting cluster (bigger = closer)
          { x: 66, y: 195, s: 1.6, pose: "sit", c: "#9a5a48", hair: "#2a1d14", skin: "#d8b08c" },
          { x: 90, y: 197, s: 1.7, pose: "sit", c: "#4a6a7a", hair: "#5a3a24", skin: "#e4c0a0" },
          { x: 116, y: 194, s: 1.55, pose: "sit", c: "#6f8f6a", hair: "#2e2018", skin: "#d8ac88" },
          // a standing pair with drinks
          { x: 150, y: 193, s: 1.5, pose: "stand", c: "#b5654a", hair: "#3a2a1c", skin: "#e4c0a0", drink: "wine" },
          { x: 170, y: 194, s: 1.45, pose: "stand", c: "#3f6075", hair: "#2a1d12", skin: "#d8ac88", drink: "beer" },
          // mid sitting group
          { x: 232, y: 190, s: 1.4, pose: "sit", c: "#8a5a3a", hair: "#4a3020", skin: "#e4c0a0" },
          { x: 255, y: 192, s: 1.5, pose: "sit", c: "#6f8f6a", hair: "#2a1d14", skin: "#d8b08c" },
          { x: 278, y: 189, s: 1.35, pose: "sit", c: "#a0506a", hair: "#2e2018", skin: "#e4c0a0" },
          // adult + kid standing
          { x: 320, y: 193, s: 1.5, pose: "stand", c: "#5a7a8a", hair: "#3a2a1c", skin: "#d8ac88" },
          { x: 334, y: 194, s: 0.95, pose: "stand", c: "#d08040", hair: "#2a1d14", skin: "#e4c0a0" },
          // far sitting group (smaller = further back)
          { x: 372, y: 184, s: 1.1, pose: "sit", c: "#4a6a7a", hair: "#4a3020", skin: "#d8b08c" },
          { x: 392, y: 186, s: 1.2, pose: "sit", c: "#9a5a48", hair: "#2e2018", skin: "#e4c0a0" },
        ].map(({ x, y, s, pose, c, hair, skin, drink }, i) => (
          <g key={i} transform={`translate(${x},${y}) scale(${s})`}>
            <ellipse cx="0" cy="0.6" rx={pose === "sit" ? 4 : 3} ry="0.9" fill="#8a7e6e" opacity="0.28" />
            {pose === "sit" ? (
              <>
                {/* seated, hugging knees — rounded dome reads as a person on the sand */}
                <path d="M-3.4 0 Q-4 -5 -2.4 -6.6 Q0 -8 2.4 -6.6 Q4 -5 3.4 0 Z" fill={c} />
                <ellipse cx="-2.9" cy="-1" rx="1.4" ry="1.8" fill={skin} opacity="0.9" />
                <circle cx="0" cy="-8.4" r="1.7" fill={skin} />
                <path d="M-1.6 -8.2 Q-1.4 -10.3 0 -10.4 Q1.4 -10.3 1.6 -8.2 Q0.8 -9.3 0 -9.3 Q-0.8 -9.3 -1.6 -8.2 Z" fill={hair} />
              </>
            ) : (
              <>
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
        <rect x="186" y="188" width="88" height="11" rx="5" fill="#faf6ee" opacity="0.72" />
        <text x="230" y="196" textAnchor="middle" fontSize="7.5" fill="#453c32"
          fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.16em" fontWeight="600">
          BOCCADASSE
        </text>
        </g>{/* end bocca-viewport clip */}
      </svg>
    </div>
  );
}
