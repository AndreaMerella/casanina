"use client";

import { useEffect } from "react";

/**
 * Disables browser scroll-restoration so the page always loads at the top.
 * smooth scroll-behavior in globals.css still works for anchor navigation.
 */
export default function ScrollReset() {
  useEffect(() => {
    history.scrollRestoration = "manual";
    // Fire immediately and again after browser paint to override any late restoration
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const raf = requestAnimationFrame(() =>
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    );
    return () => cancelAnimationFrame(raf);
  }, []);
  return null;
}
