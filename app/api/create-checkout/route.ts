import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const body = await req.json();
    const { name, email, phone, guests, date, time, topics } = body;

    if (!name || !email || !date || !time || !topics) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL || "https://ambitiousroots.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 10000, // $100.00
            product_data: {
              name: "Studio B — Recording Session",
              description: `${date} at ${time} · ${guests} guest(s)`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        customer_name: name,
        customer_email: email,
        customer_phone: phone || "",
        guests,
        date,
        time,
        topics: topics.slice(0, 500), // Stripe metadata limit
      },
      success_url: `${baseUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/book`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout session error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
