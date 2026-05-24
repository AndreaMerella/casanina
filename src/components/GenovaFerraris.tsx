"use client";

/**
 * GenovaFerraris — Stadio Luigi Ferraris (Marassi), Genova
 * Built 1911 · Renovated 1990 World Cup · Capacity ~36,000
 * Home to Genoa CFC (red/blue) and Sampdoria (blue/red/white/black)
 *
 * Panoramic street-level view:
 *   Marassi apartment buildings flanking both sides
 *   Stadium bowl rising above the perimeter wall
 *   Cantilevered 1990 roof
 *   Four floodlight pylons
 *   Stands hinted in team colours: Genoa red (nord), Samp blue (sud)
 *   Hills of Marassi in the background
 */
export default function GenovaFerraris() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <svg
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block", overflow: "hidden" }}
      >
        {/* ── Sky ── */}
        <rect x="0" y="0" width="900" height="200" fill="#f0ede6" />
        <rect x="0" y="70" width="900" height="28" fill="#dce8ee" opacity="0.3" />

        {/* ── Marassi hills behind the stadium ── */}
        <path d="M420 95 Q520 62 640 70 Q740 76 820 68 Q870 64 900 60 L900 200 L420 200 Z"
          fill="#b8c8a0" opacity="0.22" />
        <path d="M500 115 Q590 88 700 92 Q790 96 870 88 L900 90 L900 200 L500 200 Z"
          fill="#a8b890" opacity="0.18" />

        {/* ══ LEFT APARTMENT BLOCK — typical Marassi palazzine ══ */}
        {/* Bldg A */}
        <rect x="0"  y="58"  width="58" height="122" fill="#d8cfc4" />
        <rect x="0"  y="52"  width="58" height="8"   fill="#c8bfb4" />
        <rect x="0"  y="0"   width="58" height="54"  fill="#e0d8cc" /> {/* upper floors */}
        <rect x="0"  y="48"  width="58" height="6"   fill="#b8b0a4" />
        {/* windows A */}
        {[6,22,38].map(wx => [8,26,44,62,80].map(wy => (
          <rect key={`${wx}-${wy}`} x={wx} y={wy} width="10" height="13" rx="1"
            fill="#18120c" opacity="0.18" />
        )))}
        {/* shutters */}
        {[6,22,38].map(wx => [8,26,44,62,80].map(wy => (
          <g key={`s-${wx}-${wy}`}>
            <rect x={wx} y={wy} width="4" height="13" rx="0.5" fill="#3a5030" opacity="0.55" />
            <rect x={wx+6} y={wy} width="4" height="13" rx="0.5" fill="#3a5030" opacity="0.55" />
          </g>
        )))}

        {/* Bldg B */}
        <rect x="60" y="42"  width="62" height="138" fill="#ccc3b8" />
        <rect x="60" y="36"  width="62" height="8"   fill="#bcb3a8" />
        <rect x="60" y="0"   width="62" height="38"  fill="#d8cfc4" />
        <rect x="60" y="32"  width="62" height="6"   fill="#aca3a0" />
        {[66,82,98].map(wx => [4,20,36,52,68,86,104].map(wy => (
          <rect key={`b-${wx}-${wy}`} x={wx} y={wy} width="10" height="12" rx="1"
            fill="#18120c" opacity="0.16" />
        )))}

        {/* Narrow gap / alley */}
        <rect x="122" y="130" width="8" height="50" fill="#18120c" opacity="0.08" />

        {/* Bldg C */}
        <rect x="130" y="68" width="50" height="112" fill="#d4cbbe" />
        <rect x="130" y="62" width="50" height="8"   fill="#c4bbb4" />
        {[135,148,162].map(wx => [70,88,106,124,142].map(wy => (
          <rect key={`c-${wx}-${wy}`} x={wx} y={wy} width="9" height="12" rx="1"
            fill="#18120c" opacity="0.15" />
        )))}

        {/* ══ RIGHT APARTMENT BLOCK ══ */}
        {/* Bldg D */}
        <rect x="720" y="65" width="52" height="115" fill="#d4cbbe" />
        <rect x="720" y="59" width="52" height="8"   fill="#c4bbb4" />
        {[724,737,751].map(wx => [67,84,102,120,138].map(wy => (
          <rect key={`d-${wx}-${wy}`} x={wx} y={wy} width="9" height="12" rx="1"
            fill="#18120c" opacity="0.15" />
        )))}

        {/* Bldg E */}
        <rect x="774" y="48" width="60" height="132" fill="#ccc3b8" />
        <rect x="774" y="42" width="60" height="8"   fill="#bcb3a8" />
        <rect x="774" y="0"  width="60" height="44"  fill="#d8cfc4" />
        <rect x="774" y="38" width="60" height="6"   fill="#aca3a0" />
        {[778,793,808].map(wx => [4,20,36,52,68,84,102].map(wy => (
          <rect key={`e-${wx}-${wy}`} x={wx} y={wy} width="10" height="12" rx="1"
            fill="#18120c" opacity="0.16" />
        )))}

        {/* Bldg F */}
        <rect x="836" y="55" width="64" height="125" fill="#d8cfc4" />
        <rect x="836" y="49" width="64" height="8"   fill="#c8bfb4" />
        <rect x="836" y="0"  width="64" height="51"  fill="#e0d8cc" />
        <rect x="836" y="45" width="64" height="6"   fill="#b8b0a4" />
        {[840,856,872].map(wx => [8,25,42,58,75,92].map(wy => (
          <rect key={`f-${wx}-${wy}`} x={wx} y={wy} width="10" height="13" rx="1"
            fill="#18120c" opacity="0.17" />
        )))}
        {[840,856,872].map(wx => [8,25,42,58,75,92].map(wy => (
          <g key={`fs-${wx}-${wy}`}>
            <rect x={wx} y={wy} width="4" height="13" rx="0.5" fill="#3a5030" opacity="0.5" />
            <rect x={wx+6} y={wy} width="4" height="13" rx="0.5" fill="#3a5030" opacity="0.5" />
          </g>
        )))}

        {/* ══ STADIO LUIGI FERRARIS ══ */}

        {/* Lower perimeter arcade — iconic sandy ochre yellow */}
        <rect x="185" y="118" width="490" height="62" rx="2" fill="#d4ac68" />
        {/* Horizontal masonry joints */}
        {[126, 135, 144, 153, 162, 171].map(y => (
          <line key={y} x1="185" y1={y} x2="675" y2={y}
            stroke="#bf9a52" strokeWidth="0.6" opacity="0.55" />
        ))}

        {/* Arcaded entrance portals — cream arches on ochre wall */}
        {[208, 255, 302, 368, 432, 498, 552, 606].map(x => (
          <g key={x}>
            {/* Arch opening */}
            <path d={`M${x} 180 L${x} 152 Q${x+14} 140 ${x+28} 152 L${x+28} 180 Z`}
              fill="#1a120a" opacity="0.28" />
            {/* Arch surround (cream keystone) */}
            <path d={`M${x-1} 180 L${x-1} 151 Q${x+14} 138 ${x+29} 151 L${x+29} 180`}
              fill="none" stroke="#e8d9b0" strokeWidth="2" opacity="0.6" />
          </g>
        ))}

        {/* Corner buttresses — slightly deeper terracotta */}
        <rect x="183" y="114" width="20" height="66" fill="#c86830" />
        <rect x="657" y="114" width="20" height="66" fill="#c86830" />

        {/* ── Upper bowl — iconic terracotta brick orange ── */}
        {/* Main facade */}
        <rect x="188" y="62" width="484" height="58" fill="#c96840" />

        {/* Grid of recessed panels — darker brick for the window bays */}
        {Array.from({ length: 19 }, (_, col) => [0, 1].map(row => {
          const px = 196 + col * 25;
          const py = 68 + row * 24;
          return (
            <rect key={`p-${col}-${row}`} x={px} y={py} width="18" height="18" rx="1"
              fill="#a04828" opacity="0.55" />
          );
        }))}

        {/* Horizontal belt courses */}
        {[64, 90, 114].map(y => (
          <line key={y} x1="188" y1={y} x2="672" y2={y}
            stroke="#b05830" strokeWidth="1" opacity="0.5" />
        ))}

        {/* Stand sections glimpsed over parapet */}
        {/* Genoa Nord (red) — left */}
        <rect x="192" y="80" width="110" height="34" fill="#b82020" opacity="0.50" />
        {/* Central (green pitch) */}
        <rect x="302" y="74" width="256" height="40" fill="#3a6830" opacity="0.45" />
        {/* Samp Sud (blue) — right */}
        <rect x="558" y="80" width="110" height="34" fill="#1a3070" opacity="0.50" />

        {/* Pitch centre circle hint */}
        <ellipse cx="430" cy="93" rx="50" ry="14" fill="none"
          stroke="#4a7840" strokeWidth="1.5" opacity="0.35" />
        <line x1="430" y1="78" x2="430" y2="114" stroke="#4a7840" strokeWidth="1" opacity="0.3" />

        {/* Crowd dots — Genoa red end */}
        {Array.from({ length: 18 }, (_, i) => ({
          cx: 198 + (i % 9) * 12,
          cy: 84 + Math.floor(i / 9) * 10,
        })).map(({ cx, cy }, i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill={i % 3 === 0 ? "#d83030" : "#f0e8d8"} opacity="0.75" />
        ))}
        {/* Crowd dots — Samp blue end */}
        {Array.from({ length: 18 }, (_, i) => ({
          cx: 562 + (i % 9) * 12,
          cy: 84 + Math.floor(i / 9) * 10,
        })).map(({ cx, cy }, i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill={i % 3 === 0 ? "#2040a0" : "#f0e8d8"} opacity="0.75" />
        ))}

        {/* ── Cantilevered white roof (1990 renovation) ── */}
        {/* Roof underside shadow */}
        <rect x="176" y="52" width="508" height="12" fill="#c8c4bc" />
        {/* Roof deck — off-white */}
        <rect x="172" y="44" width="516" height="10" fill="#e8e4dc" />
        {/* Leading edge fascia */}
        <rect x="172" y="54" width="516" height="3"  fill="#d0ccc4" />
        {/* Roof support struts */}
        {[192, 248, 304, 360, 416, 472, 528, 584, 636].map(x => (
          <rect key={x} x={x} y="54" width="4" height="60" fill="#c0bcb4" opacity="0.45" />
        ))}
        {/* Roof truss diagonals (white steel, iconic) */}
        {[200, 310, 420, 530, 620].map(x => (
          <g key={x}>
            <line x1={x} y1="44" x2={x-20} y2="20" stroke="#e0dcd4" strokeWidth="2" opacity="0.7" />
            <line x1={x} y1="44" x2={x+20} y2="20" stroke="#e0dcd4" strokeWidth="2" opacity="0.7" />
            <line x1={x-20} y1="20" x2={x+20} y2="20" stroke="#e0dcd4" strokeWidth="1.5" opacity="0.6" />
          </g>
        ))}

        {/* ── Floodlight pylons ── */}
        {/* Left-front */}
        <rect x="186" y="14" width="7" height="98" fill="#b8b4ac" />
        <rect x="178" y="10" width="22" height="6"  fill="#a8a49c" />
        <rect x="173" y="4"  width="32" height="8"  rx="1" fill="#787470" />
        {[174,183,192,201].map(lx => (
          <rect key={lx} x={lx} y="2" width="7" height="4" fill="#f8f0d0" opacity="0.85" />
        ))}
        {/* Right-front */}
        <rect x="667" y="14" width="7" height="98" fill="#b8b4ac" />
        <rect x="660" y="10" width="22" height="6"  fill="#a8a49c" />
        <rect x="655" y="4"  width="32" height="8"  rx="1" fill="#787470" />
        {[656,665,674,683].map(lx => (
          <rect key={lx} x={lx} y="2" width="7" height="4" fill="#f8f0d0" opacity="0.85" />
        ))}

        {/* ── Main entrance gate ── */}
        <rect x="390" y="148" width="80" height="32" fill="#c8a458" />
        <path d="M390 180 L390 156 Q430 144 470 156 L470 180 Z" fill="#1a120a" opacity="0.28" />
        <rect x="408" y="150" width="16" height="24" fill="#1a120a" opacity="0.2" />
        <rect x="436" y="150" width="16" height="24" fill="#1a120a" opacity="0.2" />
        {/* "STADIO COMUNALE LUIGI FERRARIS" sign above gate */}
        <rect x="378" y="144" width="104" height="6" fill="#f0eada" opacity="0.8" />

        {/* Genoa CFC colour flash — left buttress */}
        <rect x="183" y="112" width="20" height="4" fill="#c02020" opacity="0.8" />
        <rect x="183" y="110" width="20" height="3" fill="#1830a0" opacity="0.7" />
        {/* Sampdoria colour flash — right buttress */}
        <rect x="657" y="112" width="20" height="4" fill="#1830a0" opacity="0.8" />
        <rect x="657" y="110" width="20" height="3" fill="#c02020" opacity="0.6" />

        {/* ── Street / forecourt ── */}
        <rect x="0" y="180" width="900" height="20" fill="#c0b8a8" />
        {/* cobblestone suggestion */}
        {Array.from({ length: 10 }, (_, i) => (
          <rect key={i} x={i * 92 + 2} y="182" width="80" height="6"
            rx="1" fill="#b0a898" opacity="0.4" />
        ))}

        {/* ── Label ── */}
        <text x="430" y="197" textAnchor="middle" fontSize="7" fill="#746a5e"
          fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.65">
          STADIO LUIGI FERRARIS · MARASSI · 1911
        </text>
      </svg>
    </div>
  );
}
