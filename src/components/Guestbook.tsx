"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function Guestbook() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Casa Nina Guestbook: ${name} (${rating}/5 stars)`);
    const body = encodeURIComponent(`Name: ${name}\nRating: ${rating}/5 stars\n\n${message}`);
    window.location.href = `mailto:casaninacarignano@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="guestbook" className="py-12 md:py-16 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
          Our Guestbook
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          Leave Your Mark
        </h2>
        <p className="text-muted leading-relaxed mb-10">
          Just like the book in the apartment, we love hearing from our guests.
          Share your experience and let future visitors know what made your stay special.
        </p>

        <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-6 md:p-8 text-left space-y-5">
          {/* Star rating */}
          <div>
            <label className="block text-sm font-medium mb-2">Your rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="transition-colors"
                >
                  <Star
                    className={`w-7 h-7 ${
                      star <= (hover || rating)
                        ? "fill-accent text-accent"
                        : "text-border"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1.5" htmlFor="gb-name">
              Your name
            </label>
            <input
              id="gb-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Laura from London"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-accent"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1.5" htmlFor="gb-message">
              Your experience
            </label>
            <textarea
              id="gb-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Tell us about your stay..."
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-accent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-foreground text-background rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Send your review
          </button>

          <p className="text-xs text-muted text-center">
            Your message will be sent to our inbox. We read every single one.
          </p>
        </form>
      </div>
    </section>
  );
}
