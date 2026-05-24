"use client";

/**
 * GenovaSails — tall ships on the Ligurian Sea
 * Genova as La Superba, maritime republic — Colombo era carracks
 * Two ships crossing in opposite directions, layered waves, distant Lanterna
 */
export default function GenovaSails() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg"
           className="w-full" style={{ display: "block", overflow: "hidden" }}>
        <style>{`
          @keyframes sails-wave-back {
            from { transform: translateX(0); }
            to   { transform: translateX(-900px); }
          }
          @keyframes sails-wave-fore {
            from { transform: translateX(0); }
            to   { transform: translateX(-900px); }
          }
          @keyframes shimmer {
            0%, 100% { opacity: 0.15; }
            50%      { opacity: 0.35; }
          }
          /* waves use SVG animateTransform — not CSS translateX — so tiling is correct at any viewport width */
          .shimmer-line { animation: shimmer 4s ease-in-out infinite; }
        `}</style>

        {/* ── Sky — fades from page cream to sea-haze at horizon ── */}
        <rect x="0" y="0" width="900" height="200" fill="#faf8f4"/>
        <rect x="0" y="80" width="900" height="30" fill="#dce8ee" opacity="0.4"/>
        <rect x="0" y="100" width="900" height="15" fill="#c8dde6" opacity="0.5"/>

        {/* ── Distant Lanterna — far left, very small, atmospheric ── */}
        <g opacity="0.28">
          <rect x="38" y="92" width="10" height="28" fill="#746a5e"/>
          <rect x="35" y="89" width="16" height="4"  fill="#5a5248"/>
          <rect x="40" y="78" width="6"  height="14" fill="#746a5e"/>
          <rect x="37" y="75" width="12" height="4"  fill="#5a5248"/>
          <rect x="41" y="68" width="5"  height="8"  fill="#18120c"/>
          <polygon points="40,68 47,68 43,63" fill="#5a5248"/>
          {/* checkerboard micro-detail */}
          <rect x="41" y="66" width="2" height="2" fill="#b5263c" opacity="0.7"/>
          <rect x="43" y="66" width="2" height="2" fill="#faf8f4" opacity="0.7"/>
          <rect x="45" y="66" width="2" height="2" fill="#b5263c" opacity="0.7"/>
        </g>

        {/* ── Background sea layer ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="0 0" to="-900 0" dur="14s" repeatCount="indefinite"/>
          <path
            d="M0 112 Q112 106 225 112 Q337 118 450 112 Q562 106 675 112 Q787 118 900 112
               Q1012 106 1125 112 Q1237 118 1350 112 Q1462 106 1575 112 Q1687 118 1800 112
               L1800 200 L0 200 Z"
            fill="#8fa8b8"
          />
        </g>

        {/* ── Ship 2 — smaller, further, L→R ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="-100 116" to="1000 116" dur="65s" repeatCount="indefinite" begin="-30s"/>
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0 0;0 -3;0 0" dur="5.2s" repeatCount="indefinite"
              calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1"/>
            {/* scale down for distance — wrap in another g */}
            <g transform="scale(0.58)">
              {/* Hull */}
              <path d="M-42 2 Q-48 -4 -42 -10 L42 -10 Q48 -4 42 2 Z" fill="#3a2010"/>
              <rect x="-38" y="-9" width="76" height="3" fill="#5a3820" opacity="0.5"/>
              {/* Sterncastle */}
              <rect x="28" y="-18" width="16" height="8" fill="#4a2818"/>
              {/* Main mast */}
              <line x1="4" y1="-10" x2="4" y2="-72" stroke="#2a1810" strokeWidth="2.2"/>
              {/* Main yard */}
              <line x1="-24" y1="-60" x2="32" y2="-60" stroke="#2a1810" strokeWidth="1.2"/>
              {/* Main sail */}
              <path d="M-22 -60 L-18 -12 L30 -12 L30 -60 Z" fill="#ede8df" opacity="0.88"/>
              <line x1="4" y1="-60" x2="4" y2="-12" stroke="#2a1810" strokeWidth="0.7" opacity="0.3"/>
              {/* Top sail */}
              <line x1="-8" y1="-70" x2="16" y2="-70" stroke="#2a1810" strokeWidth="1"/>
              <path d="M-6 -70 L-4 -52 L14 -52 L14 -70 Z" fill="#ede8df" opacity="0.75"/>
              {/* Foremast */}
              <line x1="-18" y1="-8" x2="-14" y2="-50" stroke="#2a1810" strokeWidth="1.8"/>
              <line x1="-34" y1="-42" x2="2" y2="-42" stroke="#2a1810" strokeWidth="1"/>
              <path d="M-32 -42 L-28 -10 L0 -10 L0 -42 Z" fill="#ede8df" opacity="0.82"/>
              {/* Bowsprit */}
              <line x1="-42" y1="-4" x2="-68" y2="-16" stroke="#2a1810" strokeWidth="1.3"/>
              <path d="M-66 -15 L-58 -4 L-45 -6 L-52 -16 Z" fill="#ede8df" opacity="0.65"/>
              {/* Rigging */}
              <line x1="4" y1="-72" x2="-42" y2="-2" stroke="#2a1810" strokeWidth="0.6" opacity="0.35"/>
              <line x1="4" y1="-72" x2="42" y2="-2"  stroke="#2a1810" strokeWidth="0.6" opacity="0.35"/>
              {/* Flag */}
              <path d="M4 -72 L16 -67 L4 -62 Z" fill="#c0302a" opacity="0.8"/>
            </g>
          </g>
        </g>

        {/* ── Ship 1 — large, near, R→L ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="1060 128" to="-160 128" dur="48s" repeatCount="indefinite"/>
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0 0;0 -4;0 0" dur="3.8s" repeatCount="indefinite"
              calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1"/>
            {/* Hull — mirrored (bow faces left, direction of travel) */}
            <path d="M-55 3 Q-62 -4 -55 -12 L55 -12 Q62 -4 55 3 Z" fill="#3a2010"/>
            <rect x="-50" y="-11" width="100" height="3" fill="#5a3820" opacity="0.5"/>
            {/* Sterncastle (right side = stern going left) */}
            <rect x="-52" y="-20" width="20" height="8" fill="#4a2818"/>
            {/* Forecastle (left side) */}
            <rect x="40" y="-16" width="15" height="6" fill="#4a2818"/>
            {/* Main mast */}
            <line x1="0" y1="-12" x2="0" y2="-92" stroke="#2a1810" strokeWidth="2.8"/>
            {/* Main yard */}
            <line x1="-34" y1="-78" x2="38" y2="-78" stroke="#2a1810" strokeWidth="1.6"/>
            {/* Main sail */}
            <path d="M-32 -78 L-28 -14 L36 -14 L36 -78 Z" fill="#ede8df" opacity="0.92"/>
            <line x1="0" y1="-78" x2="0" y2="-14" stroke="#2a1810" strokeWidth="0.9" opacity="0.3"/>
            {/* Top yard + sail */}
            <line x1="-14" y1="-88" x2="18" y2="-88" stroke="#2a1810" strokeWidth="1.2"/>
            <path d="M-12 -88 L-8 -64 L16 -64 L16 -88 Z" fill="#ede8df" opacity="0.82"/>
            {/* Foremast (forward = right for L-facing ship) */}
            <line x1="26" y1="-10" x2="22" y2="-62" stroke="#2a1810" strokeWidth="2.2"/>
            <line x1="6"  y1="-54" x2="44" y2="-54" stroke="#2a1810" strokeWidth="1.3"/>
            <path d="M8 -54 L10 -12 L42 -12 L42 -54 Z" fill="#ede8df" opacity="0.86"/>
            {/* Mizzen mast (aft) */}
            <line x1="-34" y1="-14" x2="-30" y2="-48" stroke="#2a1810" strokeWidth="1.6"/>
            <path d="M-42 -44 L-38 -16 L-18 -18 L-20 -44 Z" fill="#ede8df" opacity="0.75"/>
            {/* Bowsprit (right side, bow of ship) */}
            <line x1="54" y1="-4"  x2="85" y2="-20" stroke="#2a1810" strokeWidth="1.8"/>
            <path d="M83 -19 L72 -4 L58 -6 L68 -20 Z" fill="#ede8df" opacity="0.70"/>
            {/* Rigging stays */}
            <line x1="0" y1="-92" x2="-55" y2="-4" stroke="#2a1810" strokeWidth="0.7" opacity="0.4"/>
            <line x1="0" y1="-92" x2="55"  y2="-4" stroke="#2a1810" strokeWidth="0.7" opacity="0.4"/>
            <line x1="22" y1="-62" x2="54"  y2="-4" stroke="#2a1810" strokeWidth="0.6" opacity="0.3"/>
            <line x1="22" y1="-62" x2="-10" y2="-4" stroke="#2a1810" strokeWidth="0.6" opacity="0.3"/>
            {/* Flag — Genovese cross (red cross on white) */}
            <rect x="-2" y="-96" width="20" height="14" fill="#faf8f4" opacity="0.9"/>
            <rect x="6"  y="-96" width="4"  height="14" fill="#c0302a"/>
            <rect x="-2" y="-91" width="20" height="4"  fill="#c0302a"/>
          </g>
        </g>

        {/* ── Foreground waves — in front of ships ── */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="0 0" to="-900 0" dur="8s" repeatCount="indefinite"/>
          <path
            d="M0 150 Q75 143 150 150 Q225 157 300 150 Q375 143 450 150 Q525 157 600 150
               Q675 143 750 150 Q825 157 900 150 Q975 143 1050 150 Q1125 157 1200 150
               Q1275 143 1350 150 Q1425 157 1500 150 Q1575 143 1650 150 Q1725 157 1800 150
               L1800 200 L0 200 Z"
            fill="#6a8e9e"
          />
        </g>

        {/* ── Water shimmer ── */}
        {[110, 220, 380, 520, 660, 790].map((x, i) => (
          <line key={i} className="shimmer-line"
            x1={x} y1={128 + (i % 3) * 6} x2={x + 35 + (i % 2) * 15} y2={128 + (i % 3) * 6}
            stroke="#faf8f4" strokeWidth="1.2"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}

        {/* ── Label ── */}
        <text x="450" y="192" textAnchor="middle" fontSize="7" fill="#746a5e"
              fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.65">
          LA SUPERBA · MARE LIGURE · SEC. XII
        </text>
      </svg>
    </div>
  );
}
