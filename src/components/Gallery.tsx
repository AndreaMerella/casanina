"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/view.jpg",        alt: "Garden view from the apartment",   span: "col-span-2 row-span-2" },
  { src: "/images/bedroom.jpg",     alt: "Double bedroom with wardrobe",      span: "" },
  { src: "/images/kitchen.jpg",     alt: "Modern fully equipped kitchen",     span: "" },
  { src: "/images/bathroom.jpg",    alt: "Bathroom with shower",              span: "" },
  { src: "/images/living-room.jpg", alt: "Bright and comfortable living room",span: "" },
  { src: "/images/workspace.jpg",   alt: "Living room, another angle",        span: "col-span-2" },
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close  = useCallback(() => setIndex(null), []);
  const prev   = useCallback(() => setIndex(i => i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length), []);
  const next   = useCallback(() => setIndex(i => i === null ? null : (i + 1) % galleryImages.length), []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      {/* ── Grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-2 md:gap-3">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`relative overflow-hidden rounded-xl bg-stone-200 group cursor-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ctext y='26' font-size='24'%3E%E2%9B%B5%3C/text%3E%3C/svg%3E")_12_24,pointer] ${img.span}`}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={i === 0 || i === 5 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {index !== null && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={close}
          />

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm tabular-nums">
            {index + 1} / {galleryImages.length}
          </div>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16 md:mx-24">
            <Image
              key={index}
              src={galleryImages[index].src}
              alt={galleryImages[index].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm text-center px-4">
            {galleryImages[index].alt}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
