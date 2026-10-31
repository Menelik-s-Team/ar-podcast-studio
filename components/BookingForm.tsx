"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM",
];

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    date: "",
    time: "",
    topics: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (field: string, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create checkout");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text bg-brand-bg placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition";
  const labelClass =
    "block text-xs font-semibold uppercase tracking-widest text-brand-muted mb-1.5";

  return (
    <div className="bg-white border border-brand-border rounded-2xl p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text" required value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email" required value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone + Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel" value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="(555) 000-0000"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Number of Guests</label>
            <select
              value={form.guests}
              onChange={(e) => set("guests", e.target.value)}
              className={inputClass}
            >
              <option value="1">Just me (1 person)</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests (max)</option>
            </select>
          </div>
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Preferred Date</label>
            <input
              type="date" required value={form.date}
              min={getTodayString()}
              onChange={(e) => set("date", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Preferred Time</label>
            <select
              required value={form.time}
              onChange={(e) => set("time", e.target.value)}
              className={inputClass}
            >
              <option value="">Select a time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Topics */}
        <div>
          <label className={labelClass}>What are you recording?</label>
          <textarea
            required rows={4} value={form.topics}
            onChange={(e) => set("topics", e.target.value)}
            placeholder="Tell us your show name, topics you'll be covering, or anything else we should know before your session..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* What's included reminder */}
        <div className="bg-brand-gold-light border border-brand-gold/30 rounded-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">Your session includes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {[
              "Up to 3 guests with individual mics",
              "WAV + MP3 file export",
              "Acoustically treated environment",
              "Professional camera",
              "High-speed WiFi",
              "Private, distraction-free space",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-brand-muted">
                <CheckCircle2 size={12} className="text-brand-gold flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-brand-gold text-white font-bold px-6 py-4 rounded-xl text-base hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
        >
          {loading ? "Setting up your booking..." : "Complete Your Booking →"}
        </button>
        <p className="text-center text-xs text-brand-muted">
          You&apos;ll be taken to our secure checkout to complete payment. $100/hr.
        </p>
      </form>
    </div>
  );
}
