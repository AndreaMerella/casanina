"use client";

import { useState } from "react";
import { Lock, CalendarCheck, MessageCircle, BadgeCheck, Tag, X } from "lucide-react";

const VIKEY_URL = "https://booking.vikey.it/?local_key=niwVv6ZrwEZ0QeBOqqDJpZnNJwwHXUY_x384GCmFqt4";

const PROMO_CODES: Record<string, { pct: number; label: string }> = {
  NINA10: { pct: 10, label: "10% off — returning guest" },
  NINA15: { pct: 15, label: "15% off — special offer" },
  NINA20: { pct: 20, label: "20% off — extended stay" },
};

interface Props { nightlyRate: number; }

function openBooking() {
  const w = 720, h = 820;
  const left = Math.round((window.screen.width - w) / 2);
  const top  = Math.round((window.screen.height - h) / 6);
  const popup = window.open(VIKEY_URL, "CasaNinaBooking",
    `width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no`);
  if (!popup) window.open(VIKEY_URL, "_blank", "noopener,noreferrer");
}

export default function BookingModal({ nightlyRate }: Props) {
  const [code, setCode]         = useState("");
  const [applied, setApplied]   = useState<typeof PROMO_CODES[string] | null>(null);
  const [error, setError]       = useState(false);

  function applyCode() {
    const promo = PROMO_CODES[code.toUpperCase().trim()];
    if (promo) { setApplied(promo); setError(false); }
    else       { setApplied(null); setError(true); }
  }

  function clearCode() { setCode(""); setApplied(null); setError(false); }

  const discountedRate = applied
    ? Math.round(nightlyRate * (1 - applied.pct / 100))
    : null;

  return (
    <div className="bg-card rounded-2xl border border-border p-7 md:p-8 shadow-sm">

      {/* Best rate badge */}
      <div className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-5">
        <BadgeCheck className="w-3.5 h-3.5" />
        Best rate guaranteed · book direct
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-6">
        {discountedRate ? (
          <>
            <span className="font-serif text-4xl font-bold text-foreground">&euro;{discountedRate}</span>
            <span className="font-serif text-xl text-muted line-through">&euro;{nightlyRate}</span>
            <span className="text-muted text-sm">/ night</span>
          </>
        ) : (
          <>
            <span className="font-serif text-4xl font-bold">&euro;{nightlyRate}</span>
            <span className="text-muted text-sm">/ night</span>
          </>
        )}
      </div>

      {/* Promo code */}
      <div className="mb-6">
        {applied ? (
          <div className="flex items-center justify-between bg-accent/8 border border-accent/25 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <Tag className="w-4 h-4 text-accent shrink-0" />
              <span className="font-medium text-accent">{code.toUpperCase()}</span>
              <span className="text-muted">&mdash; {applied.label}</span>
            </div>
            <button onClick={clearCode} className="text-muted hover:text-foreground transition-colors ml-2">
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted uppercase tracking-[0.08em]">
              Promo code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={code}
                onChange={e => { setCode(e.target.value); setError(false); }}
                onKeyDown={e => e.key === "Enter" && applyCode()}
                placeholder="e.g. NINA10"
                className={`flex-1 px-3.5 py-2.5 rounded-xl border text-sm font-mono uppercase tracking-wider bg-background focus:outline-none transition-colors ${
                  error
                    ? "border-red-300 focus:border-red-400"
                    : "border-border focus:border-accent"
                }`}
              />
              <button
                onClick={applyCode}
                disabled={!code.trim()}
                className="px-4 py-2.5 bg-foreground/8 hover:bg-foreground/14 text-foreground text-sm font-medium rounded-xl transition-colors disabled:opacity-40"
              >
                Apply
              </button>
            </div>
            {error && (
              <p className="text-xs text-red-500">Invalid code. Try NINA10 for 10% off.</p>
            )}
          </div>
        )}
      </div>

      {/* Book button */}
      <button
        onClick={openBooking}
        className="w-full py-4 bg-foreground text-background rounded-xl font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
      >
        Check Availability &amp; Book
      </button>

      {/* Trust signals */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-5 text-xs text-muted">
        {[
          { icon: Lock,          text: "Secure payment" },
          { icon: CalendarCheck, text: "Instant confirmation" },
          { icon: BadgeCheck,    text: "Synced with Airbnb" },
          { icon: MessageCircle, text: "Direct host contact" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon className="w-3.5 h-3.5 shrink-0 text-accent" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
