"use client";

/**
 * GenovaVicoli — Genovese building facades seen from the street
 * Authentic caruggi colours: terracotta, ochre, faded green, cream, salmon
 * Shuttered windows, balconies, laundry gently swaying in the breeze
 *
 * viewBox 900×140 keeps the strip elegant on any viewport:
 *   1440 px wide → ~224 px tall  ·  375 px wide → ~58 px tall
 */
export default function GenovaVicoli() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <svg
        viewBox="0 0 900 140"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block", overflow: "hidden" }}
      >
        <style>{`
          @keyframes vicoli-sway-a {
            0%,100% { transform: rotate(-6deg); }
            50%     { transform: rotate(6deg); }
          }
          @keyframes vicoli-sway-b {
            0%,100% { transform: rotate(5deg); }
            50%     { transform: rotate(-7deg); }
          }
          @keyframes vicoli-sway-c {
            0%,100% { transform: rotate(-4deg); }
            50%     { transform: rotate(5deg); }
          }
          @keyframes vicoli-sway-sheet {
            0%,100% { transform: rotate(-2deg) skewX(-0.5deg); }
            50%     { transform: rotate(2deg) skewX(0.5deg); }
          }
          .v-a { animation: vicoli-sway-a 3.4s ease-in-out infinite; transform-origin: 50% 0; }
          .v-b { animation: vicoli-sway-b 4.2s ease-in-out infinite; transform-origin: 50% 0; }
          .v-c { animation: vicoli-sway-c 3.8s ease-in-out infinite; transform-origin: 50% 0; }
          .v-s { animation: vicoli-sway-sheet 5.5s ease-in-out infinite; transform-origin: 50% 0; }
        `}</style>

        {/* ── Sky ── */}
        <rect x="0" y="0" width="900" height="140" fill="#edf2ee"/>

        {/*
          ══════════════════════════════════════════════════════
           7 BUILDINGS  — authentic Genovese palette, irregular skyline
           Each has: main facade · cornice · windows with shutters
           Some have: balcony · arched door
          ══════════════════════════════════════════════════════
        */}

        {/* ━━ 1 · TERRACOTTA  x=0–130  top=15 ━━ */}
        <rect x="0"   y="15" width="130" height="125" fill="#c05828"/>
        <rect x="0"   y="12" width="130" height="5"   fill="#a84818"/>   {/* cornice */}
        <rect x="0"   y="0"  width="130" height="14"  fill="#984010"/>   {/* attic */}
        <rect x="28"  y="1"  width="10"  height="18"  fill="#883808"/>   {/* chimney */}
        <rect x="26"  y="0"  width="14"  height="4"   fill="#783000"/>
        {/* fl4 */}
        <rect x="20"  y="22" width="12"  height="17"  fill="#1a100a"/>
        <rect x="15"  y="22" width="6"   height="17"  fill="#3a5030" opacity="0.9"/> {/* shutter L */}
        <rect x="32"  y="22" width="6"   height="17"  fill="#3a5030" opacity="0.9"/> {/* shutter R */}
        <rect x="90"  y="21" width="12"  height="17"  fill="#1a100a"/>
        <rect x="85"  y="21" width="6"   height="17"  fill="#3a5030" opacity="0.9"/>
        <rect x="102" y="21" width="6"   height="17"  fill="#3a5030" opacity="0.9"/>
        {/* fl3 */}
        <rect x="20"  y="50" width="12"  height="17"  fill="#1a100a"/>
        <rect x="15"  y="50" width="6"   height="17"  fill="#3a5030" opacity="0.85"/>
        <rect x="32"  y="50" width="6"   height="17"  fill="#3a5030" opacity="0.85"/>
        <rect x="90"  y="49" width="12"  height="17"  fill="#1a100a"/>
        <rect x="85"  y="49" width="6"   height="17"  fill="#3a5030" opacity="0.85"/>
        <rect x="102" y="49" width="6"   height="17"  fill="#3a5030" opacity="0.85"/>
        {/* fl2 */}
        <rect x="20"  y="79" width="12"  height="17"  fill="#1a100a"/>
        <rect x="15"  y="79" width="6"   height="17"  fill="#3a5030" opacity="0.8"/>
        <rect x="32"  y="79" width="6"   height="17"  fill="#3a5030" opacity="0.8"/>
        <rect x="90"  y="78" width="12"  height="17"  fill="#1a100a"/>
        <rect x="85"  y="78" width="6"   height="17"  fill="#3a5030" opacity="0.8"/>
        <rect x="102" y="78" width="6"   height="17"  fill="#3a5030" opacity="0.8"/>
        {/* door */}
        <path d="M52 140 L52 108 Q65 100 78 108 L78 140 Z" fill="#7a3818" opacity="0.85"/>

        {/* ━━ 2 · OCHRE  x=130–258  top=6 ━━ */}
        <rect x="130" y="6"  width="128" height="134" fill="#c89838"/>
        <rect x="130" y="3"  width="128" height="5"   fill="#b08828"/>
        <rect x="130" y="0"  width="128" height="5"   fill="#988018"/>
        <rect x="154" y="0"  width="9"   height="14"  fill="#886010"/> {/* chimney */}
        <rect x="152" y="0"  width="13"  height="4"   fill="#786008"/>
        {/* fl4 */}
        <rect x="150" y="14" width="12"  height="18"  fill="#1a100a"/>
        <rect x="145" y="14" width="6"   height="18"  fill="#7a5020" opacity="0.7"/>
        <rect x="162" y="14" width="6"   height="18"  fill="#7a5020" opacity="0.7"/>
        <rect x="218" y="13" width="12"  height="18"  fill="#1a100a"/>
        <rect x="213" y="13" width="6"   height="18"  fill="#7a5020" opacity="0.7"/>
        <rect x="230" y="13" width="6"   height="18"  fill="#7a5020" opacity="0.7"/>
        {/* fl3 */}
        <rect x="150" y="42" width="12"  height="18"  fill="#1a100a"/>
        <rect x="145" y="42" width="6"   height="18"  fill="#7a5020" opacity="0.65"/>
        <rect x="162" y="42" width="6"   height="18"  fill="#7a5020" opacity="0.65"/>
        <rect x="218" y="41" width="12"  height="18"  fill="#1a100a"/>
        <rect x="213" y="41" width="6"   height="18"  fill="#7a5020" opacity="0.65"/>
        <rect x="230" y="41" width="6"   height="18"  fill="#7a5020" opacity="0.65"/>
        {/* fl2 + balcony */}
        <rect x="150" y="72" width="12"  height="18"  fill="#1a100a"/>
        <rect x="145" y="72" width="6"   height="18"  fill="#7a5020" opacity="0.6"/>
        <rect x="162" y="72" width="6"   height="18"  fill="#7a5020" opacity="0.6"/>
        <rect x="182" y="70" width="44"  height="2"   fill="#988018"/>   {/* balcony rail top */}
        <rect x="182" y="72" width="2"   height="8"   fill="#988018"/>
        <rect x="224" y="72" width="2"   height="8"   fill="#988018"/>
        {[188, 196, 204, 212, 218].map(bx => (
          <line key={bx} x1={bx} y1="70" x2={bx} y2="80" stroke="#988018" strokeWidth="0.8" opacity="0.6"/>
        ))}
        <rect x="218" y="71" width="12"  height="18"  fill="#1a100a"/>
        {/* ground floor arch */}
        <path d="M160 140 L160 106 Q184 96 208 106 L208 140 Z" fill="#886010" opacity="0.85"/>

        {/* ━━ 3 · CREAM  x=258–366  top=22 ━━ */}
        <rect x="258" y="22" width="108" height="118" fill="#dfd0b8"/>
        <rect x="258" y="18" width="108" height="6"   fill="#cfbfa8"/>
        <rect x="258" y="0"  width="108" height="20"  fill="#b8a890"/>
        {/* fl3 */}
        <rect x="276" y="30" width="12"  height="18"  fill="#1a100a" opacity="0.8"/>
        <rect x="271" y="30" width="6"   height="18"  fill="#3a5030" opacity="0.8"/>
        <rect x="288" y="30" width="6"   height="18"  fill="#3a5030" opacity="0.8"/>
        <rect x="336" y="29" width="12"  height="18"  fill="#1a100a" opacity="0.8"/>
        <rect x="331" y="29" width="6"   height="18"  fill="#3a5030" opacity="0.8"/>
        <rect x="348" y="29" width="6"   height="18"  fill="#3a5030" opacity="0.8"/>
        {/* fl2 */}
        <rect x="276" y="60" width="12"  height="18"  fill="#1a100a" opacity="0.75"/>
        <rect x="271" y="60" width="6"   height="18"  fill="#3a5030" opacity="0.75"/>
        <rect x="288" y="60" width="6"   height="18"  fill="#3a5030" opacity="0.75"/>
        <rect x="336" y="59" width="12"  height="18"  fill="#1a100a" opacity="0.75"/>
        <rect x="331" y="59" width="6"   height="18"  fill="#3a5030" opacity="0.75"/>
        <rect x="348" y="59" width="6"   height="18"  fill="#3a5030" opacity="0.75"/>
        {/* fl1 */}
        <rect x="276" y="90" width="12"  height="18"  fill="#1a100a" opacity="0.7"/>
        <rect x="336" y="89" width="12"  height="18"  fill="#1a100a" opacity="0.7"/>
        {/* door */}
        <path d="M296 140 L296 108 Q312 100 328 108 L328 140 Z" fill="#9a8870" opacity="0.8"/>

        {/* ━━ 4 · FADED GREEN  x=366–510  top=8 ━━ */}
        <rect x="366" y="8"  width="144" height="132" fill="#5e7850"/>
        <rect x="366" y="4"  width="144" height="6"   fill="#4e6840"/>
        <rect x="366" y="0"  width="144" height="6"   fill="#3e5830"/>
        <rect x="400" y="0"  width="9"   height="14"  fill="#364828"/>
        <rect x="398" y="0"  width="13"  height="4"   fill="#2e4020"/>
        {/* fl4 */}
        <rect x="384" y="16" width="12"  height="18"  fill="#1a100a"/>
        <rect x="379" y="16" width="6"   height="18"  fill="#2e4820" opacity="0.8"/>
        <rect x="396" y="16" width="6"   height="18"  fill="#2e4820" opacity="0.8"/>
        <rect x="454" y="15" width="12"  height="18"  fill="#1a100a"/>
        <rect x="449" y="15" width="6"   height="18"  fill="#2e4820" opacity="0.8"/>
        <rect x="466" y="15" width="6"   height="18"  fill="#2e4820" opacity="0.8"/>
        {/* fl3 */}
        <rect x="384" y="44" width="12"  height="18"  fill="#1a100a"/>
        <rect x="379" y="44" width="6"   height="18"  fill="#2e4820" opacity="0.75"/>
        <rect x="396" y="44" width="6"   height="18"  fill="#2e4820" opacity="0.75"/>
        <rect x="454" y="43" width="12"  height="18"  fill="#1a100a"/>
        <rect x="449" y="43" width="6"   height="18"  fill="#2e4820" opacity="0.75"/>
        <rect x="466" y="43" width="6"   height="18"  fill="#2e4820" opacity="0.75"/>
        {/* fl2 */}
        <rect x="384" y="73" width="12"  height="18"  fill="#1a100a"/>
        <rect x="379" y="73" width="6"   height="18"  fill="#2e4820" opacity="0.7"/>
        <rect x="396" y="73" width="6"   height="18"  fill="#2e4820" opacity="0.7"/>
        <rect x="454" y="72" width="12"  height="18"  fill="#1a100a"/>
        <rect x="449" y="72" width="6"   height="18"  fill="#2e4820" opacity="0.7"/>
        <rect x="466" y="72" width="6"   height="18"  fill="#2e4820" opacity="0.7"/>
        {/* fl1 + arched door */}
        <rect x="384" y="102" width="12" height="18"  fill="#1a100a" opacity="0.8"/>
        <rect x="454" y="101" width="12" height="18"  fill="#1a100a" opacity="0.8"/>
        <path d="M416 140 L416 108 Q438 98 460 108 L460 140 Z" fill="#2e4820" opacity="0.85"/>

        {/* ━━ 5 · SALMON  x=510–626  top=16 ━━ */}
        <rect x="510" y="16" width="116" height="124" fill="#c89078"/>
        <rect x="510" y="12" width="116" height="6"   fill="#b88068"/>
        <rect x="510" y="0"  width="116" height="14"  fill="#a87058"/>
        {/* fl3 */}
        <rect x="528" y="24" width="12"  height="18"  fill="#1a100a" opacity="0.8"/>
        <rect x="523" y="24" width="6"   height="18"  fill="#5a3020" opacity="0.75"/>
        <rect x="540" y="24" width="6"   height="18"  fill="#5a3020" opacity="0.75"/>
        <rect x="596" y="23" width="12"  height="18"  fill="#1a100a" opacity="0.8"/>
        <rect x="591" y="23" width="6"   height="18"  fill="#5a3020" opacity="0.75"/>
        <rect x="608" y="23" width="6"   height="18"  fill="#5a3020" opacity="0.75"/>
        {/* fl2 + balcony */}
        <rect x="528" y="54" width="12"  height="18"  fill="#1a100a" opacity="0.75"/>
        <rect x="523" y="54" width="6"   height="18"  fill="#5a3020" opacity="0.7"/>
        <rect x="540" y="54" width="6"   height="18"  fill="#5a3020" opacity="0.7"/>
        <rect x="552" y="52" width="60"  height="2"   fill="#b88068"/>
        <rect x="552" y="54" width="2"   height="8"   fill="#b88068"/>
        <rect x="610" y="54" width="2"   height="8"   fill="#b88068"/>
        {[558, 566, 574, 582, 592, 602].map(bx => (
          <line key={bx} x1={bx} y1="52" x2={bx} y2="62" stroke="#b88068" strokeWidth="0.8" opacity="0.55"/>
        ))}
        <rect x="596" y="53" width="12"  height="18"  fill="#1a100a" opacity="0.75"/>
        {/* fl1 */}
        <rect x="528" y="85" width="12"  height="18"  fill="#1a100a" opacity="0.7"/>
        <rect x="596" y="84" width="12"  height="18"  fill="#1a100a" opacity="0.7"/>
        {/* door */}
        <path d="M548 140 L548 108 Q568 100 588 108 L588 140 Z" fill="#7a4828" opacity="0.85"/>

        {/* ━━ 6 · SANDY BUFF  x=626–756  top=11 ━━ */}
        <rect x="626" y="11" width="130" height="129" fill="#d8c890"/>
        <rect x="626" y="7"  width="130" height="6"   fill="#c8b880"/>
        <rect x="626" y="0"  width="130" height="9"   fill="#b8a870"/>
        <rect x="668" y="0"  width="9"   height="16"  fill="#a09060"/>
        <rect x="666" y="0"  width="13"  height="4"   fill="#907850"/>
        {/* fl4 */}
        <rect x="644" y="18" width="12"  height="18"  fill="#1a100a" opacity="0.75"/>
        <rect x="639" y="18" width="6"   height="18"  fill="#4a6038" opacity="0.8"/>
        <rect x="656" y="18" width="6"   height="18"  fill="#4a6038" opacity="0.8"/>
        <rect x="716" y="17" width="12"  height="18"  fill="#1a100a" opacity="0.75"/>
        <rect x="711" y="17" width="6"   height="18"  fill="#4a6038" opacity="0.8"/>
        <rect x="728" y="17" width="6"   height="18"  fill="#4a6038" opacity="0.8"/>
        {/* fl3 */}
        <rect x="644" y="47" width="12"  height="18"  fill="#1a100a" opacity="0.7"/>
        <rect x="639" y="47" width="6"   height="18"  fill="#4a6038" opacity="0.75"/>
        <rect x="656" y="47" width="6"   height="18"  fill="#4a6038" opacity="0.75"/>
        <rect x="716" y="46" width="12"  height="18"  fill="#1a100a" opacity="0.7"/>
        <rect x="711" y="46" width="6"   height="18"  fill="#4a6038" opacity="0.75"/>
        <rect x="728" y="46" width="6"   height="18"  fill="#4a6038" opacity="0.75"/>
        {/* fl2 */}
        <rect x="644" y="77" width="12"  height="18"  fill="#1a100a" opacity="0.68"/>
        <rect x="716" y="76" width="12"  height="18"  fill="#1a100a" opacity="0.68"/>
        {/* arched door */}
        <path d="M666 140 L666 108 Q691 98 716 108 L716 140 Z" fill="#989060" opacity="0.85"/>

        {/* ━━ 7 · DUSTY ROSE  x=756–900  top=24 ━━ */}
        <rect x="756" y="24" width="144" height="116" fill="#d0a898"/>
        <rect x="756" y="19" width="144" height="7"   fill="#c09888"/>
        <rect x="756" y="0"  width="144" height="21"  fill="#b08878"/>
        {/* fl3 */}
        <rect x="776" y="32" width="12"  height="18"  fill="#1a100a" opacity="0.75"/>
        <rect x="771" y="32" width="6"   height="18"  fill="#5a3830" opacity="0.7"/>
        <rect x="788" y="32" width="6"   height="18"  fill="#5a3830" opacity="0.7"/>
        <rect x="852" y="31" width="12"  height="18"  fill="#1a100a" opacity="0.75"/>
        <rect x="847" y="31" width="6"   height="18"  fill="#5a3830" opacity="0.7"/>
        <rect x="864" y="31" width="6"   height="18"  fill="#5a3830" opacity="0.7"/>
        {/* fl2 */}
        <rect x="776" y="61" width="12"  height="18"  fill="#1a100a" opacity="0.7"/>
        <rect x="771" y="61" width="6"   height="18"  fill="#5a3830" opacity="0.65"/>
        <rect x="788" y="61" width="6"   height="18"  fill="#5a3830" opacity="0.65"/>
        <rect x="852" y="60" width="12"  height="18"  fill="#1a100a" opacity="0.7"/>
        <rect x="847" y="60" width="6"   height="18"  fill="#5a3830" opacity="0.65"/>
        <rect x="864" y="60" width="6"   height="18"  fill="#5a3830" opacity="0.65"/>
        {/* fl1 */}
        <rect x="776" y="91" width="12"  height="18"  fill="#1a100a" opacity="0.65"/>
        <rect x="852" y="90" width="12"  height="18"  fill="#1a100a" opacity="0.65"/>
        {/* door */}
        <path d="M806 140 L806 108 Q830 98 854 108 L854 140 Z" fill="#806858" opacity="0.85"/>

        {/* ── Subtle building separation lines ── */}
        {[130, 258, 366, 510, 626, 756].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="140" stroke="#00000010" strokeWidth="2"/>
        ))}

        {/* ── Ground — cobblestones ── */}
        <rect x="0" y="128" width="900" height="12" fill="#c4b8a4"/>
        {Array.from({ length: 14 }, (_, i) => (
          <rect key={i} x={i * 64 + 2} y="129" width="56" height="5"
            rx="1" fill="#b4a894" opacity="0.5"/>
        ))}

        {/* ══════════════════════════════════════════
            LAUNDRY LINE — a single rope at y=68
            Items hang from the line (transform-origin at top centre)
            Spaced tastefully across the facades
          ══════════════════════════════════════════ */}
        <line x1="0" y1="68" x2="900" y2="68" stroke="#5a4030" strokeWidth="0.9" opacity="0.55"/>

        {/* White shirt */}
        <g transform="translate(48,68)" className="v-a">
          <path d="M-8 0 L-10 4 L-10 17 L10 17 L10 4 L8 0 Z" fill="#ede8df"/>
          <path d="M-10 4 L-15 4 L-15 10 L-10 10 Z M10 4 L15 4 L15 10 L10 10 Z" fill="#ede8df"/>
          <rect x="-10" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="6"   y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Terracotta bed sheet */}
        <g transform="translate(155,68)" className="v-s" style={{ animationDelay: "-1.8s" }}>
          <rect x="-22" y="0" width="44" height="28" fill="#c87858" opacity="0.75"/>
          <rect x="-22" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="18"  y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Dark blue pants */}
        <g transform="translate(238,68)" className="v-b" style={{ animationDelay: "-0.8s" }}>
          <path d="M-7 0 L-9 20 L-2 18 L0 20 L2 18 L9 20 L7 0 Z" fill="#486080"/>
          <rect x="-7" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="3"  y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Sage green shirt */}
        <g transform="translate(315,68)" className="v-a" style={{ animationDelay: "-2.5s" }}>
          <path d="M-8 0 L-10 4 L-10 17 L10 17 L10 4 L8 0 Z" fill="#6a8858"/>
          <path d="M-10 4 L-15 4 L-15 10 L-10 10 Z M10 4 L15 4 L15 10 L10 10 Z" fill="#6a8858"/>
          <rect x="-10" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="6"   y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Cream sheet */}
        <g transform="translate(418,68)" className="v-s" style={{ animationDelay: "-3.2s" }}>
          <rect x="-20" y="0" width="40" height="26" fill="#e8dcc8" opacity="0.82"/>
          <rect x="-20" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="16"  y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Brick red undershirt */}
        <g transform="translate(502,68)" className="v-c" style={{ animationDelay: "-0.5s" }}>
          <rect x="-6" y="0" width="12" height="14" fill="#a03828"/>
          <rect x="-6" y="0" width="3"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="3"  y="0" width="3"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Yellow-ochre towel */}
        <g transform="translate(578,68)" className="v-b" style={{ animationDelay: "-1.5s" }}>
          <rect x="-10" y="0" width="20" height="22" fill="#c8a840" opacity="0.85"/>
          <rect x="-10" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="6"   y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Off-white shirt */}
        <g transform="translate(670,68)" className="v-a" style={{ animationDelay: "-4s" }}>
          <path d="M-8 0 L-10 4 L-10 17 L10 17 L10 4 L8 0 Z" fill="#f0ebe3"/>
          <path d="M-10 4 L-15 4 L-15 10 L-10 10 Z M10 4 L15 4 L15 10 L10 10 Z" fill="#f0ebe3"/>
          <rect x="-10" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="6"   y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Dusty rose sheet */}
        <g transform="translate(774,68)" className="v-s" style={{ animationDelay: "-2s" }}>
          <rect x="-18" y="0" width="36" height="26" fill="#c8a0a0" opacity="0.75"/>
          <rect x="-18" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="14"  y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>
        {/* Dark trousers */}
        <g transform="translate(856,68)" className="v-c" style={{ animationDelay: "-3s" }}>
          <path d="M-7 0 L-9 20 L-2 18 L0 20 L2 18 L9 20 L7 0 Z" fill="#3a3020"/>
          <rect x="-7" y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
          <rect x="3"  y="0" width="4"  height="1.5" fill="#5a4030" opacity="0.5"/>
        </g>

        {/* ── Label ── */}
        <text x="450" y="138" textAnchor="middle" fontSize="6.5" fill="#8a7858"
          fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.65">
          CARUGGI · CENTRO STORICO
        </text>
      </svg>
    </div>
  );
}
