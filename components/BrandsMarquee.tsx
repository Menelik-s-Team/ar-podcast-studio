"use client";

import Image from "next/image";

const brands = [
  { name: "WOKB 1680AM", src: "/brand-wokb.png" },
  // Add more brands here as they come in
];

// Duplicate for seamless loop
const allBrands = [...brands, ...brands, ...brands];

export default function BrandsMarquee() {
  return (
    <section className="bg-brand-cream border-y border-brand-border py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
          Brands Creating Out of Studio B
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, var(--color-brand-cream), transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, var(--color-brand-cream), transparent)" }} />

        {/* Scrolling track */}
        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
          {allBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-16 px-8 bg-white border border-brand-border rounded-xl shadow-sm"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={140}
                height={56}
                className="object-contain max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
