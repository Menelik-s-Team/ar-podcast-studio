import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "FAQ | Studio B — AR Podcast Network",
  description:
    "Frequently asked questions about Studio B — booking process, what's included, pricing, equipment, and more.",
};

const STRIPE_CREATOR = "https://buy.stripe.com/7sY4gBgrR7AD5rq9Gnao801";

const faqs = [
  {
    q: "What's included with my booking?",
    a: "Studio B provides professional microphones, audio equipment, a professional camera, Wi-Fi, and a private recording environment. You bring your content — we handle the rest.",
  },
  {
    q: "How do I book?",
    a: "Select your session, complete your secure payment online, and show up at your scheduled time.",
  },
  {
    q: "How many people can record at once?",
    a: "Studio B can accommodate up to 3 guests simultaneously with individual microphone setups.",
  },
  {
    q: "What are your hours?",
    a: "We're available Monday through Friday, 9:00am–8:00pm.",
  },
  {
    q: "Do I need experience to record here?",
    a: "Not at all. Studio B is designed to be accessible for first-time podcasters and seasoned creators alike.",
  },
  {
    q: "What file formats do you record in?",
    a: "We record to high-quality WAV and MP3 formats, ready for editing or direct upload.",
  },
];

export default function FAQPage() {
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
              Frequently Asked Questions
            </h1>
            <p className="text-brand-muted text-xl max-w-xl mx-auto">
              Everything you need to know about Studio B before your first session.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
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
              Still have questions?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Email us at{" "}
              <a
                href="mailto:alexis@ambitiousroots.com"
                className="text-brand-gold hover:text-brand-gold-hover underline"
              >
                alexis@ambitiousroots.com
              </a>{" "}
              or book your session directly.
            </p>
            <a
              href={STRIPE_CREATOR}
              target="_blank"
              rel="noopener noreferrer"
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
