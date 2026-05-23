"use client";

import { useLang, t } from "@/components/LanguageSwitcher";

export default function GenovaIntro() {
  const [lang] = useLang();
  const tx = t[lang];

  return (
    <>
      <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">{tx.genovaLabel}</p>
      <h2 className="font-serif text-3xl md:text-4xl mb-4">{tx.genovaTitle}</h2>
      <p className="text-muted leading-relaxed mb-6">{tx.genovaBody}</p>
    </>
  );
}
