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
    <section
      id="top"
      className="relative h-[60vh] sm:h-[100vh] min-h-[440px] w-full overflow-hidden bg-ink"
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Blurred backdrop — fills the frame on mobile where the photo
              (16:9) can't fully cover a tall portrait screen without
              cropping out most of its width. Hidden on larger screens
              where object-cover alone looks fine. */}
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            className="object-cover scale-110 blur-2xl opacity-60 sm:hidden"
          />
          {/* Actual photo — shown in full on mobile (object-contain, no
              crop), switches to a full-bleed crop on sm+ screens. */}
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            className="object-contain sm:object-cover opacity-90 sm:opacity-40"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-ink/50" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-8 flex flex-col justify-center items-center text-center">
        <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-6">
          Miracle In Motion &middot; Brisbane
        </p>
        <h1 className="font-display text-5xl sm:text-6xl text-paper leading-tight max-w-3xl">
          All-Purpose Media Service
        </h1>
        
<a href="#portfolio"
          className="mt-10 font-sans text-xs uppercase tracking-widest2 border border-paper text-paper px-6 py-4 hover:bg-paper hover:text-ink transition-colors"
        >
          Portfolio
        </a>
      </div>

      
        <a href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-paper/70 hover:text-paper transition-colors animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
      </section>
  );
}
