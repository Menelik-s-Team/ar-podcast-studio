import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Mic2,
  Wifi,
  Monitor,
  Volume2,
  Lock,
  FileAudio,
  Podcast,
  Video,
  Building2,
  GraduationCap,
  Users,
  Tag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Studio B — Professional Recording Space | AR Podcast Network",
  description:
    "Step into Studio B — a professionally equipped podcast recording space in the Atlanta Metro Area with broadcast-quality acoustics, included microphones, and private environment.",
};

const STRIPE_CREATOR = "https://buy.stripe.com/7sY4gBgrR7AD5rq9Gnao801";

export default function StudioPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block bg-brand-gold-light text-brand-gold text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              The Space
            </span>
            <h1
              className="text-5xl sm:text-6xl font-bold text-brand-text mb-6"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Step Into Studio B.
            </h1>
            <p className="text-brand-muted text-xl max-w-2xl mx-auto">
              A purpose-built recording environment designed for creators, professionals, and brands who need broadcast-quality audio without the overhead of owning a studio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Studio Photo Feature */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/studio-room-2.png"
                  alt="Studio B professional recording room with cameras, microphones, and hexagonal lighting"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold text-brand-text"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  Engineered for sound. Built for comfort.
                </h2>
                <p className="text-brand-text font-medium text-lg leading-snug mb-1">
                  A comfortable space to bring your ideas to life.
                </p>
                <p className="text-brand-muted text-base leading-relaxed">
                  Studio B is designed to make podcasting feel easy, whether it&apos;s your very first episode or your hundredth. With professional microphones, great sound, and a comfortable, distraction-free setup, everything you need is ready when you arrive.
                </p>
                <p className="text-brand-muted text-base leading-relaxed">
                  Just bring your ideas and your voice. We&apos;ll handle the rest.
                </p>
                <a
                  href="/book"
                  className="inline-flex w-fit bg-brand-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
                >
                  Book the Studio &rarr;
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Equipment & Features */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                What&apos;s Included
              </h2>
              <p className="text-brand-muted text-lg">
                Every session comes with everything you need to record.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Mic2 size={22} className="text-brand-gold" />,
                text: "Professional microphones (up to 3 guests)",
              },
              {
                icon: <FileAudio size={22} className="text-brand-gold" />,
                text: "Recording to WAV/MP3",
              },
              {
                icon: <Wifi size={22} className="text-brand-gold" />,
                text: "Wi-Fi",
              },
              {
                icon: <Lock size={22} className="text-brand-gold" />,
                text: "Private, distraction-free environment",
              },
              {
                icon: <Volume2 size={22} className="text-brand-gold" />,
                text: "Audio equipment",
              },
              {
                icon: <Video size={22} className="text-brand-gold" />,
                text: "Professional camera",
              },
            ].map((item, i) => (
              <FadeIn key={item.text} delay={i * 0.07}>
                <div className="bg-white border border-brand-border rounded-xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-brand-text text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Who It&apos;s For
              </h2>
              <p className="text-brand-muted text-lg">
                Studio B is built for anyone with a message worth sharing.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { icon: <Podcast size={28} className="text-brand-gold" />, label: "Podcasters" },
              { icon: <Video size={28} className="text-brand-gold" />, label: "Creators" },
              { icon: <Building2 size={28} className="text-brand-gold" />, label: "Business Owners" },
              { icon: <GraduationCap size={28} className="text-brand-gold" />, label: "Coaches" },
              { icon: <Users size={28} className="text-brand-gold" />, label: "Organizations" },
              { icon: <Tag size={28} className="text-brand-gold" />, label: "Brands" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.07}>
                <div className="bg-white border border-brand-border rounded-xl p-5 flex flex-col items-center gap-3 text-center hover:border-brand-gold transition-colors">
                  <div className="w-14 h-14 bg-brand-gold-light rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-brand-text text-sm font-semibold">
                    {item.label}
                  </span>
                </div>
              </FadeIn>
            ))}
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
              Book the studio today.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book your session and show up ready to record.
            </p>
            <a
              href={STRIPE_CREATOR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
            >
              Book Your Session ($100/hr)
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
