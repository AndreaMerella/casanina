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

        {/* Perimeter wall — the external envelope, concrete */}
        <rect x="185" y="112" width="490" height="68" rx="2" fill="#c0b8a8" />
        {/* Wall texture / horizontal joints */}
        {[122, 132, 142, 152, 162].map(y => (
          <line key={y} x1="185" y1={y} x2="675" y2={y}
            stroke="#b0a898" strokeWidth="0.6" opacity="0.5" />
        ))}

        {/* Arcaded entrance portals at street level */}
        {[210, 265, 320, 395, 465, 520, 575, 630].map(x => (
          <path key={x}
            d={`M${x} 180 L${x} 148 Q${x+14} 138 ${x+28} 148 L${x+28} 180 Z`}
            fill="#18120c" opacity="0.22" />
        ))}

        {/* Corner buttresses */}
        <rect x="183" y="108" width="18" height="72" fill="#b0a898" />
        <rect x="659" y="108" width="18" height="72" fill="#b0a898" />

        {/* ── Upper bowl (stands rising above perimeter wall) ── */}
        {/* Back wall of upper tier */}
        <rect x="190" y="60" width="480" height="54" fill="#b8b0a0" />
        {/* Upper tier facade texture */}
        {[65, 75, 85, 95, 105].map(y => (
          <line key={y} x1="190" y1={y} x2="670" y2={y}
            stroke="#a8a098" strokeWidth="0.5" opacity="0.45" />
        ))}
        {/* Vertical column lines */}
        {Array.from({ length: 20 }, (_, i) => 190 + i * 25).map(x => (
          <line key={x} x1={x} y1="60" x2={x} y2="112"
            stroke="#a8a098" strokeWidth="0.7" opacity="0.4" />
        ))}

        {/* Stand sections — glimpsed over the parapet */}
        {/* Genoa Nord (red) — left side */}
        <rect x="194" y="78" width="130" height="34" fill="#b82020" opacity="0.55" />
        {/* Central (green pitch visible) */}
        <rect x="324" y="72" width="212" height="40" fill="#3a6830" opacity="0.50" />
        {/* Samp Sud (blue) — right side */}
        <rect x="536" y="78" width="130" height="34" fill="#1a3070" opacity="0.50" />

        {/* Pitch marking hint */}
        <ellipse cx="430" cy="91" rx="55" ry="16" fill="none"
          stroke="#4a7840" strokeWidth="1.5" opacity="0.35" />
        <line x1="430" y1="75" x2="430" y2="112" stroke="#4a7840" strokeWidth="1" opacity="0.3" />

        {/* Crowd dots — Genoa red end */}
        {Array.from({ length: 18 }, (_, i) => ({
          cx: 200 + (i % 9) * 14,
          cy: 82 + Math.floor(i / 9) * 10,
        })).map(({ cx, cy }, i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill={i % 3 === 0 ? "#d83030" : "#e8e0d4"} opacity="0.7" />
        ))}
        {/* Crowd dots — Samp blue end */}
        {Array.from({ length: 18 }, (_, i) => ({
          cx: 540 + (i % 9) * 14,
          cy: 82 + Math.floor(i / 9) * 10,
        })).map(({ cx, cy }, i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill={i % 3 === 0 ? "#2040a0" : "#e8e0d4"} opacity="0.7" />
        ))}

        {/* ── Cantilevered roof (1990 renovation) ── */}
        {/* Roof underside — slightly darker */}
        <rect x="178" y="50" width="504" height="12" fill="#888880" />
        {/* Roof top surface */}
        <rect x="174" y="44" width="512" height="8"  fill="#949890" />
        {/* Roof front fascia / leading edge */}
        <rect x="174" y="52" width="512" height="4"  fill="#707870" />
        {/* Roof support columns visible at front */}
        {[190, 245, 300, 355, 410, 465, 520, 575, 630].map(x => (
          <rect key={x} x={x} y="52" width="5" height="60" fill="#787870" opacity="0.5" />
        ))}

        {/* ── Floodlight pylons ── */}
        {/* Left-front */}
        <rect x="186" y="12" width="7" height="100" fill="#a8a098" />
        <rect x="178" y="8"  width="22" height="6"  fill="#989088" />
        <rect x="173" y="2"  width="32" height="8"  rx="1" fill="#686058" />
        {/* lamp heads */}
        {[174,183,192,201].map(lx => (
          <rect key={lx} x={lx} y="0" width="7" height="4" fill="#f0e8c0" opacity="0.8" />
        ))}

        {/* Right-front */}
        <rect x="667" y="12" width="7" height="100" fill="#a8a098" />
        <rect x="660" y="8"  width="22" height="6"  fill="#989088" />
        <rect x="655" y="2"  width="32" height="8"  rx="1" fill="#686058" />
        {[656,665,674,683].map(lx => (
          <rect key={lx} x={lx} y="0" width="7" height="4" fill="#f0e8c0" opacity="0.8" />
        ))}

        {/* ── Gate / entrance detail at base ── */}
        <rect x="390" y="150" width="80" height="30" fill="#d8d0c0" />
        <path d="M390 180 L390 158 Q430 146 470 158 L470 180 Z" fill="#18120c" opacity="0.25" />
        <rect x="407" y="152" width="18" height="22" fill="#18120c" opacity="0.18" />
        <rect x="435" y="152" width="18" height="22" fill="#18120c" opacity="0.18" />

        {/* Genoa CFC crest colour bar (subtle, left parapet) */}
        <rect x="185" y="108" width="16" height="6" fill="#c02020" opacity="0.7" />
        <rect x="185" y="106" width="16" height="3" fill="#1830a0" opacity="0.6" />

        {/* Sampdoria colour bar (right parapet) */}
        <rect x="659" y="108" width="16" height="6" fill="#1830a0" opacity="0.7" />
        <rect x="659" y="106" width="16" height="3" fill="#c02020" opacity="0.5" />

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
