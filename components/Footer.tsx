import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                AR Podcast Network
              </span>
              <span className="inline-block bg-brand-gold text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                Studio B
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Professional podcast recording in a space built for creators.
            </p>
          </div>

          {/* Right: Links + Contact */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/studio", label: "Studio" },
                  { href: "/podcast", label: "Podcast" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:alexis@ambitiousroots.com"
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  >
                    alexis@ambitiousroots.com
                  </a>
                </li>
                <li className="text-sm text-gray-400">
                  <span className="block font-medium text-gray-300 mb-0.5">Hours</span>
                  Monday–Friday
                  <br />
                  9:00am–8:00pm
                </li>
                <li className="text-sm text-gray-400">
                  <span className="block font-medium text-gray-300 mb-0.5">Location</span>
                  50 S Clark Rd, Ocoee, FL 34761
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AR Podcast Network. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">Studio B — Ocoee, FL</p>
        </div>
      </div>
    </footer>
  );
}
