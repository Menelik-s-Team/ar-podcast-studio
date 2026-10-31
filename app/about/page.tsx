import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { Star, Unlock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Studio B — AR Podcast Network",
  description:
    "AR Podcast Network and Studio B are built for creators who are serious about their message. Learn about our mission and the space we built in the 50 S Clark Rd, Ocoee, FL 34761.",
};

const STRIPE_CREATOR = "https://buy.stripe.com/7sY4gBgrR7AD5rq9Gnao801";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1
              className="text-5xl sm:text-6xl font-bold text-brand-text mb-6"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Built For Creators. Designed For Results.
            </h1>
            <p className="text-brand-muted text-xl max-w-2xl mx-auto">
              AR Podcast Network exists to close the gap between having a message and being heard.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2
                  className="text-3xl font-bold text-brand-text mb-6"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  The Story Behind Studio B
                </h2>
                <div className="flex flex-col gap-4 text-brand-muted text-base leading-relaxed">
                  <p>
                    AR Podcast Network was built on a simple observation: the barrier between a great idea and a broadcast-quality recording was always access. Too many creators with powerful messages were settling for bedroom setups, noisy environments, and subpar audio — not because they didn&apos;t care, but because professional studio time felt out of reach.
                  </p>
                  <p>
                    Studio B changed that. We built a space specifically for creators, coaches, podcasters, and brands who take their content seriously but don&apos;t need the overhead of owning a full production studio.
                  </p>
                  <p>
                    The name &quot;Studio B&quot; is intentional — it&apos;s your space. The second option that doesn&apos;t feel like a compromise. Professional acoustics, great gear, and a seamless booking experience so you can focus on one thing: recording your best work.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-brand-cream border border-brand-border rounded-2xl p-8">
                  <h3
                    className="text-xl font-bold text-brand-text mb-3"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    Our Mission
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    To remove every barrier between a creator and broadcast-quality audio — giving anyone with a message the same tools as the top 1% of content producers.
                  </p>
                </div>
                <div className="bg-brand-gold-light border border-brand-gold/30 rounded-2xl p-8">
                  <h3
                    className="text-xl font-bold text-brand-text mb-3"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    Who We Serve
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Independent podcasters. Business owners building brand authority. Coaches sharing their expertise. Organizations creating content at scale. If your voice matters — Studio B is built for you.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                What We Stand For
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Star size={28} className="text-brand-gold" />,
                title: "Quality",
                desc: "We do not compromise on the recording environment. Every session in Studio B meets broadcast-quality standards — the same standard you would expect from a major production house.",
              },
              {
                icon: <Unlock size={28} className="text-brand-gold" />,
                title: "Accessibility",
                desc: "Great audio should not be a privilege. We built Studio B so that independent creators have access to the same quality gear and environment as established media brands.",
              },
              {
                icon: <Award size={28} className="text-brand-gold" />,
                title: "Professionalism",
                desc: "From the booking process to the recording session, everything is designed to be smooth, clear, and respectful of your time. Show up. Record. Leave with your best work.",
              },
            ].map((val, i) => (
              <FadeIn key={val.title} delay={i * 0.1}>
                <div className="bg-white border border-brand-border rounded-xl p-8 flex flex-col gap-4">
                  <div className="w-14 h-14 bg-brand-gold-light rounded-full flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-brand-text"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Block */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white border border-brand-border rounded-2xl p-10">
              <h2
                className="text-2xl font-bold text-brand-text mb-8 text-center"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Get In Touch
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:alexis@ambitiousroots.com"
                    className="text-brand-gold font-medium text-sm hover:text-brand-gold-hover"
                  >
                    alexis@ambitiousroots.com
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">
                    Hours
                  </h4>
                  <p className="text-brand-text text-sm">Monday – Friday</p>
                  <p className="text-brand-text text-sm">9:00am – 8:00pm</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">
                    Location
                  </h4>
                  <p className="text-brand-text text-sm">50 S Clark Rd, Ocoee, FL 34761</p>
                </div>
              </div>
            </div>
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
              Ready to record?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book your session online and show up ready to create.
            </p>
            <a
              href={STRIPE_CREATOR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
            >
              Book a Session
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
