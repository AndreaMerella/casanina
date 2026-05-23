"use client";

const VIKEY_URL = "https://booking.vikey.it/?local_key=niwVv6ZrwEZ0QeBOqqDJpZnNJwwHXUY_x384GCmFqt4";

interface Props {
  nightlyRate: number;
}

function openBookingPopup() {
  const w = 720;
  const h = 820;
  const left = Math.round((window.screen.width - w) / 2);
  const top  = Math.round((window.screen.height - h) / 6);
  const popup = window.open(
    VIKEY_URL,
    "CasaNinaBooking",
    `width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no`
  );
  // If popup was blocked, fall back to new tab
  if (!popup) window.open(VIKEY_URL, "_blank", "noopener,noreferrer");
}

export default function BookingModal({ nightlyRate }: Props) {
  return (
    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
      <div className="flex items-baseline gap-1.5 mb-1">
        <span className="font-serif text-3xl font-bold">&euro;{nightlyRate}</span>
        <span className="text-muted text-sm">/ night</span>
      </div>
      <p className="text-xs text-muted mb-6">Best rate guaranteed &middot; book direct</p>

      <button
        onClick={openBookingPopup}
        className="w-full py-4 bg-foreground text-background rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Check Availability &amp; Book
      </button>

      <div className="grid grid-cols-2 gap-3 mt-5 text-xs text-muted">
        {[
          { icon: "🔒", text: "Secure payment" },
          { icon: "✓",  text: "Instant confirmation" },
          { icon: "📅", text: "Synced with Airbnb" },
          { icon: "💬", text: "Direct host contact" },
        ].map(({ icon, text }) => (
          <div key={text} className="flex items-center gap-1.5">
            <span>{icon}</span><span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
