import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2, Clock, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Studio B — AR Podcast Network",
  description:
    "Simple, transparent pricing at Studio B. Recording sessions at $100/hr. Book online in minutes.",
};

const STRIPE_CREATOR = "https://buy.stripe.com/7sY4gBgrR7AD5rq9Gnao801";

const creatorIncludes = [
  "Up to 3 guests with individual microphones",
  "Acoustically treated recording environment",
  "WAV + MP3 file export",
  "High-speed WiFi",
  "Professional camera",
  "Private, distraction-free environment",
  "1-hour minimum booking",
];

const faqPreview = [
  {
    q: "What's included with every booking?",
    a: "Every session includes professional condenser microphones, acoustic treatment, high-speed WiFi, WAV/MP3 recording, and a private environment. You bring your content — we handle the rest.",
  },
  {
    q: "Is there a minimum booking time?",
    a: "Yes, sessions are booked in 1-hour increments. You can book multiple hours to extend your session.",
  },
  {
    q: "How do I cancel or reschedule?",
    a: "Contact us at alexis@ambitiousroots.com for cancellations or reschedules. We&apos;ll do our best to accommodate your schedule.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1
              className="text-5xl sm:text-6xl font-bold text-brand-text mb-6"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Simple, Honest Pricing.
            </h1>
            <p className="text-brand-muted text-xl max-w-xl mx-auto">
              One simple rate. No hidden fees. Book online in minutes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white border border-brand-border rounded-2xl p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div>
                <span className="inline-block bg-brand-gold-light text-brand-gold text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  Recording
                </span>
                <h2
                  className="text-2xl font-bold text-brand-text"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  Studio Session
                </h2>
                <p className="text-brand-muted text-sm mt-1">
                  For podcasters, coaches, creators, and brands
                </p>
              </div>
              <div className="flex items-end gap-1 border-y border-brand-border py-5">
                <span
                  className="text-6xl font-bold text-brand-gold"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  $100
                </span>
                <span className="text-brand-muted text-base mb-2">/hr</span>
              </div>
              <ul className="flex flex-col gap-3">
                {creatorIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                    <CheckCircle2 size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/book"
                className="mt-auto bg-brand-gold text-white font-semibold px-5 py-3 rounded-lg text-sm text-center hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
              >
                Book Your Session
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-gold-light rounded-full flex items-center justify-center">
                  <Clock size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text text-base">Hours of Operation</h3>
                  <p className="text-brand-muted text-sm">Monday – Friday, 9:00am – 8:00pm</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-brand-border" />
              <div>
                <p className="text-brand-muted text-sm">
                  Questions?{" "}
                  <a
                    href="mailto:alexis@ambitiousroots.com"
                    className="text-brand-gold hover:text-brand-gold-hover"
                  >
                    alexis@ambitiousroots.com
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-brand-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="text-3xl font-bold text-brand-text text-center mb-10"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Common Questions
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {faqPreview.map((item, i) => (
              <FadeIn key={item.q} delay={i * 0.1}>
                <div className="bg-white border border-brand-border rounded-xl p-6">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-semibold text-brand-text text-sm">{item.q}</h3>
                    <ChevronDown size={18} className="text-brand-muted flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed mt-3">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.25}>
            <p className="text-center mt-6 text-sm text-brand-muted">
              More questions?{" "}
              <a href="/faq" className="text-brand-gold font-semibold hover:text-brand-gold-hover">
                View the full FAQ &rarr;
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Ready to book your session?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Select your rate and reserve your time online.
            </p>
            <a
              href={STRIPE_CREATOR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
            >
              Book Your Session ($100/hr)
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
