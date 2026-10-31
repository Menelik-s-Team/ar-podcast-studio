import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Session | Studio B — AR Podcast Network",
  description:
    "Book your Studio B recording session. Fill out your details, choose your date and time, and complete payment — all in one place.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-brand-cream py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block bg-brand-gold-light text-brand-gold text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Book Your Session
            </span>
            <h1
              className="text-5xl sm:text-6xl font-bold text-brand-text mb-4"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Let&apos;s Get You in the Studio.
            </h1>
            <p className="text-brand-muted text-lg max-w-lg mx-auto">
              Fill in your details, pick your date and time, and secure your session with payment — all right here.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-bg py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <BookingForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
