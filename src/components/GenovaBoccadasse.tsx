"use client";

/**
 * GenovaBoccadasse — the fishing village east of the city
 * Pastel houses on the cliff, coloured boats on the pebble beach
 * Full-width scene — sea left, cove centre, houses right
 * Waves use SVG animateTransform (SVG user-units) for correct tiling at any viewport width
 */
export default function GenovaBoccadasse() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <svg
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block" }}
      >
        <style>{`
          @keyframes boat-rock-a {
            0%,100% { transform: rotate(-5deg); }
            50%     { transform: rotate(5deg); }
          }
          @keyframes boat-rock-b {
            0%,100% { transform: rotate(4deg); }
            50%     { transform: rotate(-5deg); }
          }
          @keyframes boat-rock-c {
            0%,100% { transform: rotate(-3deg); }
            50%     { transform: rotate(4deg); }
          }
          @keyframes seagull {
            0%   { transform: translate(0px,0px); }
            100% { transform: translate(820px,-12px); }
          }
          .boat-a { animation: boat-rock-a 4s ease-in-out infinite; transform-origin: 0px 0px; }
          .boat-b { animation: boat-rock-b 5s ease-in-out infinite; transform-origin: 0px 0px; animation-delay:-1.5s; }
          .boat-c { animation: boat-rock-c 3.5s ease-in-out infinite; transform-origin: 0px 0px; animation-delay:-0.8s; }
          .boat-d { animation: boat-rock-a 4.8s ease-in-out infinite; transform-origin: 0px 0px; animation-delay:-2.2s; }
          .seagull-fly { animation: seagull 18s linear infinite; animation-delay:-6s; }
        `}</style>

        {/* ── Sky ── */}
        <rect x="0" y="0" width="900" height="200" fill="#faf8f4"/>
        <rect x="0" y="72" width="900" height="22" fill="#dce8ee" opacity="0.35"/>

        {/* ── Distant coastline / hills on left horizon ── */}
        <path d="M0 90 Q80 82 180 86 Q260 89 340 85 L340 200 L0 200 Z"
              fill="#c8d4c0" opacity="0.3"/>

        {/* ── Cliff — centre-right, the rocky promontory ── */}
        <path d="M440 200 L440 100 Q480 88 530 80 Q580 72 640 68 Q720 62 820 58 Q860 55 900 54 L900 200 Z"
              fill="#b8a888"/>
        <path d="M440 200 L440 120 Q470 110 510 105 Q560 100 620 102 L620 200 Z"
              fill="#a89878" opacity="0.5"/>

        {/* ── Houses stacked on cliff — span x=460 → 900 ── */}
        {/* Row 3 — highest, smallest */}
        <rect x="660" y="40" width="20" height="25" rx="1" fill="#d4b880"/>
        <path d="M658 40 L670 32 L682 40 Z" fill="#c0a060"/>
        <rect x="664" y="47" width="5"  height="7"  rx="1" fill="#8a9878" opacity="0.55"/>

        <rect x="686" y="36" width="22" height="28" rx="1" fill="#c0a8a0"/>
        <path d="M684 36 L697 27 L710 36 Z" fill="#a89090"/>
        <rect x="690" y="43" width="5"  height="7"  rx="1" fill="#8a9878" opacity="0.55"/>
        <rect x="700" y="43" width="5"  height="7"  rx="1" fill="#8a9878" opacity="0.45"/>

        <rect x="715" y="34" width="20" height="26" rx="1" fill="#a8c4a0"/>
        <path d="M713 34 L725 26 L737 34 Z" fill="#88a880"/>
        <rect x="718" y="41" width="5"  height="7"  rx="1" fill="#8a9878" opacity="0.5"/>

        <rect x="742" y="28" width="24" height="30" rx="1" fill="#c8b0a0"/>
        <path d="M740 28 L754 19 L768 28 Z" fill="#a89080"/>
        <rect x="746" y="36" width="5"  height="8"  rx="1" fill="#8a9878" opacity="0.5"/>

        <rect x="772" y="24" width="22" height="30" rx="1" fill="#d8c890"/>
        <path d="M770 24 L783 15 L796 24 Z" fill="#c0b070"/>
        <rect x="776" y="32" width="5"  height="8"  rx="1" fill="#8a9878" opacity="0.45"/>

        <rect x="800" y="20" width="24" height="32" rx="1" fill="#b8c8b0"/>
        <path d="M798 20 L812 11 L826 20 Z" fill="#98a890"/>

        <rect x="830" y="16" width="28" height="36" rx="1" fill="#d0b8a0"/>
        <path d="M828 16 L844 7 L860 16 Z" fill="#b89880"/>
        <rect x="834" y="24" width="6"  height="9"  rx="1" fill="#8a9878" opacity="0.5"/>
        <rect x="845" y="24" width="6"  height="9"  rx="1" fill="#8a9878" opacity="0.45"/>

        <rect x="862" y="12" width="38" height="40" rx="1" fill="#e0c8a8"/>
        <path d="M860 12 L881 2 L902 12 Z" fill="#c8a888"/>
        <rect x="866" y="20" width="7"  height="10" rx="1" fill="#8a9878" opacity="0.55"/>
        <rect x="880" y="20" width="7"  height="10" rx="1" fill="#8a9878" opacity="0.5"/>

        {/* Row 2 — middle */}
        <rect x="476" y="76" width="30" height="40" rx="1" fill="#e8d098"/>
        <path d="M474 76 L491 64 L508 76 Z" fill="#c8b078"/>
        <rect x="482" y="85" width="8"  height="10" rx="1" fill="#8a9878" opacity="0.6"/>
        <rect x="494" y="85" width="8"  height="10" rx="1" fill="#8a9878" opacity="0.5"/>
        <path d="M484 116 Q491 109 498 116 L498 116 Z" fill="#886848" opacity="0.7"/>

        <rect x="512" y="70" width="32" height="46" rx="1" fill="#d4a8a0"/>
        <path d="M510 70 L526 58 L542 70 Z" fill="#b88880"/>
        <rect x="516" y="80" width="8"  height="10" rx="1" fill="#8a9878" opacity="0.6"/>
        <rect x="530" y="80" width="8"  height="10" rx="1" fill="#8a9878" opacity="0.5"/>
        <path d="M518 116 Q526 108 534 116 L534 116 Z" fill="#886848" opacity="0.7"/>

        <rect x="550" y="64" width="28" height="52" rx="1" fill="#a8c0b0"/>
        <path d="M548 64 L564 52 L580 64 Z" fill="#88a090"/>
        <rect x="554" y="74" width="7"  height="10" rx="1" fill="#8a9878" opacity="0.6"/>
        <rect x="566" y="74" width="7"  height="10" rx="1" fill="#8a9878" opacity="0.5"/>

        <rect x="584" y="58" width="26" height="58" rx="1" fill="#e0d0a8"/>
        <path d="M582 58 L597 46 L612 58 Z" fill="#c0b088"/>
        <rect x="588" y="68" width="7"  height="9"  rx="1" fill="#8a9878" opacity="0.55"/>
        <rect x="600" y="68" width="7"  height="9"  rx="1" fill="#8a9878" opacity="0.5"/>

        <rect x="616" y="54" width="30" height="62" rx="1" fill="#c8e0c8"/>
        <path d="M614 54 L631 42 L648 54 Z" fill="#a8c0a8"/>
        <rect x="620" y="64" width="8"  height="10" rx="1" fill="#8a9878" opacity="0.6"/>
        <rect x="634" y="64" width="8"  height="10" rx="1" fill="#8a9878" opacity="0.5"/>

        {/* Row 1 — lowest, largest, most detailed */}
        <rect x="456" y="110" width="34" height="68" rx="1" fill="#e8c888"/>
        <path d="M454 110 L473 96 L492 110 Z" fill="#c8a868"/>
        <rect x="460" y="120" width="9"  height="13" rx="1" fill="#8a9878" opacity="0.65"/>
        <rect x="474" y="120" width="9"  height="13" rx="1" fill="#8a9878" opacity="0.55"/>
        <rect x="460" y="140" width="9"  height="12" rx="1" fill="#8a9878" opacity="0.5"/>
        <path d="M467 178 Q473 170 479 178 L479 178 Z" fill="#2a1e14" opacity="0.85"/>

        <rect x="496" y="104" width="36" height="74" rx="1" fill="#c8a898"/>
        <path d="M494 104 L514 90 L534 104 Z" fill="#a88878"/>
        <rect x="500" y="114" width="9"  height="13" rx="1" fill="#8a9878" opacity="0.65"/>
        <rect x="516" y="114" width="9"  height="13" rx="1" fill="#8a9878" opacity="0.55"/>
        <rect x="500" y="134" width="9"  height="13" rx="1" fill="#8a9878" opacity="0.5"/>
        <rect x="516" y="134" width="9"  height="13" rx="1" fill="#8a9878" opacity="0.45"/>
        <path d="M506 178 Q514 168 522 178 L522 178 Z" fill="#2a1e14" opacity="0.85"/>
        {/* balcony */}
        <rect x="512" y="113" width="14" height="3"  fill="#b89878"/>
        <rect x="512" y="116" width="2"  height="8"  fill="#b89878"/>
        <rect x="524" y="116" width="2"  height="8"  fill="#b89878"/>

        <rect x="538" y="98" width="32" height="80" rx="1" fill="#b8d0b0"/>
        <path d="M536 98 L554 84 L572 98 Z" fill="#98b090"/>
        <rect x="542" y="108" width="8"  height="12" rx="1" fill="#8a9878" opacity="0.65"/>
        <rect x="556" y="108" width="8"  height="12" rx="1" fill="#8a9878" opacity="0.55"/>
        <path d="M546 178 Q554 168 562 178 L562 178 Z" fill="#2a1e14" opacity="0.85"/>

        {/* ── Harbour wall / breakwater ── */}
        <rect x="406" y="152" width="58" height="18" rx="2" fill="#a89878"/>
        <rect x="396" y="148" width="20" height="22" rx="1" fill="#a89878"/>
        <rect x="406" y="144" width="14" height="8"  rx="1" fill="#988868"/>

        {/* ── Pebble beach — left of harbour and centre ── */}
        <path d="M0 168 Q100 162 220 164 Q320 166 420 162 Q440 161 460 164 L460 200 L0 200 Z"
              fill="#c4b8a8"/>
        {[...Array(35)].map((_, i) => {
          const x = 8  + (i * 67) % 440;
          const y = 170 + (i * 11) % 20;
          const r = 2   + (i * 5) % 4;
          return <ellipse key={i} cx={x} cy={y} rx={r} ry={r*0.55} fill="#b0a494" opacity="0.55"/>;
        })}

        {/* ── Background sea — uses SVG animateTransform for correct tiling ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="0 0" to="-900 0" dur="16s" repeatCount="indefinite"/>
          <path
            d="M0 108 Q112 103 225 108 Q337 113 450 108 Q562 103 675 108 Q787 113 900 108
               Q1012 103 1125 108 Q1237 113 1350 108 Q1462 103 1575 108 Q1687 113 1800 108
               L1800 175 L0 175 Z"
            fill="#8fa8b8" opacity="0.75"
          />
        </g>

        {/* ── Mid sea ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="0 0" to="-900 0" dur="10s" repeatCount="indefinite"/>
          <path
            d="M0 132 Q75 126 150 132 Q225 138 300 132 Q375 126 450 132 Q525 138 600 132
               Q675 126 750 132 Q825 138 900 132 Q975 126 1050 132 Q1125 138 1200 132
               Q1275 126 1350 132 Q1425 138 1500 132 Q1575 126 1650 132 Q1725 138 1800 132
               L1800 175 L0 175 Z"
            fill="#7a9eae"
          />
        </g>

        {/* ── Boats on the beach ── */}
        <g transform="translate(68,166)" className="boat-a">
          <path d="M-28 0 Q-30 6 -24 10 L24 10 Q30 6 28 0 Z" fill="#3a5878"/>
          <rect x="-24" y="-2" width="48" height="4" fill="#4a6888"/>
          <line x1="0" y1="-2" x2="0" y2="-20" stroke="#2a1810" strokeWidth="1.5"/>
          <path d="M0 -20 L16 -12 L0 -4 Z" fill="#e8d4a0" opacity="0.8"/>
        </g>
        <g transform="translate(168,164)" className="boat-b">
          <path d="M-22 0 Q-24 5 -18 8 L18 8 Q24 5 22 0 Z" fill="#b83820"/>
          <rect x="-18" y="-1" width="36" height="3" fill="#c84830"/>
          <line x1="0" y1="-1" x2="0" y2="-16" stroke="#2a1810" strokeWidth="1.2"/>
          <path d="M0 -16 L12 -10 L0 -3 Z" fill="#e8d4a0" opacity="0.75"/>
        </g>
        <g transform="translate(258,166)" className="boat-c">
          <path d="M-20 0 Q-22 5 -17 8 L17 8 Q22 5 20 0 Z" fill="#7a9840"/>
          <rect x="-17" y="-1" width="34" height="3" fill="#8aaa50"/>
        </g>
        <g transform="translate(335,165)" className="boat-d">
          <path d="M-16 0 Q-18 4 -14 7 L14 7 Q18 4 16 0 Z" fill="#7a5830"/>
          <rect x="-14" y="-1" width="28" height="3" fill="#8a6840"/>
        </g>
        <g transform="translate(388,167)" className="boat-a" style={{animationDelay:"-3s"}}>
          <path d="M-13 0 Q-15 4 -11 6 L11 6 Q15 4 13 0 Z" fill="#884858"/>
          <rect x="-11" y="-1" width="22" height="2.5" fill="#986868"/>
        </g>

        {/* ── Foreground wave ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="-60 0" to="-960 0" dur="6s" repeatCount="indefinite"/>
          <path
            d="M0 158 Q60 153 120 158 Q180 163 240 158 Q300 153 360 158 Q420 163 480 158
               Q540 153 600 158 Q660 163 720 158 Q780 153 840 158 Q900 163 960 158
               Q1020 153 1080 158 Q1140 163 1200 158 Q1260 153 1320 158 Q1380 163 1440 158
               Q1500 153 1560 158 Q1620 163 1680 158 Q1740 153 1800 158
               L1800 175 L0 175 Z"
            fill="#5a8898" opacity="0.55"
          />
        </g>

        {/* ── Seagull ── */}
        <g className="seagull-fly" style={{transform:"translate(40px,52px)"}}>
          <path d="M0 0 Q5 -4 10 0" fill="none" stroke="#746a5e" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 0 Q17 -4 22 0" fill="none" stroke="#746a5e" strokeWidth="1.5" strokeLinecap="round"/>
        </g>

        {/* ── Label ── */}
        <text x="240" y="195" textAnchor="middle" fontSize="7" fill="#746a5e"
              fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.65">
          BOCCADASSE
        </text>
      </svg>
    </div>
  );
}
