"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// "/#about" works whether you're already on the homepage (jumps to the
// section) or on another page like /portfolio/photo (navigates home, then
// scrolls once loaded).
const serviceLinks = [
  { label: "Videography", href: "/portfolio/video" },
  { label: "Photography", href: "/portfolio/photo" },
  { label: "Editing", href: "/portfolio/editing" },
  { label: "Other", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = `font-sans text-xs uppercase tracking-widest2 transition-colors ${
    scrolled ? "text-muted hover:text-ink" : "text-paper/80 hover:text-paper"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-paper border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" aria-label="Miracle In Motion — Home">
          <Image
            src="/images/logo.png"
            alt="Miracle In Motion"
            width={140}
            height={63}
            className={`h-10 w-auto transition-all ${scrolled ? "invert" : ""}`}
            priority
          />
        </Link>

        <nav className="hidden sm:flex items-center gap-8">
          <Link href="/#about" className={linkClass}>About</Link>
          <Link href="/#portfolio" className={linkClass}>Portfolio</Link>
          <Link href="/#contact" className={linkClass}>Contact</Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button className={`${linkClass} flex items-center gap-1`}>
              Services
              <span className="text-[10px]">▾</span>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-ink text-paper shadow-lg w-44 py-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-4 py-2 font-sans text-xs uppercase tracking-widest2 text-paper/80 hover:text-brass hover:bg-paper/5 transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/#contact"
            className={`font-sans text-xs uppercase tracking-widest2 border px-4 py-2 transition-colors ${
              scrolled
                ? "border-ink text-ink hover:bg-ink hover:text-paper"
                : "border-paper text-paper hover:bg-paper hover:text-ink"
            }`}
          >
            Book a Service
          </Link>
        </nav>
      </div>
    </header>
  );
}
