"use client";

import { useLang, t } from "@/components/LanguageSwitcher";
import { ArrowDown } from "lucide-react";

export default function HeroContent() {
  const [lang] = useLang();
  const tx = t[lang];

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 pb-16 md:pb-24">
        <p className="text-white/65 text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
          {tx.tagline}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
          {tx.heroTitle}
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-md leading-relaxed mb-8">
          {tx.heroSub}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-foreground rounded-xl font-medium text-sm hover:bg-white/90 transition-colors"
          >
            {tx.bookNow} &rarr;
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white rounded-xl font-medium text-sm hover:bg-white/20 border border-white/20 transition-colors backdrop-blur-sm"
          >
            {tx.exploreApt}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </>
  );
}
