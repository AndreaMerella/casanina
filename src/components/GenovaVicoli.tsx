"use client";

/**
 * GenovaVicoli — looking down a caruggio
 * The medieval alleyways of the centro storico — De André's Genova
 * Laundry lines, deep shadows, a sliver of sky
 */
export default function GenovaVicoli() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg"
           className="w-full" style={{ maxHeight: "180px", display: "block" }}>
        <style>{`
          @keyframes sway-a {
            0%, 100% { transform: rotate(-7deg); }
            50%      { transform: rotate(7deg); }
          }
          @keyframes sway-b {
            0%, 100% { transform: rotate(6deg); }
            50%      { transform: rotate(-6deg); }
          }
          @keyframes sway-c {
            0%, 100% { transform: rotate(-5deg); }
            50%      { transform: rotate(9deg); }
          }
          @keyframes sway-d {
            0%, 100% { transform: rotate(8deg); }
            50%      { transform: rotate(-4deg); }
          }
          @keyframes sway-sheet {
            0%, 100% { transform: rotate(-4deg) skewX(-2deg); }
            50%      { transform: rotate(4deg)  skewX(2deg); }
          }
          @keyframes cat-walk {
            0%   { transform: translateX(0px); }
            40%  { transform: translateX(80px); }
            50%  { transform: translateX(80px); }
            90%  { transform: translateX(0px); }
            100% { transform: translateX(0px); }
          }
          @keyframes light-flicker {
            0%, 90%, 100% { opacity: 0.18; }
            95%           { opacity: 0.08; }
          }
          .sway-a { animation: sway-a 3.2s ease-in-out infinite; transform-origin: 50% 0%; }
          .sway-b { animation: sway-b 4.1s ease-in-out infinite; transform-origin: 50% 0%; animation-delay: -1.2s; }
          .sway-c { animation: sway-c 3.6s ease-in-out infinite; transform-origin: 50% 0%; animation-delay: -2.1s; }
          .sway-d { animation: sway-d 4.8s ease-in-out infinite; transform-origin: 50% 0%; animation-delay: -0.8s; }
          .sway-sheet { animation: sway-sheet 5.5s ease-in-out infinite; transform-origin: 50% 0%; animation-delay: -3s; }
          .cat-move { animation: cat-walk 8s ease-in-out infinite; }
          .light-flicker { animation: light-flicker 6s ease-in-out infinite; }
        `}</style>

        {/* ── Sky strip at top of alley ── */}
        <rect x="0" y="0" width="900" height="200" fill="#18120c"/>
        {/* Sky glimpse between rooftops — narrow but bright */}
        <rect x="280" y="0" width="340" height="55" fill="#e8f0f6" opacity="0.85"/>
        <rect x="270" y="0" width="360" height="35" fill="#faf8f4" opacity="0.5"/>

        {/* ── Left building mass ── */}
        {/* Far-left building (deepest shadow) */}
        <rect x="0"   y="0"   width="140" height="200" fill="#2e2620"/>
        {/* Left building face - angled to suggest perspective */}
        <path d="M140 0 L280 42 L280 200 L140 200 Z" fill="#4a3e36"/>
        {/* Left building windows */}
        <rect x="155" y="55"  width="22" height="28" rx="1" fill="#1a1410" opacity="0.9"/>
        <rect x="190" y="48"  width="22" height="28" rx="1" fill="#e8d4a0" opacity="0.25"/>
        <rect x="155" y="100" width="22" height="28" rx="1" fill="#1a1410" opacity="0.9"/>
        <rect x="190" y="95"  width="22" height="28" rx="1" fill="#e8d4a0" opacity="0.20"/>
        <rect x="155" y="145" width="22" height="28" rx="1" fill="#e8d4a0" opacity="0.15"/>
        <rect x="190" y="142" width="22" height="28" rx="1" fill="#1a1410" opacity="0.9"/>
        {/* Shutters suggestion */}
        <line x1="155" y1="55"  x2="155" y2="83"  stroke="#3a2e28" strokeWidth="1"/>
        <line x1="190" y1="48"  x2="190" y2="76"  stroke="#3a2e28" strokeWidth="1"/>

        {/* ── Right building mass ── */}
        {/* Right building face */}
        <path d="M620 42 L760 0 L900 0 L900 200 L620 200 Z" fill="#4a3e36"/>
        {/* Far-right deep shadow */}
        <rect x="760" y="0" width="140" height="200" fill="#2e2620"/>
        {/* Right building windows */}
        <rect x="638" y="55"  width="22" height="28" rx="1" fill="#e8d4a0" opacity="0.22"/>
        <rect x="672" y="48"  width="22" height="28" rx="1" fill="#1a1410" opacity="0.9"/>
        <rect x="638" y="100" width="22" height="28" rx="1" fill="#1a1410" opacity="0.9"/>
        <rect x="672" y="95"  width="22" height="28" rx="1" fill="#e8d4a0" opacity="0.18"/>
        <rect x="638" y="145" width="22" height="28" rx="1" fill="#e8d4a0" opacity="0.14"/>
        <rect x="672" y="140" width="22" height="28" rx="1" fill="#1a1410" opacity="0.9"/>

        {/* ── Alley floor — cobblestones suggestion ── */}
        <rect x="280" y="170" width="340" height="30" fill="#2a2218"/>
        {/* Cobble lines */}
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <line key={`cv${i}`} x1={290 + i*36} y1="172" x2={285 + i*36} y2="200"
                stroke="#1a1410" strokeWidth="0.8" opacity="0.5"/>
        ))}
        {[172, 181, 190].map((y, i) => (
          <line key={`ch${i}`} x1="280" y1={y} x2="620" y2={y}
                stroke="#1a1410" strokeWidth="0.6" opacity="0.4"/>
        ))}

        {/* ── Distant end of alley — light at the end ── */}
        <ellipse cx="450" cy="145" rx="60" ry="35" fill="#d4c89a" opacity="0.08" className="light-flicker"/>
        <rect x="390" y="130" width="120" height="70" fill="#c4b88a" opacity="0.05"/>

        {/* ── Laundry lines ── */}
        {/* Line 1 — upper, crosses wide */}
        <line x1="220" y1="68" x2="680" y2="62" stroke="#3a3028" strokeWidth="1.2" opacity="0.8"/>
        {/* Line 2 — mid */}
        <line x1="200" y1="102" x2="700" y2="95" stroke="#3a3028" strokeWidth="1.2" opacity="0.8"/>
        {/* Line 3 — lower */}
        <line x1="240" y1="128" x2="660" y2="122" stroke="#3a3028" strokeWidth="1" opacity="0.7"/>

        {/* ── Laundry items — Line 1 ── */}
        {/* White shirt */}
        <g transform="translate(270, 68)" className="sway-a">
          <path d="M-9 0 L-11 4 L-11 18 L11 18 L11 4 L9 0 Z" fill="#f0ece3"/>
          <path d="M-11 4 L-16 4 L-16 10 L-11 10 Z" fill="#f0ece3"/>
          <path d="M11 4 L16 4 L16 10 L11 10 Z" fill="#f0ece3"/>
          <rect x="-11" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="7" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        {/* Blue sheet — large */}
        <g transform="translate(330, 65)" className="sway-sheet">
          <rect x="-18" y="0" width="36" height="28" fill="#8aa0b8" opacity="0.85"/>
          <line x1="-18" y1="0" x2="-18" y2="28" stroke="#7090a8" strokeWidth="0.8"/>
          <line x1="18"  y1="0" x2="18"  y2="28" stroke="#7090a8" strokeWidth="0.8"/>
          <rect x="-18" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="14"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        {/* Red pants */}
        <g transform="translate(400, 64)" className="sway-b">
          <path d="M-8 0 L-10 22 L-2 20 L0 22 L2 20 L10 22 L8 0 Z" fill="#a83028"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="4" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        {/* Yellow towel */}
        <g transform="translate(455, 65)" className="sway-c">
          <rect x="-10" y="0" width="20" height="22" fill="#c8b860" opacity="0.85"/>
          <rect x="-10" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="6"   y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        {/* White undershirt */}
        <g transform="translate(510, 66)" className="sway-d">
          <rect x="-7" y="0" width="14" height="16" fill="#ede8df" opacity="0.9"/>
          <rect x="-7" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="3"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        {/* Green shirt */}
        <g transform="translate(570, 64)" className="sway-a" style={{ animationDelay: "-1.8s" }}>
          <path d="M-9 0 L-11 4 L-11 18 L11 18 L11 4 L9 0 Z" fill="#6a8860"/>
          <path d="M-11 4 L-16 4 L-16 10 L-11 10 Z" fill="#6a8860"/>
          <path d="M11 4 L16 4 L16 10 L11 10 Z" fill="#6a8860"/>
          <rect x="-11" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="7"   y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>

        {/* ── Laundry items — Line 2 ── */}
        <g transform="translate(258, 102)" className="sway-b" style={{ animationDelay: "-0.5s" }}>
          <rect x="-8" y="0" width="16" height="22" fill="#c0b0a0" opacity="0.8"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        <g transform="translate(310, 100)" className="sway-c" style={{ animationDelay: "-2.5s" }}>
          <path d="M-8 0 L-10 22 L-2 20 L0 22 L2 20 L10 22 L8 0 Z" fill="#4a6888"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        <g transform="translate(375, 99)" className="sway-sheet" style={{ animationDelay: "-1s" }}>
          <rect x="-15" y="0" width="30" height="22" fill="#d8c898" opacity="0.75"/>
          <rect x="-15" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="11"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        <g transform="translate(490, 98)" className="sway-a" style={{ animationDelay: "-3.2s" }}>
          <path d="M-9 0 L-11 4 L-11 18 L11 18 L11 4 L9 0 Z" fill="#884038"/>
          <path d="M-11 4 L-16 4 L-16 10 L-11 10 Z" fill="#884038"/>
          <path d="M11 4 L16 4 L16 10 L11 10 Z" fill="#884038"/>
          <rect x="-11" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="7"   y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        <g transform="translate(555, 97)" className="sway-d" style={{ animationDelay: "-1.5s" }}>
          <rect x="-9" y="0" width="18" height="20" fill="#f0ece3" opacity="0.85"/>
          <rect x="-9" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="5"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        <g transform="translate(615, 98)" className="sway-b" style={{ animationDelay: "-4s" }}>
          <rect x="-7" y="0" width="14" height="18" fill="#7890a8" opacity="0.8"/>
          <rect x="-7" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="3"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>

        {/* ── Laundry items — Line 3 ── */}
        <g transform="translate(310, 128)" className="sway-c" style={{ animationDelay: "-0.3s" }}>
          <rect x="-12" y="0" width="24" height="18" fill="#a8b890" opacity="0.8"/>
          <rect x="-12" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="8"   y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        <g transform="translate(380, 126)" className="sway-a" style={{ animationDelay: "-2.7s" }}>
          <path d="M-8 0 L-9 19 L-1 17 L0 19 L1 17 L9 19 L8 0 Z" fill="#c09848"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        <g transform="translate(480, 125)" className="sway-d" style={{ animationDelay: "-3.8s" }}>
          <rect x="-8" y="0" width="16" height="20" fill="#f0ece3" opacity="0.8"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>
        <g transform="translate(555, 124)" className="sway-b" style={{ animationDelay: "-1.1s" }}>
          <rect x="-10" y="0" width="20" height="16" fill="#8a7868" opacity="0.75"/>
          <rect x="-10" y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
          <rect x="6"   y="0" width="4" height="1.5" fill="#3a3028" opacity="0.4"/>
        </g>

        {/* ── Cat ── */}
        <g className="cat-move" style={{ transform: "translate(300px, 162px)" }}>
          {/* Body */}
          <ellipse cx="0" cy="0" rx="9" ry="5" fill="#3a3028"/>
          {/* Head */}
          <circle cx="10" cy="-4" r="5" fill="#3a3028"/>
          {/* Ears */}
          <polygon points="8,-9 6,-6 10,-6" fill="#3a3028"/>
          <polygon points="12,-9 10,-6 14,-6" fill="#3a3028"/>
          {/* Tail */}
          <path d="M-8 -1 Q-14 -8 -10 -14" fill="none" stroke="#3a3028" strokeWidth="2" strokeLinecap="round"/>
          {/* Eye */}
          <circle cx="12" cy="-4" r="1" fill="#746a5e"/>
        </g>

        {/* ── Rooftop edges ── */}
        <path d="M0 0 L140 0 L280 42 L280 0 Z" fill="#1a1410"/>
        <path d="M620 0 L620 42 L760 0 L900 0 Z" fill="#1a1410"/>

        {/* ── Label ── */}
        <text x="450" y="195" textAnchor="middle" fontSize="7" fill="#746a5e"
              fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.55">
          CARUGGI · CENTRO STORICO
        </text>
      </svg>
    </div>
  );
}
