"use client";

import { useState, useEffect } from "react";
import { BadgeCheck } from "lucide-react";

export default function FloatingBar() {
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
        className="flex items-center gap-3 bg-foreground text-background px-5 py-3.5 rounded-2xl shadow-2xl"
      >
        <div className="flex items-center gap-1.5">
          <BadgeCheck className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="text-xs text-background/70 font-medium">Best rate direct</span>
        </div>
        <span className="text-sm font-semibold tracking-wide">Book &rarr;</span>
      </a>
    </div>
  );
}
