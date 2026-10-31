import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2, Mic2, Clock, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Podcast Recording | Studio B — AR Podcast Network",
  description:
    "Record your podcast in Studio B with professional-grade equipment, acoustic treatment, and a simple booking process. First-time or seasoned — we&apos;re built for you.",
};

const STRIPE_CREATOR = "https://buy.stripe.com/7sY4gBgrR7AD5rq9Gnao801";

export default function PodcastPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block bg-brand-gold-light text-brand-gold text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              For Podcasters
            </span>
            <h1
              className="text-5xl sm:text-6xl font-bold text-brand-text mb-6"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Record. Create. Publish.
            </h1>
            <p className="text-brand-muted text-xl max-w-2xl mx-auto">
              Studio B gives you everything you need to produce broadcast-quality audio — so you can focus entirely on your message.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                What to Expect
              </h2>
              <p className="text-brand-muted text-lg">
                Your session, from arrival to wrap-up.
              </p>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="hidden lg:block absolute left-7 top-0 bottom-0 w-0.5 bg-brand-border" />
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: <Clock size={20} className="text-brand-gold" />,
                  title: "Arrival & Setup",
                  desc: "Show up at your booked time. Studio B is prepped and ready — microphones set, acoustics dialed in. No technical setup required from you.",
                },
                {
                  icon: <Mic2 size={20} className="text-brand-gold" />,
                  title: "Recording",
                  desc: "Sit down, start talking. Up to 3 guests can record simultaneously with individual professional microphones. High-quality WAV or MP3 capture throughout your session.",
                },
                {
                  icon: <Headphones size={20} className="text-brand-gold" />,
                  title: "Playback & Review",
                  desc: "Listen back during your session to make sure everything sounds exactly right before you wrap.",
                },
                {
                  icon: <CheckCircle2 size={20} className="text-brand-gold" />,
                  title: "Wrap-Up",
                  desc: "You leave with your files in hand — ready for editing or direct upload.",
                },
              ].map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-brand-gold-light border-2 border-brand-gold rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      {step.icon}
                    </div>
                    <div className="flex-1 bg-white border border-brand-border rounded-xl p-6">
                      <h3 className="font-semibold text-brand-text text-base mb-2">
                        {step.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Tips */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Tips for First-Time Podcasters
              </h2>
              <p className="text-brand-muted text-lg">
                Show up prepared. Walk out with content you&apos;re proud of.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Outline, Don't Script",
                desc: "Have a clear structure for your episode — intro, main topics, and a call to action — but talk naturally. Outlines keep you on track without making you sound robotic.",
              },
              {
                num: "02",
                title: "Water, Not Coffee",
                desc: "Hydration keeps your voice clear and crisp. Skip coffee right before your session — it can dry out your vocal cords and add unwanted mouth noise.",
              },
              {
                num: "03",
                title: "Pauses Are Power",
                desc: "Don't rush through transitions. Natural pauses are easy to edit out but hard to fake. Give yourself space to think — it makes for better content.",
              },
            ].map((tip, i) => (
              <FadeIn key={tip.title} delay={i * 0.1}>
                <div className="bg-white border border-brand-border rounded-xl p-8 flex flex-col gap-4">
                  <span
                    className="text-5xl font-bold text-brand-gold-light"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    {tip.num}
                  </span>
                  <h3 className="font-semibold text-brand-text text-lg">
                    {tip.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Highlight */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold text-brand-text"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  Professional gear. Zero effort on your end.
                </h2>
                <p className="text-brand-muted text-base leading-relaxed">
                  Studio B is equipped with professional condenser microphones, professional audio equipment, and a controlled recording environment. The tech is taken care of — your only job is to show up and create.
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Condenser microphones for up to 4 guests",
                    "Acoustic foam panels and bass traps",
                    "High-definition WAV + MP3 recording",
                    "HDMI display for reference and notes",
                    "High-speed WiFi throughout the space",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                      <CheckCircle2 size={16} className="text-brand-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/studio-full.png"
                  alt="Studio B full setup with cameras, microphones, and professional lighting"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
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
              Ready to record your next episode?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book your podcast session in minutes.
            </p>
            <a
              href="/book"
              className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
            >
              Book Podcast Session
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
