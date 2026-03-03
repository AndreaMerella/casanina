import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature." },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const guestName = session.customer_details?.name || "Guest";
    const guestEmail = session.customer_details?.email || "";
    const checkIn = session.metadata?.checkIn;
    const checkOut = session.metadata?.checkOut;

    // ── Vikey API: automate Alloggiati Web check-in & smart lock ──
    if (process.env.VIKEY_API_KEY && checkIn && checkOut) {
      try {
        const vikeyResponse = await fetch(
          "https://api.vikey.it/v1/reservations",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.VIKEY_API_KEY}`,
            },
            body: JSON.stringify({
              guest_name: guestName,
              guest_email: guestEmail,
              check_in: checkIn,
              check_out: checkOut,
              property_id: process.env.VIKEY_PROPERTY_ID,
              source: "direct_booking",
            }),
          }
        );

        if (!vikeyResponse.ok) {
          console.error(
            "Vikey API error:",
            vikeyResponse.status,
            await vikeyResponse.text()
          );
        }
      } catch (error) {
        console.error("Vikey API request failed:", error);
      }
    }
  }

  return NextResponse.json({ received: true });
}
