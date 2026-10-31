import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Studio B — AR Podcast Network",
  description:
    "Get in touch with Studio B. Email us at alexis@ambitiousroots.com or book your session directly online.",
};

const STRIPE_CREATOR = "https://buy.stripe.com/7sY4gBgrR7AD5rq9Gnao801";

const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.app.google/epjrfyBv3QX8D4dE7";

export default function ContactPage() {
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
              Let&apos;s Get You Recording.
            </h1>
            <p className="text-brand-muted text-xl max-w-xl mx-auto">
              Have a question before you book? Reach out — we&apos;re happy to help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <FadeIn>
              <div className="flex flex-col gap-8">
                <div>
                  <h2
                    className="text-3xl font-bold text-brand-text mb-4"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    Studio B Contact Info
                  </h2>
                  <p className="text-brand-muted text-base leading-relaxed">
                    Ready to book? Skip the form and go straight to secure online booking. Have a specific question? Use the form or email us directly.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-text text-sm mb-0.5">Email</h4>
                      <a
                        href="mailto:alexis@ambitiousroots.com"
                        className="text-brand-muted text-sm hover:text-brand-gold transition-colors"
                      >
                        alexis@ambitiousroots.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-text text-sm mb-0.5">Hours</h4>
                      <p className="text-brand-muted text-sm">Monday – Friday</p>
                      <p className="text-brand-muted text-sm">9:00am – 8:00pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-text text-sm mb-0.5">Location</h4>
                      <p className="text-brand-muted text-sm">50 S Clark Rd, Ocoee, FL 34761</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/book"
                    className="inline-block bg-brand-gold text-white font-semibold px-7 py-3 rounded-lg hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
                  >
                    Book Your Session &rarr;
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right: Contact Form */}
            <FadeIn delay={0.15}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Book Your Session — Google Calendar */}
      <section className="bg-brand-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8">
              <h2
                className="text-3xl font-bold text-brand-text mb-3"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Pick Your Date &amp; Time
              </h2>
              <p className="text-brand-muted text-base">
                Choose an available slot and lock in your session.
              </p>
            </div>
            {GOOGLE_CALENDAR_EMBED_URL ? (
              <div className="rounded-2xl overflow-hidden border border-brand-border shadow-sm">
                <iframe
                  src={GOOGLE_CALENDAR_EMBED_URL}
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  title="Book a Studio B Session"
                />
              </div>
            ) : (
              <div className="bg-white border-2 border-dashed border-brand-border rounded-2xl p-16 flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-brand-gold-light rounded-full flex items-center justify-center">
                  <Clock size={28} className="text-brand-gold" />
                </div>
                <h3
                  className="text-xl font-bold text-brand-text"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  Online Booking Coming Soon
                </h3>
                <p className="text-brand-muted text-sm max-w-sm">
                  Real-time availability will be shown here. In the meantime, email us to schedule your session.
                </p>
                <a
                  href="mailto:alexis@ambitiousroots.com"
                  className="inline-block bg-brand-gold text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
                >
                  Email to Book &rarr;
                </a>
              </div>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
