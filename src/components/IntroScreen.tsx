"use client";

import { useEffect, useState } from "react";

/**
 * Minimal branded intro — covers the hero while the video buffers.
 * Dark bg matches bg-stone-900 hero, so the transition is seamless.
 * Fades out after 1.4s, removed from DOM at 2s.
 * Only on first visit per session.
 */
export default function IntroScreen() {
  const [phase, setPhase] = useState<"hidden" | "in" | "out">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) return;
    setPhase("in");
    const t1 = setTimeout(() => setPhase("out"), 1400);
    const t2 = setTimeout(() => {
      setPhase("hidden");
      sessionStorage.setItem("intro-seen", "1");
    }, 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-stone-900"
      style={{
        opacity: phase === "out" ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
        pointerEvents: phase === "out" ? "none" : "auto",
      }}
    >
      <h1
        className="font-serif text-[2.2rem] md:text-5xl text-[#faf8f4]/90 tracking-wide"
        style={{
          opacity: phase === "out" ? 0 : 1,
          transform: phase === "out" ? "translateY(-6px)" : "translateY(0)",
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
        }}
      >
        Casa Nina
      </h1>
      <p
        className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#faf8f4]/35 font-light"
        style={{
          opacity: phase === "out" ? 0 : 1,
          transition: "opacity 0.5s ease-in-out 0.05s",
        }}
      >
        Carignano · Genova
      </p>
    </div>
  );
}
