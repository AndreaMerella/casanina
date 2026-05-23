"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const VIKEY_URL = "https://booking.vikey.it/?local_key=niwVv6ZrwEZ0QeBOqqDJpZnNJwwHXUY_x384GCmFqt4";

interface Props {
  nightlyRate: number;
}

export default function BookingModal({ nightlyRate }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Booking card — static info + open modal */}
      <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="font-serif text-3xl font-bold">&euro;{nightlyRate}</span>
          <span className="text-muted text-sm">/ night</span>
        </div>
        <p className="text-xs text-muted mb-6">+ cleaning fee &middot; best rate guaranteed</p>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Check Availability &amp; Book
        </button>

        <div className="grid grid-cols-2 gap-3 mt-5 text-xs text-muted">
          {[
            { icon: "🔒", text: "Secure payment" },
            { icon: "✓", text: "Instant confirmation" },
            { icon: "📅", text: "Synced with Airbnb" },
            { icon: "💬", text: "Direct host contact" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen booking modal */}
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative flex flex-col w-full h-[95vh] sm:w-[95%] sm:h-[90vh] sm:max-w-3xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shrink-0">
              <div>
                <p className="font-semibold text-sm text-gray-900">Casa Nina Carignano</p>
                <p className="text-xs text-gray-500">Select your dates and complete booking below</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Vikey iframe — full remaining height */}
            <iframe
              src={VIKEY_URL}
              className="flex-1 w-full"
              style={{ border: 0 }}
              allow="payment"
              title="Book Casa Nina"
            />
          </div>
        </div>
      )}
    </>
  );
}
