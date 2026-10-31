import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2, Calendar, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking Confirmed | Studio B — AR Podcast Network",
};

export default function BookingSuccessPage() {
  return (
    <section className="bg-brand-bg min-h-screen py-24">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <div className="bg-white border border-brand-border rounded-2xl p-12 flex flex-col items-center gap-6 shadow-sm">
            <div className="w-20 h-20 bg-brand-gold-light rounded-full flex items-center justify-center">
              <CheckCircle2 size={40} className="text-brand-gold" />
            </div>
            <div>
              <h1
                className="text-3xl font-bold text-brand-text mb-3"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                You&apos;re Booked!
              </h1>
              <p className="text-brand-muted text-base leading-relaxed">
                Payment confirmed. Your Studio B session has been added to the schedule. You&apos;ll receive a confirmation email shortly.
              </p>
            </div>

            <div className="w-full border-t border-brand-border pt-6 flex flex-col gap-4">
              <div className="flex items-start gap-3 text-left">
                <div className="w-9 h-9 bg-brand-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar size={16} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-text">Your session is confirmed</p>
                  <p className="text-xs text-brand-muted">We&apos;ll see you at 50 S Clark Rd, Ocoee, FL 34761</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="w-9 h-9 bg-brand-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-text">Check your email</p>
                  <p className="text-xs text-brand-muted">A receipt and session details are on their way.</p>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="w-full bg-brand-gold text-white font-semibold px-6 py-3 rounded-xl text-sm text-center hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
