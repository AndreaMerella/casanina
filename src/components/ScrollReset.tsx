"use client";

import { useEffect } from "react";

/**
 * Disables browser scroll-restoration so the page always loads at the top.
 * smooth scroll-behavior in globals.css still works for anchor navigation.
 */
export default function ScrollReset() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);
  return null;
}
