"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const PAGES = [
  { src: "/images/guestbook/page-01.jpg", rotate: -2.5 },
  { src: "/images/guestbook/page-02.jpg", rotate: 1.8 },
  { src: "/images/guestbook/page-03.jpg", rotate: -1.2 },
  { src: "/images/guestbook/page-04.jpg", rotate: 2.4 },
  { src: "/images/guestbook/page-05.jpg", rotate: -3.0 },
  { src: "/images/guestbook/page-06.jpg", rotate: 1.5 },
  { src: "/images/guestbook/page-07.jpg", rotate: -1.8 },
  { src: "/images/guestbook/page-08.jpg", rotate: 2.8 },
  { src: "/images/guestbook/page-09.jpg", rotate: -2.1 },
  { src: "/images/guestbook/page-10.jpg", rotate: 1.2 },
  { src: "/images/guestbook/page-11.jpg", rotate: -3.2 },
];

export default function Guestbook() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Casa Nina Guestbook: ${name} (${rating}/5 stars)`);
    const body = encodeURIComponent(`Name: ${name}\nRating: ${rating}/5 stars\n\n${message}`);
    window.location.href = `mailto:casaninacarignano@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="guestbook" className="py-12 md:py-16 px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">
          Our Guestbook
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          Leave Your Mark
        </h2>
        <p className="text-muted leading-relaxed mb-10">
          In the apartment there is a book: guests have been filling it since the very beginning.
          A few of their words, in their own hand.
        </p>

        {/* ── Photo gallery ── */}
        {/* Outer div clips only vertically; inner div handles horizontal scroll */}
        <div className="relative mb-14 -mx-6">
          <div
            className="overflow-x-auto"
            style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 24, paddingRight: 24 }}
          >
            <div className="flex gap-5" style={{ width: "max-content" }}>
              {PAGES.map((page, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="flex-shrink-0 focus:outline-none transition-all duration-200 hover:scale-105"
                  style={{ transform: `rotate(${page.rotate}deg)` }}
                  aria-label={`View guestbook page ${i + 1}`}
                >
                  <div
                    style={{
                      width: 130,
                      height: 173,
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: "0 4px 18px rgba(24,18,12,0.18), 0 1px 3px rgba(24,18,12,0.10)",
                      background: "#f3f0e9",
                    }}
                  >
                    <Image
                      src={page.src}
                      alt={`Guestbook page ${i + 1}`}
                      width={130}
                      height={173}
                      className="w-full h-full object-cover"
                      sizes="130px"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Lightbox ── */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-w-lg w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PAGES[lightbox].src}
                alt={`Guestbook page ${lightbox + 1}`}
                width={600}
                height={800}
                className="rounded-sm shadow-2xl w-full h-auto"
                style={{ maxHeight: "85vh", objectFit: "contain" }}
              />
              {/* Prev / Next */}
              <button
                onClick={() => setLightbox((lightbox - 1 + PAGES.length) % PAGES.length)}
                className="absolute left-[-44px] top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl font-light px-2"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={() => setLightbox((lightbox + 1) % PAGES.length)}
                className="absolute right-[-44px] top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl font-light px-2"
                aria-label="Next"
              >
                ›
              </button>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-2 right-2 text-white/70 hover:text-white text-lg leading-none px-2 py-1"
                aria-label="Close"
              >
                ✕
              </button>
              <p className="text-center text-white/50 text-xs mt-3 tracking-widest">
                {lightbox + 1} / {PAGES.length}
              </p>
            </div>
          </div>
        )}

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-10 max-w-2xl mx-auto">
          <div className="flex-1 h-px bg-border" />
          <p className="text-muted text-xs uppercase tracking-[0.14em]">Write yours</p>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* ── Submission form ── */}
        <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-6 md:p-8 text-left space-y-5 max-w-2xl mx-auto">
          {/* Star rating */}
          <div>
            <label className="block text-sm font-medium mb-2">Your rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="transition-colors"
                >
                  <Star
                    className={`w-7 h-7 ${
                      star <= (hover || rating)
                        ? "fill-accent text-accent"
                        : "text-border"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1.5" htmlFor="gb-name">
              Your name
            </label>
            <input
              id="gb-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Laura from London"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-accent"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1.5" htmlFor="gb-message">
              Your experience
            </label>
            <textarea
              id="gb-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Tell us about your stay..."
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-accent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-foreground text-background rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Send your review
          </button>

          <p className="text-xs text-muted text-center">
            Your message will be sent to our inbox. We read every single one.
          </p>
        </form>
      </div>
    </section>
  );
}
