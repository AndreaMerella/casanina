"use client";

/**
 * GenovaRolli — Palazzi dei Rolli · Via Garibaldi (Strada Nuova)
 * UNESCO World Heritage Site 2006
 *
 * Five grand Renaissance-Baroque palace facades (left → right):
 *   Palazzo Rosso (1671): deep terracotta red — two piano nobili
 *   Palazzo Bianco (1565 / rebuilt 1714): cream-white stucco
 *   Palazzo Doria-Tursi / Municipio (1565): polychrome — pink Finale stone
 *     + grey slate bands + white Carrara marble accents (longest facade, ~100m)
 *   Palazzo IV (ochre, Via Garibaldi): golden ochre / warm stone
 *   Palazzo Spinola-Pantaleo (n.2): buff / sandy stone
 *
 * Street: dark grey Ligurian cobblestones
 */

export default function GenovaRolli() {
  return (
    <div className="w-full select-none" aria-hidden="true">
      <svg
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block", overflow: "hidden" }}
      >
        <defs>
          <clipPath id="rolli-viewport">
            <rect x="0" y="0" width="900" height="200"/>
          </clipPath>
        </defs>
        <style>{`
          @keyframes rolli-win {
            0%, 100% { opacity: 0.10; }
            50%      { opacity: 0.26; }
          }
          .rolli-win { animation: rolli-win 6s ease-in-out infinite; }
        `}</style>

        <g clipPath="url(#rolli-viewport)">
        {/* ── Sky — warm Ligurian afternoon ── */}
        <rect x="0" y="0" width="900" height="200" fill="#f6f1e8" />

        {/* ═══════════════════════════════════════════════
            PALAZZO ROSSO  x=0–177  (terracotta red)
            ═══════════════════════════════════════════════ */}
        {/* Main body */}
        <rect x="0" y="14" width="177" height="176" fill="#b83020" />
        {/* Rusticated stone base */}
        <rect x="0" y="158" width="177" height="32" fill="#9a2618" />
        {[164, 170, 176, 182].map((y) => (
          <line key={y} x1="0" y1={y} x2="177" y2={y} stroke="#7a1e10" strokeWidth="0.5" opacity="0.35" />
        ))}
        {/* Horizontal cornices */}
        <rect x="0" y="14" width="177" height="5" fill="#8a2216" />
        <rect x="0" y="70" width="177" height="4" fill="#8a2216" />
        <rect x="0" y="112" width="177" height="4" fill="#8a2216" />
        <rect x="0" y="156" width="177" height="4" fill="#8a2216" />
        {/* Attic windows (3 bays): y=22-64 */}
        {[16, 76, 136].map((x) => (
          <g key={x}>
            <rect x={x} y="24" width="26" height="42" fill="#1a100a" />
            <path d={`M${x} 24 Q${x + 13} 16 ${x + 26} 24`} fill="#1a100a" />
            <rect x={x + 2} y="26" width="22" height="36" fill="#d49060" opacity="0.12" className="rolli-win" />
          </g>
        ))}
        {/* 2nd-floor windows: y=74-108 (two piano nobili characteristic of Palazzo Rosso) */}
        {[14, 74, 134].map((x) => (
          <g key={x}>
            <rect x={x} y="76" width="26" height="32" fill="#1a100a" />
            <path d={`M${x} 76 Q${x + 13} 67 ${x + 26} 76`} fill="#1a100a" />
            <line x1={x - 2} y1="72" x2={x + 28} y2="72" stroke="#8a2216" strokeWidth="1" opacity="0.5" />
          </g>
        ))}
        {/* Piano nobile (lower): y=116-152 */}
        {[10, 70, 130].map((x) => (
          <g key={x}>
            <rect x={x} y="118" width="30" height="36" fill="#1a100a" />
            <path d={`M${x} 118 Q${x + 15} 108 ${x + 30} 118`} fill="#1a100a" />
            <rect x={x + 2} y="120" width="26" height="30" fill="#d49060" opacity="0.14" className="rolli-win" />
          </g>
        ))}
        {/* Ground floor: loggia central arch */}
        <path d="M68 158 Q88 146 108 158 L108 190 L68 190 Z" fill="#1a100a" />
        {[16, 128].map((x) => (
          <rect key={x} x={x} y="163" width="22" height="22" rx="1" fill="#1a100a" />
        ))}

        {/* ═══════════════════════════════════════════════
            PALAZZO BIANCO  x=179–354  (cream-white stucco)
            ═══════════════════════════════════════════════ */}
        <rect x="179" y="10" width="175" height="180" fill="#e2dcd0" />
        <rect x="179" y="160" width="175" height="30" fill="#cac4b8" />
        {[166, 172, 178].map((y) => (
          <line key={y} x1="179" y1={y} x2="354" y2={y} stroke="#b0a898" strokeWidth="0.5" opacity="0.3" />
        ))}
        <rect x="179" y="10" width="175" height="4" fill="#b0a898" />
        <rect x="179" y="68" width="175" height="4" fill="#b0a898" />
        <rect x="179" y="110" width="175" height="4" fill="#b0a898" />
        <rect x="179" y="158" width="175" height="4" fill="#b0a898" />
        {/* Attic */}
        {[194, 252, 310].map((x) => (
          <g key={x}>
            <rect x={x} y="20" width="26" height="44" fill="#1a100a" opacity="0.8" />
            <path d={`M${x} 20 Q${x + 13} 12 ${x + 26} 20`} fill="#1a100a" opacity="0.8" />
          </g>
        ))}
        {/* 2nd floor */}
        {[192, 250, 308].map((x) => (
          <g key={x}>
            <rect x={x} y="74" width="28" height="32" fill="#1a100a" opacity="0.75" />
            <path d={`M${x} 74 Q${x + 14} 65 ${x + 28} 74`} fill="#1a100a" opacity="0.75" />
            <rect x={x + 2} y="76" width="24" height="26" fill="#f0ece4" opacity="0.2" className="rolli-win" />
          </g>
        ))}
        {/* Piano nobile */}
        {[190, 248, 306].map((x) => (
          <g key={x}>
            <rect x={x} y="116" width="30" height="38" fill="#1a100a" opacity="0.7" />
            <path d={`M${x} 116 Q${x + 15} 106 ${x + 30} 116`} fill="#1a100a" opacity="0.7" />
            <line x1={x - 2} y1="110" x2={x + 32} y2="110" stroke="#b0a898" strokeWidth="1" opacity="0.4" />
          </g>
        ))}
        {/* Ground: open walled gallery (characteristic of Palazzo Bianco) */}
        {[192, 236, 280, 322].map((x) => (
          <path key={x} d={`M${x} 160 Q${x + 14} 150 ${x + 28} 160 L${x + 28} 190 L${x} 190 Z`}
            fill="#1a100a" opacity="0.65" />
        ))}

        {/* ═══════════════════════════════════════════════
            PALAZZO DORIA-TURSI  x=356–582 (polychrome, widest)
            Pink Finale stone + grey-slate bands + white Carrara marble
            ═══════════════════════════════════════════════ */}
        {/* Main body — pink Finale stone */}
        <rect x="356" y="6" width="226" height="184" fill="#d4a898" />
        {/* Grey-slate horizontal banding — the signature polychrome detail */}
        {[30, 68, 110, 156].map((y) => (
          <rect key={y} x="356" y={y} width="226" height="4" fill="#888090" />
        ))}
        {/* White Carrara marble cornice at very top */}
        <rect x="356" y="6" width="226" height="6" fill="#e8e4dc" />
        {/* Rusticated ground base */}
        <rect x="356" y="160" width="226" height="30" fill="#c09080" />
        {[166, 172, 178].map((y) => (
          <line key={y} x1="356" y1={y} x2="582" y2={y} stroke="#a07868" strokeWidth="0.6" opacity="0.35" />
        ))}
        {/* Attic — 4 bays */}
        {[366, 418, 470, 522].map((x) => (
          <g key={x}>
            <rect x={x} y="16" width="28" height="42" fill="#1a100a" opacity="0.85" />
            <path d={`M${x} 16 Q${x + 14} 8 ${x + 28} 16`} fill="#1a100a" opacity="0.85" />
            {/* white marble surround */}
            <rect x={x - 1} y="15" width="30" height="2" fill="#e8e4dc" opacity="0.6" />
          </g>
        ))}
        {/* 2nd floor (Doric order above base) */}
        {[364, 416, 468, 520].map((x) => (
          <g key={x}>
            <rect x={x} y="74" width="32" height="32" fill="#1a100a" opacity="0.8" />
            <path d={`M${x} 74 Q${x + 16} 64 ${x + 32} 74`} fill="#1a100a" opacity="0.8" />
            <rect x={x + 2} y="76" width="28" height="26" fill="#e8d0b0" opacity="0.15" className="rolli-win" />
            <rect x={x - 2} y="68" width="36" height="3" fill="#e8e4dc" opacity="0.5" />
          </g>
        ))}
        {/* Piano nobile — 4 grand windows */}
        {[362, 414, 468, 520].map((x) => (
          <g key={x}>
            <rect x={x} y="116" width="34" height="40" fill="#1a100a" opacity="0.78" />
            <path d={`M${x} 116 Q${x + 17} 104 ${x + 34} 116`} fill="#1a100a" opacity="0.78" />
            <rect x={x + 2} y="118" width="30" height="34" fill="#e8d0b0" opacity="0.18" className="rolli-win" />
            {/* Marble window surround */}
            <rect x={x - 2} y="108" width="38" height="3" fill="#e8e4dc" opacity="0.55" />
          </g>
        ))}
        {/* Grand central portal — large loggia characteristic of Doria-Tursi */}
        <path d="M450 160 Q469 147 488 160 L488 192 L450 192 Z" fill="#1a100a" opacity="0.9" />
        <rect x="452" y="162" width="34" height="28" fill="#100804" opacity="0.95" />
        {/* Flanking lateral arched openings (loggie laterali, 1597 addition) */}
        {[366, 510].map((x) => (
          <path key={x} d={`M${x} 162 Q${x + 18} 151 ${x + 36} 162 L${x + 36} 190 L${x} 190 Z`}
            fill="#1a100a" opacity="0.72" />
        ))}

        {/* ═══════════════════════════════════════════════
            PALAZZO IV (ochre/golden)  x=584–756
            ═══════════════════════════════════════════════ */}
        <rect x="584" y="12" width="172" height="178" fill="#d0b058" />
        <rect x="584" y="160" width="172" height="30" fill="#b89840" />
        {[166, 172, 178].map((y) => (
          <line key={y} x1="584" y1={y} x2="756" y2={y} stroke="#988030" strokeWidth="0.5" opacity="0.3" />
        ))}
        <rect x="584" y="12" width="172" height="5" fill="#988030" />
        <rect x="584" y="70" width="172" height="4" fill="#988030" />
        <rect x="584" y="112" width="172" height="4" fill="#988030" />
        <rect x="584" y="158" width="172" height="4" fill="#988030" />
        {/* Attic */}
        {[598, 656, 714].map((x) => (
          <g key={x}>
            <rect x={x} y="22" width="26" height="44" fill="#1a100a" opacity="0.78" />
            <path d={`M${x} 22 Q${x + 13} 14 ${x + 26} 22`} fill="#1a100a" opacity="0.78" />
          </g>
        ))}
        {/* 2nd floor */}
        {[596, 654, 712].map((x) => (
          <g key={x}>
            <rect x={x} y="76" width="28" height="32" fill="#1a100a" opacity="0.73" />
            <path d={`M${x} 76 Q${x + 14} 67 ${x + 28} 76`} fill="#1a100a" opacity="0.73" />
            <rect x={x + 2} y="78" width="24" height="26" fill="#f8e8a0" opacity="0.18" className="rolli-win" />
          </g>
        ))}
        {/* Piano nobile with balcony on central window */}
        {[594, 650, 710].map((x, idx) => (
          <g key={x}>
            <rect x={x} y="118" width="32" height="38" fill="#1a100a" opacity="0.7" />
            <path d={`M${x} 118 Q${x + 16} 108 ${x + 32} 118`} fill="#1a100a" opacity="0.7" />
            {idx === 1 && (
              /* Balcony on central window */
              <>
                <rect x={x - 2} y="154" width="36" height="3" fill="#988030" />
                {[x + 1, x + 9, x + 17, x + 25].map((bx) => (
                  <line key={bx} x1={bx} y1="154" x2={bx} y2="160" stroke="#988030" strokeWidth="0.9" opacity="0.7" />
                ))}
              </>
            )}
          </g>
        ))}
        {/* Ground */}
        <path d="M650 160 Q666 150 682 160 L682 190 L650 190 Z" fill="#1a100a" opacity="0.78" />
        {[596, 712].map((x) => (
          <rect key={x} x={x} y="164" width="24" height="22" rx="1" fill="#1a100a" opacity="0.62" />
        ))}

        {/* ═══════════════════════════════════════════════
            PALAZZO SPINOLA-PANTALEO  x=758–900 (buff, partial)
            ═══════════════════════════════════════════════ */}
        <rect x="758" y="18" width="142" height="172" fill="#c8a880" />
        <rect x="758" y="162" width="142" height="28" fill="#b09068" />
        {[168, 174, 180].map((y) => (
          <line key={y} x1="758" y1={y} x2="900" y2={y} stroke="#988060" strokeWidth="0.5" opacity="0.3" />
        ))}
        <rect x="758" y="18" width="142" height="4" fill="#988060" />
        <rect x="758" y="72" width="142" height="4" fill="#988060" />
        <rect x="758" y="114" width="142" height="4" fill="#988060" />
        <rect x="758" y="160" width="142" height="4" fill="#988060" />
        {/* Attic */}
        {[772, 826, 876].map((x) => (
          <g key={x}>
            <rect x={x} y="28" width="24" height="40" fill="#1a100a" opacity="0.75" />
            <path d={`M${x} 28 Q${x + 12} 20 ${x + 24} 28`} fill="#1a100a" opacity="0.75" />
          </g>
        ))}
        {/* 2nd floor */}
        {[770, 826].map((x) => (
          <g key={x}>
            <rect x={x} y="78" width="26" height="32" fill="#1a100a" opacity="0.7" />
            <path d={`M${x} 78 Q${x + 13} 69 ${x + 26} 78`} fill="#1a100a" opacity="0.7" />
          </g>
        ))}
        {/* Piano nobile */}
        {[768, 824].map((x) => (
          <g key={x}>
            <rect x={x} y="120" width="30" height="36" fill="#1a100a" opacity="0.68" />
            <path d={`M${x} 120 Q${x + 15} 110 ${x + 30} 120`} fill="#1a100a" opacity="0.68" />
          </g>
        ))}
        {/* Ground */}
        <path d="M818 162 Q833 152 848 162 L848 190 L818 190 Z" fill="#1a100a" opacity="0.72" />

        {/* ── Thin pilaster lines between palaces ── */}
        {[177, 355, 583, 757].map((x) => (
          <rect key={x} x={x - 1} y="6" width="3" height="184" fill="#746a5e" opacity="0.22" />
        ))}

        {/* ── Street — dark Ligurian cobblestones ── */}
        <rect x="0" y="190" width="900" height="10" fill="#6a6460" />
        {/* Cobblestone joint lines */}
        {Array.from({ length: 24 }, (_, i) => (
          <line key={i}
            x1={i * 38 + 19} y1="190" x2={i * 38 + 19} y2="200"
            stroke="#5a5250" strokeWidth="0.8" opacity="0.5" />
        ))}
        <line x1="0" y1="194" x2="900" y2="194" stroke="#5a5250" strokeWidth="0.5" opacity="0.4" />
        <line x1="0" y1="198" x2="900" y2="198" stroke="#5a5250" strokeWidth="0.5" opacity="0.3" />

        {/* ── Seagulls — SVG animateTransform so clipPath contains them ── */}
        {/* Each seagull: two wing arches forming an M shape */}
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="-60 50" to="980 30" dur="26s" repeatCount="indefinite" begin="-8s"/>
          {/* Seagull 1 */}
          <path d="M0 0 Q5 -5 10 0 Q15 -5 20 0" fill="none" stroke="#746a5e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Seagull 2 */}
          <path d="M28 -1 Q33 -6 38 -1 Q43 -6 48 -1" fill="none" stroke="#746a5e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Seagull 3 */}
          <path d="M58 0 Q62 -4 66 0 Q70 -4 74 0" fill="none" stroke="#746a5e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g>
          <animateTransform attributeName="transform" type="translate"
            from="-40 38" to="980 58" dur="34s" repeatCount="indefinite" begin="-20s"/>
          {/* Seagull 1 */}
          <path d="M0 0 Q5 -5 10 0 Q15 -5 20 0" fill="none" stroke="#746a5e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Seagull 2 */}
          <path d="M28 -1 Q33 -5 38 -1 Q43 -5 48 -1" fill="none" stroke="#746a5e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* ── Label ── */}
        <text x="450" y="196" textAnchor="middle" fontSize="7" fill="#746a5e"
          fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.6">
          PALAZZI DEI ROLLI · VIA GARIBALDI · UNESCO 2006
        </text>
        </g>{/* end rolli-viewport clip */}
      </svg>

      {/* Description */}
      <div className="bg-card border-t border-border px-6 py-5 text-center">
        <p className="text-xs text-muted leading-relaxed max-w-2xl mx-auto">
          <span className="font-semibold text-foreground">Palazzi dei Rolli</span> — Via Garibaldi (Strada Nuova), Genova.
          Five grand Renaissance-Baroque palaces built for the city&apos;s noble families in the 16th–17th century.
          Palazzo Rosso (1671), Palazzo Bianco (1565), and Palazzo Doria-Tursi (1565) now house the{" "}
          <em>Civici Musei di Strada Nuova</em>.
          Designated <span className="font-medium text-foreground">UNESCO World Heritage Site</span> in 2006.
        </p>
      </div>
    </div>
  );
}
