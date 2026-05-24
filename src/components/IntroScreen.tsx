"use client";

import { useEffect, useState } from "react";

/**
 * Fullscreen branded intro that fades out after ~1.8s.
 * Gives the hero video time to buffer so there's no black flash.
 * Only shows once per session (sessionStorage flag).
 */
export default function IntroScreen() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    // Skip on repeat visits within the same session
    if (sessionStorage.getItem("intro-seen")) return;
    setVisible(true);

    const fadeTimer  = setTimeout(() => setFading(true),  1600);
    const hideTimer  = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("intro-seen", "1");
    }, 2400);

    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#18120c]"
      style={{
        transition: "opacity 0.8s ease-out",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Anchor / anchor rope icon */}
      <div className="mb-6 text-5xl select-none" style={{ lineHeight: 1 }}>⚓</div>

      {/* Wordmark */}
      <h1
        className="font-serif text-3xl md:text-4xl text-[#faf8f4] tracking-[0.06em]"
        style={{ letterSpacing: "0.08em" }}
      >
        Casa Nina
      </h1>
      <p className="mt-2 text-xs text-[#faf8f4]/40 uppercase tracking-[0.22em] font-light">
        Carignano · Genova
      </p>

      {/* Thin loading bar */}
      <div className="mt-10 w-24 h-px bg-[#faf8f4]/15 overflow-hidden rounded-full">
        <div
          className="h-full bg-[#b5703a] rounded-full"
          style={{
            width: fading ? "100%" : "0%",
            transition: "width 1.6s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
