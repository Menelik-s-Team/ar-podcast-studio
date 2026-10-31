"use client";

import { useState } from "react";
import { CheckCircle2, ArrowLeft, Calendar, CreditCard, ExternalLink } from "lucide-react";

const STRIPE_CREATOR = "https://buy.stripe.com/7sY4gBgrR7AD5rq9Gnao801";
const GOOGLE_CALENDAR_URL = "https://calendar.app.google/epjrfyBv3QX8D4dE7";

const includes = [
  "Up to 3 guests with individual microphones",
  "Acoustically treated recording environment",
  "WAV + MP3 file export",
  "High-speed WiFi",
  "Professional camera",
  "Private, distraction-free environment",
];

export default function BookingFlow() {
  const [step, setStep] = useState<1 | 2>(1);
  const [calendarOpened, setCalendarOpened] = useState(false);

  const openCalendar = () => {
    window.open(GOOGLE_CALENDAR_URL, "_blank", "noopener,noreferrer");
    setCalendarOpened(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-12">
        <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${step === 1 ? "bg-brand-gold text-white shadow-md" : "bg-brand-gold-light text-brand-gold"}`}>
          <Calendar size={15} />
          <span>1. Choose Your Time</span>
        </div>
        <div className="w-10 h-px bg-brand-border mx-3 flex-shrink-0" />
        <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${step === 2 ? "bg-brand-gold text-white shadow-md" : "bg-white border border-brand-border text-brand-muted"}`}>
          <CreditCard size={15} />
          <span>2. Complete Payment</span>
        </div>
      </div>

      {/* Step 1: Calendar */}
      {step === 1 && (
        <div className="flex flex-col gap-6">
          {/* Calendar card */}
          <div className="bg-white border border-brand-border rounded-2xl p-10 flex flex-col items-center gap-6 text-center shadow-sm">
            <div className="w-20 h-20 bg-brand-gold-light rounded-full flex items-center justify-center">
              <Calendar size={36} className="text-brand-gold" />
            </div>
            <div>
              <h3
                className="text-2xl font-bold text-brand-text mb-2"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Pick Your Date &amp; Time
              </h3>
              <p className="text-brand-muted text-sm max-w-sm mx-auto">
                Click below to open our booking calendar. Choose your preferred date and time, then come back here to complete your payment.
              </p>
            </div>
            <button
              onClick={openCalendar}
              className="inline-flex items-center gap-2 bg-brand-gold text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <Calendar size={18} />
              Open Booking Calendar
              <ExternalLink size={15} className="opacity-70" />
            </button>
            {calendarOpened && (
              <p className="text-xs text-brand-muted">
                Calendar opened in a new tab. Come back here once you&apos;ve selected your time.
              </p>
            )}
          </div>

          {calendarOpened && (
            <div className="bg-brand-gold-light border border-brand-gold/30 rounded-xl px-6 py-4 text-sm text-brand-text text-center">
              Done picking your time? Click below to lock in your session with payment.
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => setStep(2)}
              disabled={!calendarOpened}
              className="bg-brand-gold text-white font-semibold px-10 py-4 rounded-xl text-base hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95 shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
            >
              I&apos;ve Chosen My Time &mdash; Continue &rarr;
            </button>
            {!calendarOpened && (
              <p className="text-xs text-brand-muted mt-3">Open the calendar above first to continue.</p>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Confirm & Pay */}
      {step === 2 && (
        <div className="flex flex-col gap-8">
          {/* Order Summary */}
          <div className="bg-white border border-brand-border rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block bg-brand-gold-light text-brand-gold text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  Your Booking
                </span>
                <h3
                  className="text-2xl font-bold text-brand-text"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  Studio B — Recording Session
                </h3>
                <p className="text-brand-muted text-sm mt-1">
                  50 S Clark Rd, Ocoee, FL 34761
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div
                  className="text-4xl font-bold text-brand-gold"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  $100
                </div>
                <div className="text-brand-muted text-sm">/hr</div>
              </div>
            </div>

            <div className="border-t border-brand-border pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
                What&apos;s Included
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                    <CheckCircle2 size={14} className="text-brand-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-brand-gold-light border border-brand-gold/30 rounded-xl px-6 py-4 text-sm text-brand-text text-center">
            Your time is held — complete your payment to lock in your session.
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={STRIPE_CREATOR}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md bg-brand-gold text-white font-bold px-10 py-5 rounded-xl text-lg text-center hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Complete Your Booking &rarr;
            </a>
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1.5 text-sm text-brand-muted hover:text-brand-text transition-colors"
            >
              <ArrowLeft size={14} />
              Go back and change my time
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
