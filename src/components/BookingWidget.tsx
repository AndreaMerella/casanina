"use client";

import { useState, useEffect, useCallback } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isBefore,
  isWithinInterval,
  differenceInCalendarDays,
  getDay,
  startOfDay,
} from "date-fns";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface BookingWidgetProps {
  nightlyRate: number;
  cleaningFee: number;
}

export default function BookingWidget({
  nightlyRate,
  cleaningFee,
}: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    fetch("/api/calendar")
      .then((res) => res.json())
      .then((data) => {
        setBlockedDates(
          data.blockedDates.map((d: string) => new Date(d))
        );
      })
      .catch(() => {
        // Continue with no blocked dates if fetch fails
      })
      .finally(() => setLoading(false));
  }, []);

  const isBlocked = useCallback(
    (date: Date) => blockedDates.some((b) => isSameDay(b, date)),
    [blockedDates]
  );

  const hasBlockedInRange = useCallback(
    (start: Date, end: Date) =>
      blockedDates.some(
        (b) =>
          (isBefore(start, b) || isSameDay(start, b)) &&
          (isBefore(b, end) || isSameDay(b, end))
      ),
    [blockedDates]
  );

  const handleDateClick = (date: Date) => {
    if (isBlocked(date) || isBefore(date, startOfDay(new Date()))) return;

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else {
      if (isBefore(date, checkIn)) {
        setCheckIn(date);
        setCheckOut(null);
      } else if (isSameDay(date, checkIn)) {
        return;
      } else if (hasBlockedInRange(checkIn, date)) {
        setCheckIn(date);
        setCheckOut(null);
      } else {
        setCheckOut(date);
      }
    }
  };

  const nights =
    checkIn && checkOut ? differenceInCalendarDays(checkOut, checkIn) : 0;
  const subtotal = nights * nightlyRate;
  const total = subtotal + (nights > 0 ? cleaningFee : 0);

  const handleBooking = async () => {
    if (!checkIn || !checkOut) return;
    setBookingLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      // Checkout error — user can retry
    } finally {
      setBookingLoading(false);
    }
  };

  const renderMonth = (monthStart: Date) => {
    const monthEnd = endOfMonth(monthStart);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const startPadding = (getDay(monthStart) + 6) % 7;

    return (
      <div>
        <h3 className="text-center font-medium text-sm mb-3 tracking-wide">
          {format(monthStart, "MMMM yyyy")}
        </h3>
        <div className="grid grid-cols-7 gap-0.5 text-center text-xs">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
            <div key={day} className="py-1.5 text-muted font-medium">
              {day}
            </div>
          ))}
          {Array.from({ length: startPadding }).map((_, i) => (
            <div key={`pad-${i}`} />
          ))}
          {days.map((day) => {
            const blocked = isBlocked(day);
            const past = isBefore(day, startOfDay(new Date()));
            const disabled = blocked || past;
            const isCheckIn = checkIn && isSameDay(day, checkIn);
            const isCheckOut = checkOut && isSameDay(day, checkOut);
            const inRange =
              checkIn &&
              checkOut &&
              !isSameDay(day, checkIn) &&
              !isSameDay(day, checkOut) &&
              isWithinInterval(day, { start: checkIn, end: checkOut });

            return (
              <button
                key={day.toISOString()}
                onClick={() => handleDateClick(day)}
                disabled={disabled}
                className={[
                  "py-1.5 rounded-md text-sm transition-colors",
                  disabled
                    ? "text-stone-300 cursor-not-allowed line-through"
                    : "hover:bg-accent/15 cursor-pointer",
                  isCheckIn || isCheckOut
                    ? "bg-foreground text-background font-semibold"
                    : "",
                  inRange ? "bg-foreground/5" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const canGoPrev = !isBefore(
    addMonths(currentMonth, -1),
    startOfMonth(new Date())
  );

  return (
    <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-2xl font-serif font-bold">
          &euro;{nightlyRate}
        </span>
        <span className="text-muted text-sm">/ night</span>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-5 h-5 animate-spin text-muted" />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
              disabled={!canGoPrev}
              className="p-1.5 hover:bg-stone-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className="p-1.5 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {renderMonth(currentMonth)}
            {renderMonth(addMonths(currentMonth, 1))}
          </div>
        </>
      )}

      <div className="mt-6 pt-5 border-t border-border space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="border border-border rounded-xl p-3">
            <div className="text-[11px] text-muted uppercase tracking-wider font-medium">
              Check-in
            </div>
            <div className="text-sm font-medium mt-0.5">
              {checkIn ? format(checkIn, "dd MMM yyyy") : "Select date"}
            </div>
          </div>
          <div className="border border-border rounded-xl p-3">
            <div className="text-[11px] text-muted uppercase tracking-wider font-medium">
              Check-out
            </div>
            <div className="text-sm font-medium mt-0.5">
              {checkOut ? format(checkOut, "dd MMM yyyy") : "Select date"}
            </div>
          </div>
        </div>

        {nights > 0 && (
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted">
                &euro;{nightlyRate} &times; {nights} night
                {nights > 1 ? "s" : ""}
              </span>
              <span>&euro;{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Cleaning fee</span>
              <span>&euro;{cleaningFee}</span>
            </div>
            <div className="flex justify-between font-semibold text-base pt-3 border-t border-border">
              <span>Total</span>
              <span>&euro;{total}</span>
            </div>
          </div>
        )}

        <button
          onClick={handleBooking}
          disabled={!checkIn || !checkOut || bookingLoading}
          className="w-full py-3.5 bg-foreground text-background rounded-xl font-medium text-sm transition-all hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
        >
          {bookingLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Book Now"
          )}
        </button>
      </div>
    </div>
  );
}
