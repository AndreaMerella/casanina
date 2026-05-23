"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const links = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f2ede4]/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-serif text-xl transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          Casa Nina
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={!scrolled ? { textShadow: "0 1px 4px rgba(0,0,0,0.9)" } : undefined}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted hover:text-foreground"
                  : "text-white hover:text-white/80"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#booking"
            className={`inline-flex px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              scrolled
                ? "bg-foreground text-background hover:opacity-90"
                : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm border border-white/25"
            }`}
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-border px-6 py-4 space-y-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted hover:text-foreground py-2"
            >
              {label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="block text-center py-3 bg-foreground text-background rounded-xl text-sm font-medium mt-3"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
