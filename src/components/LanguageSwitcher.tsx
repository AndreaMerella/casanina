"use client";

import { useState, useEffect } from "react";

const LANGS = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "ge", label: "ZE", flag: null },
];

export const t: Record<string, Record<string, string>> = {
  en: {
    tagline: "Carignano, Genova",
    heroTitle: "Casa Nina",
    heroSub: "A spacious, welcoming home in the heart of Genova — for families, couples and travellers of every kind.",
    bookNow: "Book Now",
    exploreApt: "Explore the apartment",
  },
  it: {
    tagline: "Carignano, Genova",
    heroTitle: "Casa Nina",
    heroSub: "Una casa spaziosa e accogliente nel cuore di Genova, per famiglie, coppie e viaggiatori di ogni tipo.",
    bookNow: "Prenota ora",
    exploreApt: "Scopri l'appartamento",
  },
  ge: {
    tagline: "Carignan, Zena",
    heroTitle: "Ca' Nina",
    heroSub: "Unna ca' granda e accugeinte into cheu de Zena, pe famigge, copie e viaxatui de tùtti i tipi.",
    bookNow: "Prenota sciù",
    exploreApt: "Scovri l'apartamento",
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
