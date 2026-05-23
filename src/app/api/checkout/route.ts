import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { differenceInCalendarDays } from "date-fns";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const { checkIn, checkOut } = await req.json();

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = differenceInCalendarDays(checkOutDate, checkInDate);

    if (nights <= 0 || nights > 90) {
      return NextResponse.json(
        { error: "Invalid stay duration." },
        { status: 400 }
      );
    }

    // Reject dates more than 2 years in the future
    const twoYearsFromNow = new Date();
    twoYearsFromNow.setFullYear(twoYearsFromNow.getFullYear() + 2);
    if (checkInDate > twoYearsFromNow) {
      return NextResponse.json(
        { error: "Booking too far in advance." },
        { status: 400 }
      );
    }

    const nightlyRateCents = parseInt(
      process.env.NIGHTLY_RATE_CENTS || "15000"
    );
    const cleaningFeeCents = parseInt(
      process.env.CLEANING_FEE_CENTS || "5000"
    );

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Casa Nina Carignano - ${nights} night${nights > 1 ? "s" : ""}`,
              description: `${checkInDate.toLocaleDateString("en-GB")} - ${checkOutDate.toLocaleDateString("en-GB")}`,
            },
            unit_amount: nightlyRateCents * nights,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Cleaning fee",
            },
            unit_amount: cleaningFeeCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}?booking=success`,
      cancel_url: `${baseUrl}?booking=cancelled`,
      metadata: {
        checkIn,
        checkOut,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
