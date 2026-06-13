"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Lock, CalendarCheck, MessageCircle, BadgeCheck, Tag, X, Copy, Check } from "lucide-react";

const VIKEY_URL = "https://booking.vikey.it/?local_key=niwVv6ZrwEZ0QeBOqqDJpZnNJwwHXUY_x384GCmFqt4";

const PROMO_CODES: Record<string, { pct: number; label: string }> = {
  NINA10: { pct: 10, label: "Book direct, save 10%" },
  NINA15: { pct: 15, label: "Welcome back — 15% off" },
  NINA20: { pct: 20, label: "Long stay offer — 20% off" },
};

interface Props { nightlyRate: number; }

export default function BookingModal({ nightlyRate }: Props) {
  const searchParams = useSearchParams();
  const [code, setCode]       = useState("");
  const [applied, setApplied] = useState<typeof PROMO_CODES[string] | null>(null);
  const [error, setError]     = useState(false);
  const [copied, setCopied]   = useState(false);

  // Auto-apply promo code from URL param (e.g. ?promo=NINA10 via QR code)
  useEffect(() => {
    const param = searchParams.get("promo")?.toUpperCase().trim();
    if (param && PROMO_CODES[param]) {
      setCode(param);
      setApplied(PROMO_CODES[param]);
    }
  }, [searchParams]);

  function applyCode() {
    const promo = PROMO_CODES[code.toUpperCase().trim()];
    if (promo) { setApplied(promo); setError(false); }
    else       { setApplied(null); setError(true); }
  }

  function clearCode() { setCode(""); setApplied(null); setError(false); setCopied(false); }

  function copyCode() {
    navigator.clipboard.writeText(code.toUpperCase().trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  function handleBook() {
    if (applied) {
      navigator.clipboard.writeText(code.toUpperCase().trim()).catch(() => {});
    }
    const w = 720, h = 820;
    const left = Math.round((window.screen.width - w) / 2);
    const top  = Math.round((window.screen.height - h) / 6);
    const popup = window.open(VIKEY_URL, "CasaNinaBooking",
      `width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no`);
    if (!popup) window.open(VIKEY_URL, "_blank", "noopener,noreferrer");
  }

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

      {/* Price / discount status */}
      <div className="flex items-baseline gap-2 mb-6">
        {discountedRate ? (
          <>
            <span className="font-serif text-2xl font-bold text-accent">{applied!.pct}% off</span>
            <span className="text-muted text-sm">applied to your stay</span>
          </>
        ) : (
          <p className="text-sm text-muted">Best rate guaranteed — no OTA fees, no middleman.</p>
        )}
      </div>

      {/* Promo code */}
      <div className="mb-6">
        {applied ? (
          <div className="space-y-2">
            {/* Applied code row */}
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

            {/* Instruction banner */}
            <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              <span className="text-amber-500 mt-0.5 shrink-0 text-base">↓</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-amber-800 leading-relaxed">
                  In the booking window, look for the discount code field
                  {" "}<strong>(&ldquo;Hai un codice sconto?&rdquo; / &ldquo;Do you have a discount code?&rdquo;)</strong>{" "}
                  and paste your code there to apply your discount.
                </p>
                <button
                  onClick={copyCode}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors"
                >
                  {copied
                    ? <><Check className="w-3.5 h-3.5" /> Copied!</>
                    : <><Copy className="w-3.5 h-3.5" /> Copy code {code.toUpperCase()}</>
                  }
                </button>
              </div>
            </div>
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
                placeholder="Promo code"
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
              <p className="text-xs text-red-500">Invalid promo code.</p>
            )}
          </div>
        )}
      </div>

      {/* Book button */}
      <button
        onClick={handleBook}
        className="w-full py-4 bg-foreground text-background rounded-xl font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
      >
        {applied
          ? `Book with ${applied.pct}% discount →`
          : "Check Availability & Book"
        }
      </button>
      <p className="text-center text-[11px] text-muted mt-2">
        A secure booking window will open · select your dates and confirm
      </p>

      {/* Trust signals */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-5 text-xs text-muted">
        {[
          { icon: Lock,          text: "Secure payment" },
          { icon: CalendarCheck, text: "Instant confirmation" },
          { icon: BadgeCheck,    text: "Best rate guaranteed" },
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
