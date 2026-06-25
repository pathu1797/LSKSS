"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const categories = ["All", "Performances", "Tours", "Academy", "Events", "Heritage"];

/**
 * Returns a Tailwind aspect-ratio class based on index to create
 * an organic, staggered masonry look instead of a uniform grid.
 */
const getAspectRatio = (index) => {
  if (index % 5 === 0) return "aspect-[3/4]";   // Tall portrait
  if (index % 3 === 0) return "aspect-square";   // Square
  if (index % 2 === 0) return "aspect-[4/3]";    // Standard landscape
  return "aspect-video";                          // Wide landscape (16/9)
};

export default function GalleryGrid({ initialImages }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  /* ── filter logic ── */
  const filtered =
    activeFilter === "All"
      ? initialImages
      : initialImages.filter((img) => img.category === activeFilter);

  /* ── Lightbox navigation handlers ── */
  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === 0 ? filtered.length - 1 : prev - 1
      );
    },
    [filtered.length]
  );

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === filtered.length - 1 ? 0 : prev + 1
      );
    },
    [filtered.length]
  );

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeModal, showPrev, showNext]);

  /* ── Lock body scroll when modal is open ── */
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      {/* ── Sticky filter bar ── */}
      <section className="bg-[var(--bg-parchment)] border-b border-[var(--accent-gold)]/15 sticky top-[104px] z-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center gap-4 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`
                  flex-shrink-0 px-5 py-2.5 text-xs font-medium font-[family-name:var(--font-body)]
                  transition-colors cursor-pointer rounded-sm
                  ${
                    activeFilter === cat
                      ? "bg-[var(--primary-saffron)] text-white"
                      : "bg-[var(--parchment-dark)] text-[var(--text-espresso)]/70 hover:bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/15"
                  }
                `}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs text-[var(--text-espresso)]/40 font-[family-name:var(--font-body)] flex-shrink-0 pl-4">
              Showing {filtered.length} of {initialImages.length}
            </span>
          </div>
        </div>
      </section>

      {/* ── Masonry grid ── */}
      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">

          {/* ── Elegant sub-header with photo count ── */}
          {initialImages.length > 0 && (
            <div className="text-center mb-10">
              <p className="text-sm text-[var(--text-espresso)] font-medium tracking-wide font-[family-name:var(--font-body)]">
                Archive of{" "}
                <span className="text-[var(--primary-saffron)]">
                  {initialImages.length}
                </span>{" "}
                historical and performance moments
              </p>
              <div className="h-[2px] w-24 bg-[var(--accent-gold)] mx-auto mt-4 opacity-50" />
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-sm text-[var(--text-espresso)]/50 font-[family-name:var(--font-body)]">
                {initialImages.length === 0
                  ? "No photos have been added yet. Drop images into the public/gallery/ folder to get started."
                  : "No photos match the selected filter."}
              </p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 w-full">
              {filtered.map((img, idx) => (
                <div
                  key={img.src}
                  onClick={() => setSelectedIndex(idx)}
                  className={`gallery-frame relative w-full mb-6 break-inside-avoid overflow-hidden group cursor-pointer ${getAspectRatio(idx)}`}
                >
                  <Image
                    src={img.src}
                    alt={`Lok Sanskruti Kala Seva Sangh Gallery Image ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                    loading={idx < 8 ? "eager" : "lazy"}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {selectedIndex !== null && filtered[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 sm:top-6 sm:right-6 z-50 text-white/60 hover:text-[var(--accent-gold)] hover:bg-white/10 p-2.5 rounded-full transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={showPrev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 text-white/60 hover:text-[var(--accent-gold)] bg-black/40 hover:bg-black/70 p-3 sm:p-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Active image */}
          <div
            className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[selectedIndex].src}
              alt={`Lok Sanskruti Kala Seva Sangh Gallery Image ${selectedIndex + 1}`}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="max-w-full max-h-full object-contain select-none rounded-sm shadow-2xl"
            />
          </div>

          {/* Next button */}
          <button
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 text-white/60 hover:text-[var(--accent-gold)] bg-black/40 hover:bg-black/70 p-3 sm:p-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Photo counter */}
          <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs sm:text-sm tracking-[0.2em] font-mono select-none">
            {selectedIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
