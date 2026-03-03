"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";

export default function BookingBanner() {
  const searchParams = useSearchParams();
  const booking = searchParams.get("booking");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (booking === "success" || booking === "cancelled") {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [booking]);

  if (!visible) return null;

  const isSuccess = booking === "success";

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 text-sm font-medium transition-all ${
        isSuccess
          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
          : "bg-red-50 text-red-800 border border-red-200"
      }`}
    >
      {isSuccess ? (
        <>
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          Booking confirmed! Check your email for details.
        </>
      ) : (
        <>
          <XCircle className="w-4 h-4 shrink-0" />
          Booking cancelled. You have not been charged.
        </>
      )}
    </div>
  );
}
