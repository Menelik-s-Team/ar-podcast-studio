import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import BrandsMarquee from "@/components/BrandsMarquee";
import { Mic, Calendar, Briefcase, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "AR Podcast Network | Studio B — Book Professional Podcast Recording",
  description:
    "Studio B by AR Podcast Network — broadcast-quality podcast recording in Atlanta Metro Area. Book your session online in minutes.",
};

const STRIPE_CREATOR = "https://buy.stripe.com/7sY4gBgrR7AD5rq9Gnao801";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&q=80"
          alt="Professional podcast studio with microphones and recording equipment"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(180, 100, 10, 0.40)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Your Voice Deserves to Be Heard.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Studio B by AR Podcast Network — broadcast-quality recording, zero hassle.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <a
              href="/book"
              className="inline-flex items-center justify-center bg-brand-gold text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
            >
              Book Your Session &rarr;
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-cream border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "Broadcast-Ready Acoustics",
              "Professional Microphones Included",
              "Online Booking in Minutes",
              "Flexible For Every Creator",
            ].map((stat, i) => (
              <FadeIn key={stat} delay={i * 0.08}>
                <div className="text-brand-gold font-bold text-base leading-snug">
                  {stat}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <BrandsMarquee />

      {/* Why Studio B */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Why Studio B?
              </h2>
              <p className="text-brand-muted text-lg max-w-xl mx-auto">
                Everything you need to record like a pro, without the complexity.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Mic size={28} className="text-brand-gold" />,
                title: "Broadcast-Ready Sound",
                desc: "Professional acoustic treatment and microphones included.",
              },
              {
                icon: <Calendar size={28} className="text-brand-gold" />,
                title: "Book In Minutes",
                desc: "No phone tag. Select your time, pay online, show up ready.",
              },
              {
                icon: <Briefcase size={28} className="text-brand-gold" />,
                title: "Built For Everyone",
                desc: "Podcasters, coaches, brands, and organizations — one session, one simple rate.",
              },
              {
                icon: <Lightbulb size={28} className="text-brand-gold" />,
                title: "Transparent Pricing",
                desc: "One clear, simple rate. No surprises.",
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="bg-white border border-brand-border rounded-xl p-6 h-full flex flex-col gap-3 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-gold-light rounded-xl flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-brand-text text-base">
                    {card.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                How It Works
              </h2>
              <p className="text-brand-muted text-lg">
                Four simple steps to your next recording session.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", text: "Choose your session type" },
              { step: "2", text: "Pick your availability online" },
              { step: "3", text: "Confirm with secure payment" },
              { step: "4", text: "Show up and record" },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-gold text-white font-bold text-xl flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  <p className="text-brand-text text-sm font-medium leading-snug">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Simple, Honest Pricing
              </h2>
            </div>
          </FadeIn>
          <div className="max-w-lg mx-auto">
            <FadeIn>
              <div className="rounded-2xl border bg-white border-brand-border p-8 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-block bg-brand-gold-light text-brand-gold text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider self-start">Recording</span>
                <h3 className="font-bold text-brand-text text-xl" style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}>Studio Session</h3>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-brand-gold" style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}>$100</span>
                  <span className="text-brand-muted text-base mb-2">/hr</span>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">Broadcast-ready acoustics, professional mics, private environment. For podcasters, coaches, and creators.</p>
                <a href="/book" className="mt-auto bg-brand-gold text-white font-semibold px-5 py-3 rounded-lg text-sm text-center hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95">Book Your Session</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Ready to Record?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book your session today and step into broadcast-quality sound.
            </p>
            <a
              href="/book"
              className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
            >
              Book Your Session
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
