"use client";

import { useState, useEffect } from "react";
import { X, Bike, CheckCircle } from "lucide-react";

export default function EBikeModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [notes, setNotes] = useState("");

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`E-bike request - ${name}`);
    const body = encodeURIComponent(
      `Hi,\n\nI would like to request the e-bikes during my stay at Casa Nina.\n\nName: ${name}\nEmail: ${email}\nDates: ${dates}${notes ? `\nNotes: ${notes}` : ""}\n\nThank you!`
    );
    window.open(`mailto:casaninacarignano@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
  };

  return (
    <>
      <button
        onClick={() => { setOpen(true); setSent(false); }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-xl font-semibold text-sm hover:bg-accent-dark transition-colors"
      >
        <Bike className="w-4 h-4" />
        Request e-bikes
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal panel */}
          <div className="relative bg-card border border-border w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl p-6 md:p-8 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/60 flex items-center justify-center text-muted hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {sent ? (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl mb-2">Request sent!</h3>
                <p className="text-muted text-sm">Your email client has opened with the request. We will confirm availability as soon as possible.</p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 px-6 py-2.5 bg-accent text-background rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Bike className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl leading-tight">Request E-Bikes</h3>
                    <p className="text-muted text-xs mt-0.5">Helmets &amp; locks included · subject to availability</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-background border border-border rounded-xl px-4 py-3 text-center">
                    <p className="text-[11px] text-muted uppercase tracking-wider mb-1">1 bike</p>
                    <p className="font-serif text-2xl font-bold">€25</p>
                    <p className="text-[11px] text-muted">per day</p>
                  </div>
                  <div className="bg-background border border-border rounded-xl px-4 py-3 text-center">
                    <p className="text-[11px] text-muted uppercase tracking-wider mb-1">Both bikes</p>
                    <p className="font-serif text-2xl font-bold">€40</p>
                    <p className="text-[11px] text-muted">per day</p>
                  </div>
                </div>
                <p className="text-xs text-muted mb-5">Free for stays of 7+ nights.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-semibold uppercase tracking-wider text-muted block mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold uppercase tracking-wider text-muted block mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-muted block mb-1.5">Stay Dates</label>
                    <input
                      type="text"
                      required
                      value={dates}
                      onChange={e => setDates(e.target.value)}
                      className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="e.g. 12–16 June 2025"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-muted block mb-1.5">Notes <span className="normal-case font-normal">(optional)</span></label>
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      rows={2}
                      className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Any notes about your request..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-accent hover:bg-accent-dark text-background rounded-xl font-bold text-sm transition-colors"
                  >
                    Send Request &rarr;
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
