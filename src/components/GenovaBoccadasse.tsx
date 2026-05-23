"use client";

/**
 * GenovaBoccadasse — the fishing village east of the city
 * Pastel houses stacked on the cliff, colored boats on the pebble beach
 * The most iconic postcard image of Genova
 */
export default function GenovaBoccadasse() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg"
           className="w-full" style={{ maxHeight: "180px", display: "block" }}>
        <style>{`
          @keyframes bocca-wave-back {
            from { transform: translateX(0); }
            to   { transform: translateX(-900px); }
          }
          @keyframes bocca-wave-mid {
            from { transform: translateX(0); }
            to   { transform: translateX(-900px); }
          }
          @keyframes bocca-wave-fore {
            from { transform: translateX(-60px); }
            to   { transform: translateX(-960px); }
          }
          @keyframes boat-rock-a {
            0%, 100% { transform: rotate(-5deg); }
            50%      { transform: rotate(5deg); }
          }
          @keyframes boat-rock-b {
            0%, 100% { transform: rotate(4deg); }
            50%      { transform: rotate(-6deg); }
          }
          @keyframes boat-rock-c {
            0%, 100% { transform: rotate(-3deg); }
            50%      { transform: rotate(4deg); }
          }
          @keyframes seagull {
            0%   { transform: translate(0px, 0px); }
            30%  { transform: translate(80px, -12px); }
            60%  { transform: translate(160px, -5px); }
            100% { transform: translate(260px, -18px); }
          }
          .bocca-wave-back { animation: bocca-wave-back 16s linear infinite; }
          .bocca-wave-mid  { animation: bocca-wave-mid  10s linear infinite; }
          .bocca-wave-fore { animation: bocca-wave-fore  6s linear infinite; }
          .boat-a { animation: boat-rock-a 4s ease-in-out infinite; transform-origin: 0px 0px; }
          .boat-b { animation: boat-rock-b 5s ease-in-out infinite; transform-origin: 0px 0px; animation-delay: -1.5s; }
          .boat-c { animation: boat-rock-c 3.5s ease-in-out infinite; transform-origin: 0px 0px; animation-delay: -0.8s; }
          .seagull-fly { animation: seagull 14s linear infinite; animation-delay: -4s; }
        `}</style>

        {/* ── Sky ── */}
        <rect x="0" y="0" width="900" height="200" fill="#faf8f4"/>
        <rect x="0" y="70" width="900" height="25" fill="#dce8ee" opacity="0.4"/>

        {/* ── Cliff / hill behind the village (right side) ── */}
        <path d="M480 200 L480 85 Q540 68 620 55 Q700 42 800 35 Q860 30 900 28 L900 200 Z"
              fill="#b8a890"/>
        {/* Cliff face texture */}
        <path d="M480 200 L480 105 Q520 92 560 85 Q600 78 640 80 L640 200 Z"
              fill="#a89878" opacity="0.5"/>

        {/* ── Boccadasse houses — stacked on the cliff, right side ── */}
        {/* Row 3 — highest (smallest, furthest) */}
        <rect x="660" y="38" width="22" height="28" rx="1" fill="#d4b880"/>
        <path d="M658 38 L671 30 L684 38 Z" fill="#c0a060"/>
        <rect x="664" y="45" width="6" height="8" rx="1" fill="#8a9878" opacity="0.6"/>

        <rect x="688" y="34" width="24" height="30" rx="1" fill="#c0a8a0"/>
        <path d="M686 34 L700 25 L714 34 Z" fill="#a89090"/>
        <rect x="692" y="41" width="6" height="8" rx="1" fill="#8a9878" opacity="0.6"/>

        <rect x="718" y="36" width="20" height="28" rx="1" fill="#a8c4a0"/>
        <path d="M716 36 L728 28 L740 36 Z" fill="#88a880"/>
        <rect x="721" y="43" width="5" height="7" rx="1" fill="#8a9878" opacity="0.6"/>

        <rect x="744" y="30" width="26" height="32" rx="1" fill="#c8b0a0"/>
        <path d="M742 30 L757 21 L772 30 Z" fill="#a89080"/>
        <rect x="748" y="38" width="6" height="8" rx="1" fill="#8a9878" opacity="0.5"/>

        <rect x="776" y="26" width="22" height="30" rx="1" fill="#d8c890"/>
        <path d="M774 26 L787 18 L800 26 Z" fill="#c0b070"/>

        <rect x="804" y="22" width="24" height="32" rx="1" fill="#b8c8b0"/>
        <path d="M802 22 L814 14 L826 22 Z" fill="#98a890"/>

        <rect x="834" y="18" width="28" height="36" rx="1" fill="#d0b8a0"/>
        <path d="M832 18 L848 9 L864 18 Z" fill="#b89880"/>
        <rect x="838" y="26" width="7" height="9" rx="1" fill="#8a9878" opacity="0.5"/>

        {/* Row 2 — middle */}
        <rect x="530" y="75" width="28" height="38" rx="1" fill="#e8d098"/>
        <path d="M528 75 L544 64 L560 75 Z" fill="#c8b078"/>
        <rect x="534" y="84" width="8" height="10" rx="1" fill="#8a9878" opacity="0.6"/>
        <rect x="546" y="84" width="8" height="10" rx="1" fill="#c0b080" opacity="0.4"/>

        <rect x="564" y="68" width="30" height="40" rx="1" fill="#d4a8a0"/>
        <path d="M562 68 L579 57 L596 68 Z" fill="#b88880"/>
        <rect x="568" y="78" width="8" height="10" rx="1" fill="#8a9878" opacity="0.6"/>
        <rect x="582" y="78" width="8" height="10" rx="1" fill="#8a9878" opacity="0.5"/>

        <rect x="600" y="62" width="26" height="42" rx="1" fill="#a8c0b0"/>
        <path d="M598 62 L613 52 L628 62 Z" fill="#88a090"/>
        <rect x="604" y="72" width="7" height="10" rx="1" fill="#8a9878" opacity="0.6"/>

        <rect x="632" y="58" width="24" height="40" rx="1" fill="#e0d0a8"/>
        <path d="M630 58 L644 48 L658 58 Z" fill="#c0b088"/>
        <rect x="635" y="68" width="7" height="9" rx="1" fill="#8a9878" opacity="0.5"/>

        {/* Row 1 — lowest, largest, most detailed */}
        <rect x="484" y="108" width="36" height="60" rx="1" fill="#e8c888"/>
        <path d="M482 108 L502 94 L522 108 Z" fill="#c8a868"/>
        <rect x="490" y="118" width="10" height="14" rx="1" fill="#8a9878" opacity="0.7"/>
        <rect x="505" y="118" width="10" height="14" rx="1" fill="#c0b070" opacity="0.4"/>
        <rect x="490" y="138" width="10" height="14" rx="1" fill="#8a9878" opacity="0.5"/>
        {/* Doorway */}
        <path d="M513 152 Q517 145 521 152 L521 168 L513 168 Z" fill="#2a1e14" opacity="0.8"/>

        <rect x="526" y="100" width="38" height="68" rx="1" fill="#c8a898"/>
        <path d="M524 100 L545 86 L566 100 Z" fill="#a88878"/>
        <rect x="532" y="110" width="10" height="14" rx="1" fill="#8a9878" opacity="0.7"/>
        <rect x="548" y="110" width="10" height="14" rx="1" fill="#c0b070" opacity="0.35"/>
        <rect x="532" y="130" width="10" height="14" rx="1" fill="#8a9878" opacity="0.5"/>
        <rect x="548" y="130" width="10" height="14" rx="1" fill="#8a9878" opacity="0.45"/>
        <path d="M540 158 Q545 150 550 158 L550 168 L540 168 Z" fill="#2a1e14" opacity="0.8"/>

        <rect x="570" y="94" width="34" height="74" rx="1" fill="#b8d0b0"/>
        <path d="M568 94 L587 80 L606 94 Z" fill="#98b090"/>
        <rect x="576" y="104" width="9" height="13" rx="1" fill="#8a9878" opacity="0.7"/>
        <rect x="590" y="104" width="9" height="13" rx="1" fill="#8a9878" opacity="0.6"/>
        <path d="M578 152 Q583 144 588 152 L588 168 L578 168 Z" fill="#2a1e14" opacity="0.8"/>

        {/* ── Pebble beach ── */}
        <path d="M0 160 Q200 150 480 155 Q540 158 620 165 L620 200 L0 200 Z" fill="#c4b8a8"/>
        {/* Pebble texture */}
        {[...Array(40)].map((_, i) => {
          const x = 20 + (i * 53) % 560;
          const y = 165 + (i * 17) % 25;
          const r = 2 + (i * 7) % 4;
          return <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.6} fill="#b0a494" opacity="0.6"/>;
        })}
        {/* Wet sand at waterline */}
        <path d="M0 165 Q200 158 480 162 Q540 165 620 168 L620 175 L0 175 Z"
              fill="#a89888" opacity="0.4"/>

        {/* ── Harbour wall / breakwater ── */}
        <rect x="440" y="148" width="50" height="20" rx="2" fill="#a89880"/>
        <rect x="430" y="144" width="18" height="24" rx="1" fill="#a89880"/>
        <rect x="440" y="140" width="12" height="8"  rx="1" fill="#988870"/>

        {/* ── Sea / water ── */}
        <g className="bocca-wave-back">
          <path d="M0 108 Q112 103 225 108 Q337 113 450 108 Q562 103 675 108 Q787 113 900 108
                   Q1012 103 1125 108 Q1237 113 1350 108 Q1462 103 1575 108 Q1687 113 1800 108
                   L1800 175 L0 175 Z"
                fill="#8fa8b8" opacity="0.8"/>
        </g>
        <g className="bocca-wave-mid">
          <path d="M0 130 Q75 124 150 130 Q225 136 300 130 Q375 124 450 130 Q525 136 600 130
                   Q675 124 750 130 Q825 136 900 130 Q975 124 1050 130 Q1125 136 1200 130
                   Q1275 124 1350 130 Q1425 136 1500 130 Q1575 124 1650 130 Q1725 136 1800 130
                   L1800 175 L0 175 Z"
                fill="#7a9eae"/>
        </g>

        {/* ── Boats on the beach ── */}
        {/* Boat A — blue */}
        <g transform="translate(120, 162)" className="boat-a">
          <path d="M-28 0 Q-30 6 -24 10 L24 10 Q30 6 28 0 Z" fill="#3a5878"/>
          <rect x="-24" y="-2" width="48" height="4" fill="#4a6888"/>
          <line x1="0" y1="-2" x2="0" y2="-20" stroke="#2a1810" strokeWidth="1.5"/>
          <path d="M0 -20 L16 -12 L0 -4 Z" fill="#e8d4a0" opacity="0.8"/>
        </g>
        {/* Boat B — red-orange */}
        <g transform="translate(220, 160)" className="boat-b">
          <path d="M-22 0 Q-24 5 -18 8 L18 8 Q24 5 22 0 Z" fill="#b83820"/>
          <rect x="-18" y="-1" width="36" height="3" fill="#c84830"/>
          <line x1="0" y1="-1" x2="0" y2="-16" stroke="#2a1810" strokeWidth="1.2"/>
          <path d="M0 -16 L12 -10 L0 -3 Z" fill="#e8d4a0" opacity="0.75"/>
        </g>
        {/* Boat C — yellow-green */}
        <g transform="translate(320, 163)" className="boat-c">
          <path d="M-20 0 Q-22 5 -17 8 L17 8 Q22 5 20 0 Z" fill="#7a9840"/>
          <rect x="-17" y="-1" width="34" height="3" fill="#8aaa50"/>
        </g>
        {/* Boat D — small wooden */}
        <g transform="translate(390, 164)" className="boat-a" style={{ animationDelay: "-2s" }}>
          <path d="M-16 0 Q-18 4 -14 7 L14 7 Q18 4 16 0 Z" fill="#7a5830"/>
          <rect x="-14" y="-1" width="28" height="3" fill="#8a6840"/>
        </g>

        {/* ── Foreground waves ── */}
        <g className="bocca-wave-fore">
          <path d="M0 156 Q60 150 120 156 Q180 162 240 156 Q300 150 360 156 Q420 162 480 156
                   Q540 150 600 156 Q660 162 720 156 Q780 150 840 156 Q900 162 960 156
                   Q1020 150 1080 156 Q1140 162 1200 156 Q1260 150 1320 156 Q1380 162 1440 156
                   Q1500 150 1560 156 Q1620 162 1680 156 Q1740 150 1800 156
                   L1800 180 L0 180 Z"
                fill="#5a8898" opacity="0.6"/>
        </g>

        {/* ── Seagull ── */}
        <g className="seagull-fly" style={{ transform: "translate(80px, 55px)" }}>
          <path d="M0 0 Q5 -4 10 0" fill="none" stroke="#746a5e" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 0 Q15 -4 20 0" fill="none" stroke="#746a5e" strokeWidth="1.5" strokeLinecap="round"/>
        </g>

        {/* ── Label ── */}
        <text x="240" y="194" textAnchor="middle" fontSize="7" fill="#746a5e"
              fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.65">
          BOCCADASSE
        </text>
      </svg>
    </div>
  );
}
