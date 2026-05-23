"use client";

import { useState, useEffect } from "react";

const LANGS = [
  { code: "en", flag: "🇬🇧" },
  { code: "it", flag: "🇮🇹" },
  { code: "ge", flag: null },
];

export const t: Record<string, Record<string, string>> = {
  en: {
    tagline: "Carignano, Genova",
    heroTitle: "Casa Nina",
    heroSub: "A spacious, welcoming home in the heart of Genova for families, couples and travellers of every kind.",
    bookNow: "Book Now",
    exploreApt: "Explore the apartment",
    navAbout: "About",
    navGallery: "Gallery",
    navAmenities: "Amenities",
    navLocation: "Location",
    aboutLabel: "L'Appartamento",
    aboutTitle: "A real home in the heart of Genoa",
    aboutBody: "Casa Nina is a spacious, fully renovated apartment in the quiet Carignano quarter: perfect for families, couples, solo travellers, and anyone who wants to experience Genoa like a local. Original arched doorways, warm oak floors, a fully equipped kitchen, and everything you need to settle in and feel at home. The old port, restaurants, and the city centre are all within easy walking distance.",
    genovaLabel: "La Superba",
    genovaTitle: "Carignano, Genova",
    genovaBody: "Perched on Genova's most elegant hill, Carignano is a quiet residential quarter with views of the port. Walk to Corso Italia, Boccadasse, the caruggi and Porto Antico. All within minutes.",
  },
  it: {
    tagline: "Carignano, Genova",
    heroTitle: "Casa Nina",
    heroSub: "Una casa spaziosa e accogliente nel cuore di Genova, per famiglie, coppie e viaggiatori di ogni tipo.",
    bookNow: "Prenota ora",
    exploreApt: "Scopri l'appartamento",
    navAbout: "L'Appartamento",
    navGallery: "Galleria",
    navAmenities: "Servizi",
    navLocation: "Posizione",
    aboutLabel: "L'Appartamento",
    aboutTitle: "Una casa vera nel cuore di Genova",
    aboutBody: "Casa Nina e' un appartamento spazioso e completamente ristrutturato nel tranquillo quartiere di Carignano: perfetto per famiglie, coppie, viaggiatori solitari e chiunque voglia vivere Genova come un locale. Portali ad arco originali, caldi pavimenti in rovere, cucina completamente attrezzata e tutto il necessario per sentirsi a casa. Il porto antico, ristoranti e il centro sono tutti a pochi passi.",
    genovaLabel: "La Superba",
    genovaTitle: "Carignano, Genova",
    genovaBody: "Arroccato sulla collina piu' elegante di Genova, Carignano e' un tranquillo quartiere residenziale con vista sul porto. A piedi fino a Corso Italia, Boccadasse, i caruggi e il Porto Antico. Tutto a pochi minuti.",
  },
  ge: {
    tagline: "Carignan, Zena",
    heroTitle: "Ca' Nina",
    heroSub: "Unna ca' granda e accugeinte into cheu de Zena, pe famigge, copie e viaxatui de tùtti i tipi.",
    bookNow: "Prenota sciù",
    exploreApt: "Scovri l'apartamento",
    navAbout: "O Apartamento",
    navGallery: "Galeria",
    navAmenities: "Servicci",
    navLocation: "Dove",
    aboutLabel: "L'Apartamento",
    aboutTitle: "Unna ca' vera into cheu de Zena",
    aboutBody: "Ca' Nina a l'e' un apartamento grando e tutto rinfrescou into quarto de Carignan: perfeto pe famigge, copie, viaxatui da soli e pe chi o veu viive Zena comme un zeneize. Pòrteghi anciên, pavimenti de rovere, cuxinna coupreta de tutto e quello che ghe veu pe stâ ben. O Porto Vêgio, i ristoranti e o centro son tutti a du passi.",
    genovaLabel: "A Superba",
    genovaTitle: "Carignan, Zena",
    genovaBody: "Into quartê de Carignan, into cheu de Zena, a-e case son quete e i vicoli an vista sü porto. A pê fin a Corso Italia, Boccadasso, i carruggi e o Porto Vêgio. Tutto a du passi.",
  },
};

export type LangCode = keyof typeof t;

// Global pub/sub
let _lang: LangCode = "en";
const _listeners = new Set<(l: LangCode) => void>();

export function setGlobalLang(l: LangCode) {
  _lang = l;
  _listeners.forEach((fn) => fn(l));
}

export function useLang(): [LangCode, (l: LangCode) => void] {
  const [lang, setLang] = useState<LangCode>(_lang);

  useEffect(() => {
    const handler = (l: LangCode) => setLang(l);
    _listeners.add(handler);
    return () => { _listeners.delete(handler); };
  }, []);

  return [lang, setGlobalLang];
}

function GenovaFlag({ active }: { active: boolean }) {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", borderRadius: 2, outline: active ? "2px solid white" : "none" }}>
      <rect width="24" height="16" fill="white" />
      <rect x="10" y="0" width="4" height="16" fill="#C8102E" />
      <rect x="0" y="6" width="24" height="4" fill="#C8102E" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const [lang, switchLang] = useLang();

  return (
    <div className="flex items-center gap-1.5">
      {LANGS.map(({ code, flag }) => (
        <button
          key={code}
          onClick={() => switchLang(code as LangCode)}
          className={`flex items-center justify-center w-7 h-5 rounded transition-all ${
            lang === code ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
          }`}
          title={code.toUpperCase()}
        >
          {code === "ge" ? (
            <GenovaFlag active={lang === "ge"} />
          ) : (
            <span className="text-base leading-none">{flag}</span>
          )}
        </button>
      ))}
    </div>
  );
}
