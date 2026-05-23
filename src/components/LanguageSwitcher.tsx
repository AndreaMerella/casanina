"use client";

import { useState } from "react";

const LANGS = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "it", flag: "🇮🇹", label: "IT" },
  { code: "ge", flag: "GE", label: "ZE" },
];

// Key phrases per language
export const t: Record<string, Record<string, string>> = {
  en: {
    tagline: "Carignano, Genova",
    heroTitle: "Casa Nina",
    heroSub: "A spacious, welcoming home in the heart of Genova — for families, couples and travellers of every kind.",
    aboutLabel: "The Apartment",
    aboutTitle: "A real home in the heart of Genoa",
    aboutBody: "Casa Nina is a spacious, fully renovated apartment in the quiet Carignano quarter: perfect for families, couples, solo travellers, and anyone who wants to experience Genoa like a local. The old port, restaurants, and the city centre are all within easy walking distance.",
    bookNow: "Book Now",
    exploreApt: "Explore the apartment",
  },
  it: {
    tagline: "Carignano, Genova",
    heroTitle: "Casa Nina",
    heroSub: "Una casa spaziosa e accogliente nel cuore di Genova, per famiglie, coppie e viaggiatori di ogni tipo.",
    aboutLabel: "L'Appartamento",
    aboutTitle: "Una vera casa nel cuore di Genova",
    aboutBody: "Casa Nina è un appartamento spazioso e completamente ristrutturato nel tranquillo quartiere di Carignano: perfetto per famiglie, coppie, viaggiatori solitari e chiunque voglia vivere Genova come un locale. Il porto antico, i ristoranti e il centro città sono a pochi passi.",
    bookNow: "Prenota ora",
    exploreApt: "Scopri l'appartamento",
  },
  ge: {
    tagline: "Carignan, Zena",
    heroTitle: "Ca' Nina",
    heroSub: "Unna ca' granda e accugeinte into cheu de Zena — pe famigge, copie e viaxatui de tùtti i tipi.",
    aboutLabel: "L'Apartamento",
    aboutTitle: "Unna vera ca' into cheu de Zena",
    aboutBody: "Ca' Nina a l'è un apartamento spaxozo into quaetê de Carignan: perfeto pe famigge, copie e viaxatui. O porto antico, i ristoranti e o centro a son tùtti a du passi. Vegnî a Zena comme foesse de ca'!",
    bookNow: "Prenota sciù",
    exploreApt: "Scovri l'apartamento",
  },
};

export type LangCode = keyof typeof t;

// Global lang state via simple event
let _lang: LangCode = "en";
const listeners: Array<(l: LangCode) => void> = [];
export function getLang() { return _lang; }
export function setLang(l: LangCode) {
  _lang = l;
  listeners.forEach((fn) => fn(l));
}
export function useLang(): [LangCode, (l: LangCode) => void] {
  const [lang, setLocalLang] = useState<LangCode>(_lang);
  // Subscribe on first render via closure is fine for this lightweight use
  return [lang, (l: LangCode) => { setLang(l); setLocalLang(l); }];
}

export default function LanguageSwitcher() {
  const [lang, switchLang] = useLang();
  return (
    <div className="flex items-center gap-1">
      {LANGS.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => switchLang(code as LangCode)}
          className={`transition-colors rounded-lg overflow-hidden border-2 ${
            lang === code ? "border-white" : "border-transparent opacity-60 hover:opacity-100"
          }`}
          title={label}
        >
          {code === "ge" ? (
            // Genovese St George's Cross
            <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="16" fill="white"/>
              <rect x="10" y="0" width="4" height="16" fill="#c8102e"/>
              <rect x="0" y="6" width="24" height="4" fill="#c8102e"/>
            </svg>
          ) : (
            <span className="text-base px-1">{flag}</span>
          )}
        </button>
      ))}
    </div>
  );
}
