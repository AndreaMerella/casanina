"use client";

import { useState, useEffect } from "react";

export default function FloatingBar({ nightlyRate }: { nightlyRate: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 md:hidden">
      <a
        href="#booking"
        className="flex items-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-2xl shadow-2xl"
      >
        <span className="font-serif text-lg text-accent">&euro;{nightlyRate}</span>
        <span className="text-background/50 text-xs">/ night</span>
        <span className="ml-1 text-sm font-medium">Book Now &rarr;</span>
      </a>
    </div>
  );
}
