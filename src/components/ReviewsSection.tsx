"use client";

import { useState } from "react";

const AIRBNB_ICON = (
  <svg width="11" height="11" viewBox="0 0 32 32" fill="#FF5A5F">
    <path d="M16 1C9.9 1 5 5.9 5 12c0 7.7 11 19 11 19s11-11.3 11-19c0-6.1-4.9-11-11-11zm0 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  </svg>
);

const BOOKING_BADGE = (
  <span className="inline-flex items-center justify-center w-3 h-3 rounded-sm bg-[#003580] text-white font-bold" style={{ fontSize: "7px", lineHeight: 1 }}>B</span>
);

type Review = {
  quote: string;
  author: string;
  sub: string;      // tenure (Airbnb) or origin (Booking.com)
  date: string;
  score: string;    // "★★★★★" or "10/10"
  platform: "airbnb" | "booking";
};

const REVIEWS: Review[] = [
  // Most recent first
  {
    quote: "Angenehm ruhige Wohnung, sehr gut ausgestattet, Mineralwasser und Säfte vorhanden. Ruhige Gegend, 20 Minuten Fußweg ins Zentrum.",
    author: "Frank", sub: "Germany · Couple", date: "May 2026", score: "10/10", platform: "booking",
  },
  {
    quote: "Wonderful. The atmosphere of the neighbourhood and the apartment made for a truly memorable stay.",
    author: "Christian", sub: "Kenya · Family", date: "May 2026", score: "9/10", platform: "booking",
  },
  {
    quote: "Posizione e appartamento super. Ottima posizione, appartamento curato e ben attrezzato.",
    author: "Piero", sub: "Italy", date: "May 2026", score: "10/10", platform: "booking",
  },
  {
    quote: "Appartamento perfetto con dotazioni eccellenti. Tutto ciò che ci aspettavamo e molto di più.",
    author: "Federico", sub: "Italy · Couple", date: "Apr 2026", score: "10/10", platform: "booking",
  },
  {
    quote: "Exceptional. Tutto bellissimo.",
    author: "Giulia", sub: "Italy · Couple", date: "Apr 2026", score: "10/10", platform: "booking",
  },
  {
    quote: "Schöne, grosse Wohnung mit allem was man braucht. Snacks bei der Ankunft, sehr aufmerksame Gastgeber. Angelo hat uns sogar bei einem Autoproblem geholfen.",
    author: "Valentin", sub: "Switzerland · Family", date: "Mar 2026", score: "10/10", platform: "booking",
  },
  {
    quote: "Il top per la famiglia. L'appartamento è bellissimo, pulitissimo e con tutto il necessario. Abbiamo trovato colazione, parcheggio pass e tantissimi libri per bambini e adulti.",
    author: "Alessandro", sub: "Italy · Family", date: "Feb 2026", score: "10/10", platform: "booking",
  },
  {
    quote: "Oltre le aspettative. Tutto ha superato le aspettative. Frigo rifornito con prodotti di qualità, pass parcheggio incluso. A 20 minuti dal centro, un valore aggiunto enorme.",
    author: "Fabio", sub: "Italy · Family", date: "Feb 2026", score: "10/10", platform: "booking",
  },
  {
    quote: "Arcangelo's apartment is located in the Carignano district, in a strategic position, close to the center and the old port, easily reachable on foot. We were welcomed in an impeccably clean and well-equipped home.",
    author: "Claudia", sub: "3 years on Airbnb", date: "May 2025", score: "★★★★★", platform: "airbnb",
  },
  {
    quote: "Great apartment in a very peaceful location. Within easy reach of city centre and waterfront. Really enjoyed our time here and would definitely stay again.",
    author: "Trudi", sub: "9 years on Airbnb", date: "Oct 2024", score: "★★★★★", platform: "airbnb",
  },
  {
    quote: "Passing through Genova, Arcangelo so kindly welcomed us at Casa Nina. Having done a lot of Airbnbs, this one is one of the best: very clean, great location, and a wonderful host.",
    author: "Tuan", sub: "11 years on Airbnb", date: "Aug 2024", score: "★★★★★", platform: "airbnb",
  },
  {
    quote: "The apartment is a wedding favor: all carefully matched with taste, sophisticated decor, everything new, very clean. In the fridge, drinks and water, which is not obvious. A real attention to detail.",
    author: "Elena", sub: "2 years on Airbnb", date: "Aug 2024", score: "★★★★★", platform: "airbnb",
  },
  {
    quote: "For a short stay it was perfecto. Arcangelo was very responsive and the apartment was quiet with comfy beds to rest. Thanks!!",
    author: "Stephen", sub: "4 years on Airbnb", date: "Aug 2024", score: "★★★★★", platform: "airbnb",
  },
  {
    quote: "A great stay, nothing to say. Check-in directions are very clear. Even if you don't have internet, there's a solution. The accommodation is in new condition and has all the amenities you need.",
    author: "Yann", sub: "12 years on Airbnb", date: "Aug 2024", score: "★★★★★", platform: "airbnb",
  },
];

const INITIAL_VISIBLE = 6;

export default function ReviewsSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? REVIEWS : REVIEWS.slice(0, INITIAL_VISIBLE);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">Guest Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">What Our Guests Say</h2>

          {/* Platform scores */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-8">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5A5F] mb-1">
                {AIRBNB_ICON} Airbnb
              </div>
              <span className="font-serif text-5xl font-bold leading-none">5.0</span>
              <span className="text-xs font-semibold mt-1">Guest Favorite</span>
              <span className="text-muted text-[11px] mt-0.5">25 reviews</span>
            </div>

            <div className="w-px h-14 bg-border hidden sm:block" />

            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-lg mb-2">
                🏆 Traveller Award 2026
              </div>
              <span className="font-serif text-5xl font-bold leading-none">9.8</span>
              <span className="text-xs font-semibold mt-1">Exceptional</span>
              <span className="text-muted text-[11px] mt-0.5">Booking.com · 90 reviews</span>
            </div>
          </div>

          {/* Airbnb category scores */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 max-w-2xl mx-auto mb-1">
            {[
              { label: "Cleanliness", score: "5.0" },
              { label: "Accuracy",    score: "5.0" },
              { label: "Check-in",    score: "4.9" },
              { label: "Communication", score: "5.0" },
              { label: "Location",    score: "4.9" },
              { label: "Value",       score: "4.9" },
            ].map(({ label, score }) => (
              <div key={label} className="bg-card rounded-xl px-2 py-2.5 border border-border flex flex-col items-center">
                <p className="font-bold text-sm">{score}</p>
                <p className="text-muted text-[10px] mt-0.5 leading-tight text-center">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-muted text-[11px] mb-0">Airbnb category scores</p>
        </div>

        {/* Compact 3-col review grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {visible.map((r) => (
            <div key={r.author} className="bg-card rounded-xl p-4 border border-border flex flex-col gap-2.5">
              {/* Quote — clamped to 3 lines */}
              <p className="text-muted text-sm leading-relaxed line-clamp-3 flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>
              {/* Footer row */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/60">
                <div className="min-w-0">
                  <p className="text-xs font-semibold truncate">{r.author}</p>
                  <p className="text-[10px] text-muted truncate">{r.sub}</p>
                </div>
                <div className="text-right shrink-0">
                  {r.platform === "airbnb" ? (
                    <p className="text-yellow-500 text-xs leading-none">{r.score}</p>
                  ) : (
                    <p className="text-xs font-bold text-[#003580] leading-none">{r.score}</p>
                  )}
                  <div className="flex items-center justify-end gap-1 mt-0.5">
                    {r.platform === "airbnb" ? AIRBNB_ICON : BOOKING_BADGE}
                    <p className="text-[10px] text-muted">{r.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / collapse */}
        {!expanded && REVIEWS.length > INITIAL_VISIBLE && (
          <div className="text-center">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors border border-border rounded-xl px-5 py-2.5"
            >
              Show all {REVIEWS.length} reviews
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4l4 4 4-4"/>
              </svg>
            </button>
          </div>
        )}
        {expanded && (
          <div className="text-center">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors border border-border rounded-xl px-5 py-2.5"
            >
              Show less
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 8l4-4 4 4"/>
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
