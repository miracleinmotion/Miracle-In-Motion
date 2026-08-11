"use client";

import { useState } from "react";
import Image from "next/image";
import { photoCategories, getPhotosForCategory, getAllPhotos } from "@/lib/photography";

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos =
    activeFilter === "all"
      ? getAllPhotos()
      : getPhotosForCategory(activeFilter).map((src) => ({ src, category: activeFilter }));

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-14">
        <button
          onClick={() => setActiveFilter("all")}
          className={`font-sans text-xs uppercase tracking-widest2 px-5 py-2 border transition-colors ${
            activeFilter === "all"
              ? "bg-ink text-paper border-ink"
              : "border-line text-muted hover:border-ink hover:text-ink"
          }`}
        >
          All
        </button>
        {photoCategories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveFilter(cat.slug)}
            className={`font-sans text-xs uppercase tracking-widest2 px-5 py-2 border transition-colors ${
              activeFilter === cat.slug
                ? "bg-ink text-paper border-ink"
                : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-2 sm:columns-3 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => openLightbox(i)}
            className="block w-full relative overflow-hidden group break-inside-avoid"
          >
            <Image
              src={photo.src}
              alt=""
              width={800}
              height={1200}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center px-4">
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-6 right-6 text-paper/70 hover:text-paper transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={showPrev}
            aria-label="Previous"
            className="absolute left-4 sm:left-8 text-paper/70 hover:text-paper transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full aspect-[3/4]">
            <Image
              src={photos[lightboxIndex].src}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={showNext}
            aria-label="Next"
            className="absolute right-4 sm:right-8 text-paper/70 hover:text-paper transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
