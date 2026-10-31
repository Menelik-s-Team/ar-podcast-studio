import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature or webhook secret" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const meta = session.metadata || {};

    const bookingData = {
      customer_name: meta.customer_name,
      customer_email: meta.customer_email,
      customer_phone: meta.customer_phone,
      guests: meta.guests,
      date: meta.date,
      time: meta.time,
      topics: meta.topics,
      amount_paid: session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : "$100.00",
      stripe_session_id: session.id,
    };

    // Send to Make.com webhook — Make creates the Google Calendar event
    const makeUrl = process.env.MAKE_WEBHOOK_URL;
    if (makeUrl) {
      try {
        await fetch(makeUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        });
      } catch (err) {
        console.error("Make.com webhook error:", err);
        // Don't fail the webhook — Stripe needs a 200
      }
    }

    console.log("Booking confirmed:", bookingData);
  }

  return NextResponse.json({ received: true });
}
