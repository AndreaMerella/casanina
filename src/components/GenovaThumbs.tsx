/**
 * GenovaThumbs — small original illustrations for the Location cards.
 * Simplified, on-brand vignettes of real Genova landmarks. No photos,
 * no external dependencies — they always render.
 */

const svgProps = {
  className: "w-full h-full block",
  preserveAspectRatio: "xMidYMid slice" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

function Boccadasse() {
  const houses = [
    { x: 58, y: 34, w: 12, h: 30, c: "#e0b85a" },
    { x: 71, y: 28, w: 12, h: 36, c: "#d98a7a" },
    { x: 84, y: 32, w: 12, h: 32, c: "#b8c490" },
    { x: 97, y: 26, w: 13, h: 38, c: "#cf7a5a" },
    { x: 64, y: 48, w: 12, h: 22, c: "#e8ddc4" },
    { x: 77, y: 50, w: 12, h: 22, c: "#7f9fae" },
    { x: 90, y: 50, w: 13, h: 22, c: "#e0b85a" },
  ];
  return (
    <svg viewBox="0 0 120 90" {...svgProps}>
      <rect width="120" height="90" fill="#cfe3ea" />
      <rect y="40" width="120" height="50" fill="#9cbcc8" />
      <rect y="40" width="120" height="4" fill="#b2cdd6" />
      <path d="M50 36 Q82 20 120 24 L120 40 L50 40 Z" fill="#9eb078" />
      {houses.map((h, i) => (
        <g key={i}>
          <rect x={h.x} y={h.y} width={h.w} height={h.h} fill={h.c} />
          <rect x={h.x + 2} y={h.y + 4} width="3" height="4" fill="#00000030" />
          <rect x={h.x + 7} y={h.y + 4} width="3" height="4" fill="#00000026" />
        </g>
      ))}
      <path d="M14 60 q-2 5 4 7 h14 q6 -2 4 -7 z" fill="#3a5878" />
      <line x1="22" y1="60" x2="22" y2="44" stroke="#2a1810" strokeWidth="1.2" />
      <path d="M22 44 l9 12 h-9 z" fill="#efe6cf" />
    </svg>
  );
}

function PalazzoDucale() {
  return (
    <svg viewBox="0 0 120 90" {...svgProps}>
      <rect width="120" height="90" fill="#ece2d2" />
      <rect x="10" y="40" width="100" height="50" fill="#e4d6bf" />
      <rect x="10" y="36" width="100" height="5" fill="#d2c0a4" />
      <rect x="50" y="10" width="20" height="30" fill="#ddcbb0" />
      <rect x="49" y="7" width="22" height="4" fill="#c2a888" />
      <circle cx="60" cy="22" r="5" fill="#b06048" />
      <circle cx="60" cy="22" r="5" fill="none" stroke="#f0ece0" strokeWidth="1" />
      {[16, 34, 52, 70, 88].map((x, i) => (
        <path
          key={i}
          d={`M${x} 90 L${x} 70 Q${x + 7} 62 ${x + 14} 70 L${x + 14} 90 Z`}
          fill="#c8b393"
        />
      ))}
      {[18, 38, 58, 78, 98].map((x, i) => (
        <rect key={i} x={x} y="46" width="8" height="12" fill="#b9a585" />
      ))}
    </svg>
  );
}

function Caruggi() {
  return (
    <svg viewBox="0 0 120 90" {...svgProps}>
      <rect width="120" height="90" fill="#efe4cf" />
      <rect x="50" y="0" width="20" height="90" fill="#dfeef0" />
      <path d="M0 0 H54 L50 90 H0 Z" fill="#c06030" />
      <path d="M120 0 H66 L70 90 H120 Z" fill="#c89838" />
      {[14, 30, 46, 62].map((y, i) => (
        <g key={i}>
          <rect x="12" y={y} width="10" height="12" fill="#2e2016" />
          <rect x="30" y={y} width="10" height="12" fill="#2e2016" />
        </g>
      ))}
      {[16, 32, 48, 64].map((y, i) => (
        <g key={i}>
          <rect x="86" y={y} width="10" height="12" fill="#2e2016" />
          <rect x="102" y={y} width="10" height="12" fill="#2e2016" />
        </g>
      ))}
      <line x1="48" y1="26" x2="72" y2="30" stroke="#5a4030" strokeWidth="1" />
      <rect x="52" y="26" width="5" height="8" fill="#eee" />
      <rect x="60" y="27" width="5" height="9" fill="#5a80a0" />
      <rect x="66" y="28" width="4" height="6" fill="#c87858" />
    </svg>
  );
}

function PortoAntico() {
  return (
    <svg viewBox="0 0 120 90" {...svgProps}>
      <rect width="120" height="90" fill="#dbe8e2" />
      <rect y="56" width="120" height="34" fill="#7a9eae" />
      <rect y="56" width="120" height="4" fill="#93b2bd" />
      <rect x="0" y="52" width="70" height="6" fill="#b0a184" />
      <rect x="92" y="14" width="10" height="44" fill="#f0ece0" />
      <rect x="91" y="34" width="12" height="4" fill="#d8d0c0" />
      <rect x="93" y="8" width="8" height="8" fill="#cdbfae" />
      <rect x="94" y="9" width="6" height="4" fill="#e0a830" />
      <path d="M18 52 q-2 6 4 8 h16 q6 -2 4 -8 z" fill="#b83820" />
      <line x1="28" y1="52" x2="28" y2="34" stroke="#2a1810" strokeWidth="1.2" />
      <path d="M28 34 l10 14 h-10 z" fill="#efe6cf" />
      <path d="M46 54 q-1 5 3 6 h12 q5 -1 3 -6 z" fill="#3a5878" />
      <line x1="54" y1="54" x2="54" y2="40" stroke="#2a1810" strokeWidth="1" />
      <path d="M54 40 l8 11 h-8 z" fill="#d6e2e2" />
    </svg>
  );
}

const THUMBS: Record<string, () => React.ReactElement> = {
  boccadasse: Boccadasse,
  palazzo: PalazzoDucale,
  caruggi: Caruggi,
  porto: PortoAntico,
};

export default function GenovaThumb({ name }: { name: keyof typeof THUMBS | string }) {
  const Cmp = THUMBS[name] ?? Boccadasse;
  return <Cmp />;
}
