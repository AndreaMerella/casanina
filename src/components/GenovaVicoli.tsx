"use client";

/**
 * GenovaVicoli — Genovese building facades seen from the street
 * Full-width row of painted plaster buildings, laundry lines spanning across
 * The warm colours of Carignano and the centro storico
 */
export default function GenovaVicoli() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <svg
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block" }}
      >
        <style>{`
          @keyframes sway-a {
            0%,100% { transform: rotate(-7deg); }
            50%     { transform: rotate(7deg); }
          }
          @keyframes sway-b {
            0%,100% { transform: rotate(6deg); }
            50%     { transform: rotate(-6deg); }
          }
          @keyframes sway-c {
            0%,100% { transform: rotate(-5deg); }
            50%     { transform: rotate(9deg); }
          }
          @keyframes sway-d {
            0%,100% { transform: rotate(8deg); }
            50%     { transform: rotate(-4deg); }
          }
          @keyframes sway-sheet {
            0%,100% { transform: rotate(-3deg) skewX(-1deg); }
            50%     { transform: rotate(3deg) skewX(1deg); }
          }
          .sw-a { animation: sway-a 3.2s ease-in-out infinite; transform-origin: 50% 0%; }
          .sw-b { animation: sway-b 4.1s ease-in-out infinite; transform-origin: 50% 0%; }
          .sw-c { animation: sway-c 3.6s ease-in-out infinite; transform-origin: 50% 0%; }
          .sw-d { animation: sway-d 4.8s ease-in-out infinite; transform-origin: 50% 0%; }
          .sw-s { animation: sway-sheet 5.5s ease-in-out infinite; transform-origin: 50% 0%; }
        `}</style>

        {/* ── Sky above roofline ── */}
        <rect x="0" y="0" width="900" height="200" fill="#e8f0f6"/>

        {/* ══ Buildings — 8 facades across full width ══ */}

        {/* 1 — ochre #d4b068 */}
        <rect x="0"   y="22" width="112" height="178" fill="#d4b068"/>
        <rect x="0"   y="18" width="112" height="6"   fill="#c4a058"/> {/* cornice */}
        <rect x="0"   y="0"  width="112" height="20"  fill="#c09848"/> {/* attic */}
        {/* chimney */}
        <rect x="30"  y="0"  width="10"  height="22"  fill="#b08838"/>
        <rect x="28"  y="0"  width="14"  height="4"   fill="#a07828"/>
        {/* windows fl4 */}
        <rect x="18"  y="30" width="14"  height="20"  rx="1" fill="#8a7848" opacity="0.5"/>
        <rect x="18"  y="30" width="6"   height="20"  rx="1" fill="#5a4828" opacity="0.4"/>
        <rect x="78"  y="28" width="14"  height="20"  rx="1" fill="#8a7848" opacity="0.5"/>
        <rect x="78"  y="28" width="6"   height="20"  rx="1" fill="#5a4828" opacity="0.4"/>
        {/* windows fl3 */}
        <rect x="18"  y="62" width="14"  height="20"  rx="1" fill="#8a7848" opacity="0.45"/>
        <rect x="78"  y="60" width="14"  height="20"  rx="1" fill="#8a7848" opacity="0.45"/>
        {/* windows fl2 */}
        <rect x="18"  y="98" width="14"  height="22"  rx="1" fill="#8a7848" opacity="0.45"/>
        <rect x="78"  y="96" width="14"  height="22"  rx="1" fill="#8a7848" opacity="0.45"/>
        {/* windows fl1 */}
        <rect x="18"  y="134" width="14" height="22"  rx="1" fill="#8a7848" opacity="0.5"/>
        <rect x="78"  y="132" width="14" height="22"  rx="1" fill="#8a7848" opacity="0.5"/>
        {/* door */}
        <path d="M44 200 L44 166 Q56 158 68 166 L68 200 Z" fill="#7a5828" opacity="0.8"/>

        {/* 2 — terracotta #c87848 */}
        <rect x="112" y="12" width="98"  height="188" fill="#c87848"/>
        <rect x="112" y="8"  width="98"  height="6"   fill="#b86838"/>
        <rect x="112" y="0"  width="98"  height="10"  fill="#a85828"/>
        <rect x="125" y="20" width="14"  height="22"  rx="1" fill="#7a4828" opacity="0.5"/>
        <rect x="185" y="18" width="14"  height="22"  rx="1" fill="#7a4828" opacity="0.5"/>
        <rect x="125" y="56" width="14"  height="22"  rx="1" fill="#7a4828" opacity="0.45"/>
        <rect x="185" y="54" width="14"  height="22"  rx="1" fill="#7a4828" opacity="0.45"/>
        <rect x="125" y="92" width="14"  height="22"  rx="1" fill="#7a4828" opacity="0.45"/>
        <rect x="185" y="90" width="14"  height="22"  rx="1" fill="#7a4828" opacity="0.45"/>
        <rect x="125" y="130" width="14" height="22"  rx="1" fill="#7a4828" opacity="0.5"/>
        <rect x="185" y="128" width="14" height="22"  rx="1" fill="#7a4828" opacity="0.5"/>
        <path d="M148 200 L148 168 Q158 160 168 168 L168 200 Z" fill="#7a4828" opacity="0.8"/>

        {/* 3 — dusty rose #c4a8a0 */}
        <rect x="210" y="18" width="120" height="182" fill="#c4a8a0"/>
        <rect x="210" y="13" width="120" height="7"   fill="#b49890"/>
        <rect x="210" y="0"  width="120" height="15"  fill="#a88878"/>
        <rect x="50"  y="0"  width="8"   height="18"  fill="#987868" transform="translate(172,0)"/>
        <rect x="225" y="26" width="15"  height="22"  rx="1" fill="#887068" opacity="0.5"/>
        <rect x="298" y="24" width="15"  height="22"  rx="1" fill="#887068" opacity="0.5"/>
        <rect x="225" y="62" width="15"  height="22"  rx="1" fill="#887068" opacity="0.45"/>
        <rect x="298" y="60" width="15"  height="22"  rx="1" fill="#887068" opacity="0.45"/>
        <rect x="225" y="98" width="15"  height="22"  rx="1" fill="#887068" opacity="0.45"/>
        <rect x="298" y="96" width="15"  height="22"  rx="1" fill="#887068" opacity="0.45"/>
        <rect x="225" y="135" width="15" height="22"  rx="1" fill="#887068" opacity="0.5"/>
        <rect x="298" y="133" width="15" height="22"  rx="1" fill="#887068" opacity="0.5"/>
        <path d="M252 200 L252 170 Q262 162 272 170 L272 200 Z" fill="#887068" opacity="0.8"/>
        {/* balcony */}
        <rect x="285" y="96"  width="25" height="4"  fill="#a89888"/>
        <rect x="285" y="100" width="2"  height="10" fill="#a89888"/>
        <rect x="308" y="100" width="2"  height="10" fill="#a89888"/>

        {/* 4 — sage #8a9870 */}
        <rect x="330" y="8"  width="105" height="192" fill="#8a9870"/>
        <rect x="330" y="3"  width="105" height="7"   fill="#7a8860"/>
        <rect x="330" y="0"  width="105" height="5"   fill="#6a7850"/>
        <rect x="345" y="16" width="14"  height="22"  rx="1" fill="#5a6848" opacity="0.55"/>
        <rect x="408" y="14" width="14"  height="22"  rx="1" fill="#5a6848" opacity="0.55"/>
        <rect x="345" y="52" width="14"  height="22"  rx="1" fill="#5a6848" opacity="0.5"/>
        <rect x="408" y="50" width="14"  height="22"  rx="1" fill="#5a6848" opacity="0.5"/>
        <rect x="345" y="90" width="14"  height="22"  rx="1" fill="#5a6848" opacity="0.5"/>
        <rect x="408" y="88" width="14"  height="22"  rx="1" fill="#5a6848" opacity="0.5"/>
        <rect x="345" y="128" width="14" height="22"  rx="1" fill="#5a6848" opacity="0.55"/>
        <rect x="408" y="126" width="14" height="22"  rx="1" fill="#5a6848" opacity="0.55"/>
        <path d="M358 200 L358 168 Q368 160 378 168 L378 200 Z" fill="#5a6848" opacity="0.8"/>

        {/* 5 — cream stone #d8c8a8 */}
        <rect x="435" y="16" width="130" height="184" fill="#d8c8a8"/>
        <rect x="435" y="11" width="130" height="7"   fill="#c8b898"/>
        <rect x="435" y="0"  width="130" height="13"  fill="#b8a888"/>
        <rect x="452" y="24" width="15"  height="22"  rx="1" fill="#988870" opacity="0.5"/>
        <rect x="528" y="22" width="15"  height="22"  rx="1" fill="#988870" opacity="0.5"/>
        <rect x="452" y="60" width="15"  height="22"  rx="1" fill="#988870" opacity="0.45"/>
        <rect x="528" y="58" width="15"  height="22"  rx="1" fill="#988870" opacity="0.45"/>
        <rect x="452" y="96" width="15"  height="22"  rx="1" fill="#988870" opacity="0.45"/>
        <rect x="528" y="94" width="15"  height="22"  rx="1" fill="#988870" opacity="0.45"/>
        <rect x="452" y="133" width="15" height="22"  rx="1" fill="#988870" opacity="0.5"/>
        <rect x="528" y="131" width="15" height="22"  rx="1" fill="#988870" opacity="0.5"/>
        <path d="M472 200 L472 168 Q484 159 496 168 L496 200 Z" fill="#988870" opacity="0.8"/>
        {/* arched shop window */}
        <path d="M505 200 L505 162 Q516 152 527 162 L527 200 Z" fill="#988870" opacity="0.6"/>
        {/* balcony */}
        <rect x="514" y="58" width="28" height="4"  fill="#c8b888"/>
        <rect x="514" y="62" width="2"  height="12" fill="#c8b888"/>
        <rect x="540" y="62" width="2"  height="12" fill="#c8b888"/>

        {/* 6 — burnt orange #c89068 */}
        <rect x="565" y="10" width="108" height="190" fill="#c89068"/>
        <rect x="565" y="5"  width="108" height="7"   fill="#b88058"/>
        <rect x="565" y="0"  width="108" height="7"   fill="#a87048"/>
        <rect x="45"  y="0"  width="10"  height="10"  fill="#987040" transform="translate(528,0)"/>
        <rect x="580" y="18" width="14"  height="22"  rx="1" fill="#806040" opacity="0.5"/>
        <rect x="646" y="16" width="14"  height="22"  rx="1" fill="#806040" opacity="0.5"/>
        <rect x="580" y="54" width="14"  height="22"  rx="1" fill="#806040" opacity="0.45"/>
        <rect x="646" y="52" width="14"  height="22"  rx="1" fill="#806040" opacity="0.45"/>
        <rect x="580" y="92" width="14"  height="22"  rx="1" fill="#806040" opacity="0.45"/>
        <rect x="646" y="90" width="14"  height="22"  rx="1" fill="#806040" opacity="0.45"/>
        <rect x="580" y="130" width="14" height="22"  rx="1" fill="#806040" opacity="0.5"/>
        <rect x="646" y="128" width="14" height="22"  rx="1" fill="#806040" opacity="0.5"/>
        <path d="M596 200 L596 168 Q606 160 616 168 L616 200 Z" fill="#806040" opacity="0.8"/>

        {/* 7 — pale yellow #d8c880 */}
        <rect x="673" y="5"  width="118" height="195" fill="#d8c880"/>
        <rect x="673" y="0"  width="118" height="7"   fill="#c8b870"/>
        <rect x="690" y="12" width="15"  height="22"  rx="1" fill="#a09050" opacity="0.5"/>
        <rect x="760" y="10" width="15"  height="22"  rx="1" fill="#a09050" opacity="0.5"/>
        <rect x="690" y="48" width="15"  height="22"  rx="1" fill="#a09050" opacity="0.45"/>
        <rect x="760" y="46" width="15"  height="22"  rx="1" fill="#a09050" opacity="0.45"/>
        <rect x="690" y="86" width="15"  height="22"  rx="1" fill="#a09050" opacity="0.45"/>
        <rect x="760" y="84" width="15"  height="22"  rx="1" fill="#a09050" opacity="0.45"/>
        <rect x="690" y="124" width="15" height="22"  rx="1" fill="#a09050" opacity="0.5"/>
        <rect x="760" y="122" width="15" height="22"  rx="1" fill="#a09050" opacity="0.5"/>
        <path d="M706 200 L706 168 Q716 160 726 168 L726 200 Z" fill="#a09050" opacity="0.8"/>
        {/* balcony */}
        <rect x="748" y="86" width="26" height="4"  fill="#c8b870"/>
        <rect x="748" y="90" width="2"  height="10" fill="#c8b870"/>
        <rect x="772" y="90" width="2"  height="10" fill="#c8b870"/>

        {/* 8 — mauve #c4a8a8 */}
        <rect x="791" y="14" width="109" height="186" fill="#c4a8a8"/>
        <rect x="791" y="8"  width="109" height="8"   fill="#b49898"/>
        <rect x="791" y="0"  width="109" height="10"  fill="#a48888"/>
        <rect x="808" y="22" width="14"  height="22"  rx="1" fill="#847070" opacity="0.5"/>
        <rect x="870" y="20" width="14"  height="22"  rx="1" fill="#847070" opacity="0.5"/>
        <rect x="808" y="58" width="14"  height="22"  rx="1" fill="#847070" opacity="0.45"/>
        <rect x="870" y="56" width="14"  height="22"  rx="1" fill="#847070" opacity="0.45"/>
        <rect x="808" y="96" width="14"  height="22"  rx="1" fill="#847070" opacity="0.45"/>
        <rect x="870" y="94" width="14"  height="22"  rx="1" fill="#847070" opacity="0.45"/>
        <rect x="808" y="134" width="14" height="22"  rx="1" fill="#847070" opacity="0.5"/>
        <rect x="870" y="132" width="14" height="22"  rx="1" fill="#847070" opacity="0.5"/>
        <path d="M822 200 L822 168 Q832 160 842 168 L842 200 Z" fill="#847070" opacity="0.8"/>

        {/* ── Building separation lines (subtle) ── */}
        {[112, 210, 330, 435, 565, 673, 791].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#00000012" strokeWidth="2"/>
        ))}

        {/* ── Ground — cobblestone strip ── */}
        <rect x="0" y="188" width="900" height="12" fill="#c4b8a0"/>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => (
          <rect key={i} x={i*65} y="189" width="58" height="5" rx="1"
                fill="#b8ac98" opacity="0.5"/>
        ))}

        {/* ══ Laundry lines spanning full width ══ */}

        {/* Line 1 — y=52 */}
        <line x1="0" y1="52" x2="900" y2="52" stroke="#5a4830" strokeWidth="1" opacity="0.7"/>

        {/* Line 2 — y=88 */}
        <line x1="0" y1="88" x2="900" y2="88" stroke="#5a4830" strokeWidth="1" opacity="0.65"/>

        {/* Line 3 — y=122 */}
        <line x1="0" y1="122" x2="900" y2="122" stroke="#5a4830" strokeWidth="0.8" opacity="0.5"/>

        {/* ══ Laundry items — Line 1 (y=52) ══ */}
        {/* White shirt */}
        <g transform="translate(28,52)" className="sw-a">
          <path d="M-9 0 L-11 4 L-11 18 L11 18 L11 4 L9 0 Z" fill="#f0ece3"/>
          <path d="M-11 4 L-16 4 L-16 10 L-11 10 Z M11 4 L16 4 L16 10 L11 10 Z" fill="#f0ece3"/>
          <rect x="-11" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="7"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Blue sheet */}
        <g transform="translate(105,52)" className="sw-s">
          <rect x="-18" y="0" width="36" height="26" fill="#7a98b8" opacity="0.85"/>
          <rect x="-18" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="14"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Red pants */}
        <g transform="translate(185,52)" className="sw-b" style={{animationDelay:"-1.2s"}}>
          <path d="M-8 0 L-10 22 L-2 20 L0 22 L2 20 L10 22 L8 0 Z" fill="#a83028"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Yellow towel */}
        <g transform="translate(255,52)" className="sw-c" style={{animationDelay:"-2.1s"}}>
          <rect x="-10" y="0" width="20" height="22" fill="#c8b060" opacity="0.85"/>
          <rect x="-10" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="6"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Green shirt */}
        <g transform="translate(340,52)" className="sw-a" style={{animationDelay:"-3s"}}>
          <path d="M-9 0 L-11 4 L-11 18 L11 18 L11 4 L9 0 Z" fill="#6a8858"/>
          <path d="M-11 4 L-16 4 L-16 10 L-11 10 Z M11 4 L16 4 L16 10 L11 10 Z" fill="#6a8858"/>
          <rect x="-11" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="7"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Cream sheet */}
        <g transform="translate(430,52)" className="sw-s" style={{animationDelay:"-2.5s"}}>
          <rect x="-20" y="0" width="40" height="28" fill="#e8dcc8" opacity="0.85"/>
          <rect x="-20" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="16"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Blue pants */}
        <g transform="translate(510,52)" className="sw-d" style={{animationDelay:"-0.8s"}}>
          <path d="M-8 0 L-10 22 L-2 20 L0 22 L2 20 L10 22 L8 0 Z" fill="#486888"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* White undershirt */}
        <g transform="translate(580,52)" className="sw-b" style={{animationDelay:"-4s"}}>
          <rect x="-7" y="0" width="14" height="16" fill="#ede8df"/>
          <rect x="-7" y="0" width="3" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="4"  y="0" width="3" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Orange towel */}
        <g transform="translate(655,52)" className="sw-c" style={{animationDelay:"-1.8s"}}>
          <rect x="-10" y="0" width="20" height="22" fill="#c08840" opacity="0.8"/>
          <rect x="-10" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="6"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Dark shirt */}
        <g transform="translate(735,52)" className="sw-a" style={{animationDelay:"-0.5s"}}>
          <path d="M-9 0 L-11 4 L-11 18 L11 18 L11 4 L9 0 Z" fill="#4a3828"/>
          <path d="M-11 4 L-16 4 L-16 10 L-11 10 Z M11 4 L16 4 L16 10 L11 10 Z" fill="#4a3828"/>
          <rect x="-11" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="7"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        {/* Pink sheet */}
        <g transform="translate(820,52)" className="sw-s" style={{animationDelay:"-3.5s"}}>
          <rect x="-16" y="0" width="32" height="24" fill="#c8a8a0" opacity="0.8"/>
          <rect x="-16" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="12"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>

        {/* ══ Laundry items — Line 2 (y=88) ══ */}
        <g transform="translate(58,88)" className="sw-b" style={{animationDelay:"-0.5s"}}>
          <path d="M-8 0 L-10 20 L-2 18 L0 20 L2 18 L10 20 L8 0 Z" fill="#c09050"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(145,88)" className="sw-c" style={{animationDelay:"-1.5s"}}>
          <rect x="-9" y="0" width="18" height="20" fill="#a8c4a0" opacity="0.85"/>
          <rect x="-9" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="5"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(218,88)" className="sw-a" style={{animationDelay:"-2.8s"}}>
          <path d="M-9 0 L-11 4 L-11 18 L11 18 L11 4 L9 0 Z" fill="#e8dcc8"/>
          <path d="M-11 4 L-16 4 L-16 10 L-11 10 Z M11 4 L16 4 L16 10 L11 10 Z" fill="#e8dcc8"/>
          <rect x="-11" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="7"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(310,88)" className="sw-s" style={{animationDelay:"-0.9s"}}>
          <rect x="-16" y="0" width="32" height="24" fill="#7888a8" opacity="0.8"/>
          <rect x="-16" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="12"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(398,88)" className="sw-d" style={{animationDelay:"-3.2s"}}>
          <path d="M-8 0 L-10 20 L-2 18 L0 20 L2 18 L10 20 L8 0 Z" fill="#888868"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(475,88)" className="sw-a" style={{animationDelay:"-4.2s"}}>
          <rect x="-7" y="0" width="14" height="16" fill="#f0ece3"/>
          <rect x="-7" y="0" width="3" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="4"  y="0" width="3" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(548,88)" className="sw-b" style={{animationDelay:"-1.8s"}}>
          <rect x="-10" y="0" width="20" height="22" fill="#b05838" opacity="0.85"/>
          <rect x="-10" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="6"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(628,88)" className="sw-c" style={{animationDelay:"-2.5s"}}>
          <path d="M-9 0 L-11 4 L-11 18 L11 18 L11 4 L9 0 Z" fill="#688878"/>
          <path d="M-11 4 L-16 4 L-16 10 L-11 10 Z M11 4 L16 4 L16 10 L11 10 Z" fill="#688878"/>
          <rect x="-11" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="7"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(718,88)" className="sw-s" style={{animationDelay:"-3.8s"}}>
          <rect x="-14" y="0" width="28" height="22" fill="#c8c098" opacity="0.8"/>
          <rect x="-14" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="10"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(800,88)" className="sw-d" style={{animationDelay:"-0.3s"}}>
          <path d="M-8 0 L-10 20 L-2 18 L0 20 L2 18 L10 20 L8 0 Z" fill="#5868a0"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>
        <g transform="translate(872,88)" className="sw-a" style={{animationDelay:"-2s"}}>
          <rect x="-8" y="0" width="16" height="20" fill="#f0ece3" opacity="0.9"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.5"/>
        </g>

        {/* ══ Laundry items — Line 3 (y=122, sparser) ══ */}
        <g transform="translate(80,122)" className="sw-c" style={{animationDelay:"-1s"}}>
          <rect x="-10" y="0" width="20" height="18" fill="#d8c8b0" opacity="0.75"/>
          <rect x="-10" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
          <rect x="6"   y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
        </g>
        <g transform="translate(220,122)" className="sw-b" style={{animationDelay:"-2.3s"}}>
          <path d="M-7 0 L-9 18 L-2 16 L0 18 L2 16 L9 18 L7 0 Z" fill="#a87848"/>
          <rect x="-7" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
          <rect x="3"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
        </g>
        <g transform="translate(390,122)" className="sw-a" style={{animationDelay:"-3.5s"}}>
          <rect x="-8" y="0" width="16" height="18" fill="#90a888" opacity="0.8"/>
          <rect x="-8" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
          <rect x="4"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
        </g>
        <g transform="translate(560,122)" className="sw-s" style={{animationDelay:"-4.5s"}}>
          <rect x="-14" y="0" width="28" height="20" fill="#f0ece3" opacity="0.75"/>
          <rect x="-14" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
          <rect x="10"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
        </g>
        <g transform="translate(720,122)" className="sw-d" style={{animationDelay:"-1.7s"}}>
          <path d="M-7 0 L-9 18 L-2 16 L0 18 L2 16 L9 18 L7 0 Z" fill="#486080"/>
          <rect x="-7" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
          <rect x="3"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
        </g>
        <g transform="translate(858,122)" className="sw-c" style={{animationDelay:"-3s"}}>
          <rect x="-9" y="0" width="18" height="18" fill="#c8a888" opacity="0.75"/>
          <rect x="-9" y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
          <rect x="5"  y="0" width="4" height="1.5" fill="#4a3820" opacity="0.4"/>
        </g>

        {/* ── Label ── */}
        <text x="450" y="196" textAnchor="middle" fontSize="7" fill="#8a7858"
              fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.14em" opacity="0.7">
          CARUGGI · CENTRO STORICO
        </text>
      </svg>
    </div>
  );
}
