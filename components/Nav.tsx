"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// "/#about" works whether you're already on the homepage (jumps to the
// section) or on another page like /portfolio/photo (navigates home, then
// scrolls once loaded).
const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Videography", href: "/portfolio/video" },
  { label: "Photography", href: "/portfolio/photo" },
  { label: "Editing", href: "/portfolio/editing" },
  { label: "Other", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route/hash changes (e.g. tapping a link)
  const closeMobile = () => setMobileOpen(false);

  const linkClass = `font-sans text-xs uppercase tracking-widest2 transition-colors ${
    scrolled ? "text-muted hover:text-ink" : "text-paper/80 hover:text-paper"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${
        scrolled || mobileOpen ? "bg-paper border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" aria-label="Miracle In Motion — Home" onClick={closeMobile}>
          <Image
            src="/images/logo.png"
            alt="Miracle In Motion"
            width={140}
            height={63}
            className={`h-10 w-auto transition-all ${
              scrolled || mobileOpen ? "invert" : ""
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}

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

        {/* Mobile hamburger toggle */}
        <button
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className={`sm:hidden transition-colors ${
            scrolled || mobileOpen ? "text-ink" : "text-paper"
          }`}
        >
          {mobileOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <nav className="sm:hidden bg-paper border-t border-line px-8 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className="font-sans text-sm uppercase tracking-widest2 text-ink py-3 border-b border-line"
            >
              {link.label}
            </Link>
          ))}

          <p className="font-sans text-xs uppercase tracking-widest2 text-muted pt-4 pb-1">
            Services
          </p>
          {serviceLinks.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              onClick={closeMobile}
              className="font-sans text-sm text-ink/80 py-2 pl-2"
            >
              {service.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={closeMobile}
            className="mt-5 font-sans text-xs uppercase tracking-widest2 border border-ink text-ink px-4 py-3 text-center hover:bg-ink hover:text-paper transition-colors"
          >
            Book a Service
          </Link>
        </nav>
      )}
    </header>
  );
}