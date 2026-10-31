"use client";

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formState.name);
      data.append("email", formState.email);
      data.append("message", formState.message);
      if (file) data.append("branding", file);

      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please email us directly at alexis@ambitiousroots.com");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-brand-gold-light border border-brand-gold rounded-2xl p-10 text-center flex flex-col gap-4 items-center justify-center min-h-64">
        <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">&#10003;</span>
        </div>
        <h3 className="text-2xl font-bold text-brand-text" style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}>
          Message Sent!
        </h3>
        <p className="text-brand-muted text-sm">We&apos;ll get back to you at {formState.email}.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-brand-border rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-brand-text mb-6" style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}>
        Send a Message
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-brand-muted mb-1.5">Name</label>
          <input
            id="name" type="text" required value={formState.name}
            onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
            placeholder="Your name"
            className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text bg-brand-bg placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-brand-muted mb-1.5">Email</label>
          <input
            id="email" type="email" required value={formState.email}
            onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
            placeholder="your@email.com"
            className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text bg-brand-bg placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-brand-muted mb-1.5">Message</label>
          <textarea
            id="message" required rows={4} value={formState.message}
            onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
            placeholder="Tell us about your project or ask a question..."
            className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text bg-brand-bg placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition resize-none"
          />
        </div>

        {/* Branding Upload */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-brand-muted mb-1.5">
            Logo / Branding <span className="normal-case font-normal">(optional)</span>
          </label>
          {file ? (
            <div className="flex items-center gap-3 bg-brand-gold-light border border-brand-gold rounded-lg px-4 py-3">
              <span className="text-sm text-brand-text font-medium flex-1 truncate">{file.name}</span>
              <button type="button" onClick={() => { setFile(null); if (fileRef.current) fileRef.current.value = ""; }} className="text-brand-muted hover:text-brand-text">
                <X size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full border-2 border-dashed border-brand-border rounded-lg px-4 py-5 flex flex-col items-center gap-2 text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              <Upload size={20} />
              <span className="text-xs font-medium">Upload your logo or brand assets</span>
              <span className="text-xs opacity-60">PNG, JPG, SVG, PDF — up to 10MB</span>
            </button>
          )}
          <input ref={fileRef} type="file" accept=".png,.jpg,.jpeg,.svg,.pdf,.ai,.eps" className="hidden" onChange={handleFile} />
        </div>

        <button
          type="submit" disabled={loading}
          className="bg-brand-gold text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-brand-gold-hover transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
