"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Studio" },
  { href: "/podcast", label: "Podcast" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white"
      style={{ boxShadow: "0 1px 0 #E8E0D0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div>
              <span
                className="text-lg font-bold text-brand-text"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                AR Podcast Network
              </span>
              <div>
                <span className="inline-block bg-brand-gold text-white text-xs font-semibold px-2 py-0.5 rounded-full leading-tight">
                  Studio B
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-gold"
                      : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Book Now Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="hidden md:inline-block bg-brand-gold text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:bg-brand-gold-hover hover:scale-105 active:scale-95"
            >
              Book Now
            </Link>
            <button
              className="md:hidden p-2 text-brand-text"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col px-6 py-8 gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-lg font-medium border-b border-brand-border transition-colors ${
                  isActive ? "text-brand-gold" : "text-brand-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="mt-6 bg-brand-gold text-white font-semibold px-6 py-3 rounded-lg text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
