"use client";

/**
 * GenovaMontagne — the Ligurian Apennines
 * The green hills that frame Genova from behind — sea on one side, mountains the other
 * Layered ridgelines, a village with a bell tower, drifting clouds, birds
 */
export default function GenovaMontagne() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg"
           className="w-full" style={{ maxHeight: "180px", display: "block" }}>
        <style>{`
          @keyframes cloud1-drift {
            from { transform: translateX(-20px); }
            to   { transform: translateX(940px); }
          }
          @keyframes cloud2-drift {
            from { transform: translateX(-80px); }
            to   { transform: translateX(980px); }
          }
          @keyframes cloud3-drift {
            from { transform: translateX(200px); }
            to   { transform: translateX(1120px); }
          }
          @keyframes birds-drift {
            0%   { transform: translate(0px, 0px); }
            50%  { transform: translate(400px, -15px); }
            100% { transform: translate(820px, -5px); }
          }
          @keyframes birds2-drift {
            0%   { transform: translate(0px, 0px); }
            100% { transform: translate(-900px, 20px); }
          }
          @keyframes tree-sway {
            0%, 100% { transform: rotate(-1.5deg); }
            50%      { transform: rotate(1.5deg); }
          }
          .cloud1 { animation: cloud1-drift 80s linear infinite; }
          .cloud2 { animation: cloud2-drift 110s linear infinite; animation-delay: -35s; }
          .cloud3 { animation: cloud3-drift 95s linear infinite; animation-delay: -60s; }
          .birds1 { animation: birds-drift 45s linear infinite; }
          .birds2 { animation: birds2-drift 60s linear infinite; animation-delay: -20s; }
          .tree-sway { animation: tree-sway 4s ease-in-out infinite; transform-origin: 50% 100%; }
        `}</style>

        {/* ── Sky ── */}
        <rect x="0" y="0" width="900" height="200" fill="#faf8f4"/>
        <rect x="0" y="40" width="900" height="30" fill="#dce8d4" opacity="0.35"/>

        {/* ── Clouds ── */}
        <g className="cloud1" opacity="0.7">
          <ellipse cx="0"  cy="32" rx="38" ry="14" fill="#f0ece3"/>
          <ellipse cx="28" cy="26" rx="28" ry="16" fill="#f0ece3"/>
          <ellipse cx="55" cy="30" rx="32" ry="13" fill="#f0ece3"/>
          <ellipse cx="80" cy="34" rx="22" ry="11" fill="#f0ece3"/>
        </g>
        <g className="cloud2" opacity="0.55">
          <ellipse cx="0"  cy="20" rx="30" ry="11" fill="#e8e4dc"/>
          <ellipse cx="22" cy="15" rx="24" ry="13" fill="#e8e4dc"/>
          <ellipse cx="46" cy="18" rx="28" ry="11" fill="#e8e4dc"/>
          <ellipse cx="68" cy="22" rx="20" ry="10" fill="#e8e4dc"/>
        </g>
        <g className="cloud3" opacity="0.45">
          <ellipse cx="0"  cy="28" rx="25" ry="9"  fill="#ede8e0"/>
          <ellipse cx="18" cy="22" rx="20" ry="11" fill="#ede8e0"/>
          <ellipse cx="38" cy="25" rx="24" ry="9"  fill="#ede8e0"/>
        </g>

        {/* ── Hill layers — back to front ── */}
        {/* Layer 1 — furthest, palest */}
        <path d="M0 200 L0 105 Q80 90 160 78 Q240 66 340 60 Q420 55 500 58 Q580 61 660 55 Q740 49 820 42 Q860 38 900 36 L900 200 Z"
              fill="#c8d4c0"/>
        {/* Layer 2 */}
        <path d="M0 200 L0 125 Q100 108 200 95 Q320 80 440 78 Q560 76 660 82 Q760 88 860 80 Q880 78 900 76 L900 200 Z"
              fill="#a8c0a0"/>
        {/* Layer 3 */}
        <path d="M0 200 L0 148 Q80 132 180 120 Q280 108 380 112 Q460 115 540 108 Q620 101 700 105 Q780 109 860 100 Q880 97 900 95 L900 200 Z"
              fill="#88a880"/>
        {/* Layer 4 — near, darkest */}
        <path d="M0 200 L0 168 Q60 155 140 145 Q220 135 320 138 Q400 141 480 135 Q560 129 640 133 Q720 137 800 128 Q850 123 900 120 L900 200 Z"
              fill="#6a8860"/>

        {/* ── Village on middle ridge ── */}
        {/* Houses */}
        <rect x="568" y="70"  width="16" height="20" rx="1" fill="#e0d0b8"/>
        <path d="M566 70 L576 62 L586 70 Z" fill="#c8b098"/>
        <rect x="572" y="76"  width="5" height="7" rx="1" fill="#8a9878" opacity="0.5"/>

        <rect x="588" y="66"  width="18" height="22" rx="1" fill="#d0c0a8"/>
        <path d="M586 66 L597 57 L608 66 Z" fill="#b8a088"/>
        <rect x="592" y="73"  width="5" height="7" rx="1" fill="#8a9878" opacity="0.5"/>
        <rect x="601" y="73"  width="5" height="7" rx="1" fill="#8a9878" opacity="0.4"/>

        {/* Bell tower — most important landmark */}
        <rect x="610" y="52"  width="12" height="36" rx="1" fill="#c8b8a0"/>
        <rect x="608" y="50"  width="16" height="4"  rx="1" fill="#b0a088"/>
        {/* Arched bell opening */}
        <path d="M612 58 Q616 54 620 58 L620 65 L612 65 Z" fill="#2a1e14" opacity="0.7"/>
        {/* Bell */}
        <ellipse cx="616" cy="60" rx="2.5" ry="2" fill="#c8a860" opacity="0.8"/>
        {/* Tower cap */}
        <polygon points="608,50 616,42 624,50" fill="#a09080"/>
        {/* Cross */}
        <line x1="616" y1="39" x2="616" y2="46" stroke="#8a8078" strokeWidth="1.2"/>
        <line x1="613" y1="42" x2="619" y2="42" stroke="#8a8078" strokeWidth="1.2"/>

        <rect x="626" y="68"  width="14" height="18" rx="1" fill="#e0c8a8"/>
        <path d="M624 68 L633 60 L642 68 Z" fill="#c0a888"/>
        <rect x="629" y="74"  width="4" height="6" rx="1" fill="#8a9878" opacity="0.45"/>

        {/* ── Cypress trees — characteristic of Ligurian landscape ── */}
        {[554, 648, 662, 560].map((x, i) => (
          <g key={i} className="tree-sway"
             style={{ transform: `translate(${x}px, ${80 - i * 2}px)`, animationDelay: `${i * 0.7}s` }}>
            <ellipse cx="0" cy="-14" rx="4" ry="14" fill="#4a6040"/>
            <line x1="0" y1="0" x2="0" y2="-28" stroke="#3a4830" strokeWidth="1.5"/>
          </g>
        ))}

        {/* ── Foreground trees / vegetation ── */}
        {[60, 160, 240, 380, 480, 620, 740, 840].map((x, i) => (
          <g key={i} style={{ transform: `translate(${x}px, ${148 - (i % 3) * 8}px)` }}>
            <path d={`M0 0 Q-${8 + (i%3)*3} -${18 + (i%2)*8} 0 -${25 + (i%3)*10} Q${8 + (i%3)*3} -${18 + (i%2)*8} 0 0 Z`}
                  fill={i % 2 === 0 ? "#4a6040" : "#5a7050"} opacity="0.9"/>
          </g>
        ))}

        {/* ── Birds ── */}
        <g className="birds1" style={{ transform: "translate(40px, 45px)" }}>
          <path d="M0 0 Q4 -3 8 0" fill="none" stroke="#746a5e" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M12 -2 Q16 -5 20 -2" fill="none" stroke="#746a5e" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M26 1 Q30 -2 34 1" fill="none" stroke="#746a5e" strokeWidth="1.1" strokeLinecap="round"/>
        </g>
        <g className="birds2" style={{ transform: "translate(800px, 38px)" }}>
          <path d="M0 0 Q4 -3 8 0" fill="none" stroke="#746a5e" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
          <path d="M12 -1 Q16 -4 20 -1" fill="none" stroke="#746a5e" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
        </g>

        {/* ── Label ── */}
        <text x="450" y="194" textAnchor="middle" fontSize="7" fill="#746a5e"
              fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.65">
          APPENNINO LIGURE
        </text>
      </svg>
    </div>
  );
}
