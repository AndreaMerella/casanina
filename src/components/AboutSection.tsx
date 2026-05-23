"use client";

import { useLang, t } from "@/components/LanguageSwitcher";

export default function AboutSection() {
  const [lang] = useLang();
  const tx = t[lang];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
        {tx.aboutLabel}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl leading-snug mb-6">
        {tx.aboutTitle}
      </h2>
      <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        {tx.aboutBody}
      </p>
    </div>
  );
}
