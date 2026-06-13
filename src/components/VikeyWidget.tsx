"use client";

import { useSearchParams } from "next/navigation";
import { useLang } from "@/components/LanguageSwitcher";
import { Tag } from "lucide-react";

const LANG_MAP: Record<string, string> = { en: "en", it: "it", ge: "it" };
const CLIENT_KEY = "niwVv6ZrwEZ0QeBOqqDJpZnNJwwHXUY_x384GCmFqt4";

const PROMO_LABELS: Record<string, string> = {
  NINA10: "10% off",
  NINA15: "15% off",
  NINA20: "20% off",
};

export default function VikeyWidget() {
  const [lang] = useLang();
  const searchParams = useSearchParams();
  const promo = searchParams.get("promo")?.toUpperCase().trim();
  const promoLabel = promo ? PROMO_LABELS[promo] : null;
  const vikeyLang = LANG_MAP[lang] ?? "en";

  return (
    <div className="space-y-4">
      {/* Promo banner — shown when arriving via QR code (?promo=NINA10) */}
      {promo && promoLabel && (
        <div className="flex items-center gap-3 bg-accent/10 border border-accent/25 rounded-xl px-4 py-3">
          <Tag className="w-4 h-4 text-accent shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-accent">{promo}</span>
            <span className="text-muted"> — {promoLabel} · enter this code in the discount field below</span>
          </div>
        </div>
      )}

      {/* Vikey embedded booking engine */}
      <div
        className="vikey-booking-engine-widget rounded-2xl overflow-hidden"
        data-client-key={CLIENT_KEY}
        data-vikey-language={vikeyLang}
        data-vikey-widget-width="full"
      />
    </div>
  );
}
