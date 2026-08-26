"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = Array.from({ length: 9 }, (_, i) => `/images/slideshow/${i + 1}.jpg`);

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="w-full sm:relative sm:h-[100vh] sm:min-h-[600px] sm:overflow-hidden sm:bg-ink">
      {/* Photo block — a normal compact landscape block on mobile (matches
          the photos' own ~16:9 ratio, no crop, no blur letterboxing),
          becomes a full-bleed absolute background on sm+ screens. */}
      <div className="relative aspect-video w-full overflow-hidden bg-ink sm:absolute sm:inset-0 sm:aspect-auto">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-[1500ms] ${
              i === index ? "opacity-100 sm:opacity-40" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-ink/30 sm:bg-ink/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <p className="font-sans text-[9px] sm:text-xs uppercase tracking-widest2 text-brass mb-1.5 sm:mb-6">
            Miracle In Motion &middot; Brisbane
          </p>
          <h1 className="font-display text-xl sm:text-6xl text-paper leading-tight max-w-3xl">
            All-Purpose Media Service
          </h1>
        </div>
      </div>

      {/* Portfolio button + scroll arrow — sit below the photo in normal
          page flow on mobile, switch back to overlaying the bottom of the
          photo on sm+ screens (matches the original desktop look). */}
      <div className="flex flex-col items-center gap-5 py-8 sm:absolute sm:inset-x-0 sm:bottom-8 sm:py-0 sm:z-10">
        <a
          href="#portfolio"
          className="font-sans text-xs uppercase tracking-widest2 border border-ink text-ink px-6 py-4 hover:bg-ink hover:text-paper transition-colors sm:border-paper sm:text-paper sm:hover:bg-paper sm:hover:text-ink"
        >
          Portfolio
        </a>
        <a
          href="#about"
          aria-label="Scroll down"
          className="text-muted hover:text-ink transition-colors animate-bounce sm:text-paper/70 sm:hover:text-paper"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
