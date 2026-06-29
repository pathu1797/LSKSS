"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

const PAGE_SIZE = 12;

export default function GalleryGrid({ images = [], categories = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedIndex, setSelectedIndex] = useState(null);

  /* ── Derived data ── */
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  // Filter first, then slice — keeps DOM minimal
  const visibleImages = useMemo(
    () => filteredImages.slice(0, visibleCount),
    [filteredImages, visibleCount]
  );

  const remainingCount = filteredImages.length - visibleImages.length;
  const hasMore = remainingCount > 0;

  /* ── Reset when tab changes ── */
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setSelectedIndex(null);
  }, [activeCategory]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  /* ── Lightbox helpers ── */
  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    },
    [filteredImages.length]
  );

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    },
    [filteredImages.length]
  );

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

  const categoryCounts = useMemo(() => {
    const counts = { All: images.length };
    for (const cat of categories) {
      if (cat !== "All") {
        counts[cat] = images.filter((img) => img.category === cat).length;
      }
    }
    return counts;
  }, [images, categories]);

  return (
    <>
      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14 flex flex-col items-center">
          {/* ── Filter Tabs ── */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-5 py-2.5 rounded-sm text-sm font-medium font-[family-name:var(--font-body)]
                    tracking-wide transition-all duration-300 cursor-pointer border
                    ${
                      isActive
                        ? "bg-[var(--primary-saffron)] text-white border-[var(--primary-saffron)] shadow-md"
                        : "bg-transparent text-[var(--accent-gold)] border-[var(--accent-gold)]/40 hover:border-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/5"
                    }
                  `}
                >
                  {cat}
                  <span
                    className={`ml-2 text-xs ${
                      isActive ? "text-white/70" : "text-[var(--accent-gold)]/50"
                    }`}
                  >
                    ({categoryCounts[cat] || 0})
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Gallery Grid ── */}
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-sm text-[var(--text-espresso)]/50 font-[family-name:var(--font-body)]">
                No photos in this category yet. Photos will appear here once
                added.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-4 w-full after:content-[''] after:flex-grow-[10]">
                {visibleImages.map((img, idx) => (
                  <div
                    key={img.src}
                    onClick={() => setSelectedIndex(idx)}
                    className="gallery-frame relative h-[200px] sm:h-[250px] lg:h-[300px] min-w-[150px] sm:min-w-[200px] flex-grow overflow-hidden group rounded-sm cursor-pointer bg-[var(--parchment-dark)]"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 select-none transform-gpu backface-hidden"
                    />
                  </div>
                ))}
              </div>

              {/* ── Load More Button ── */}
              {hasMore && (
                <button
                  onClick={handleLoadMore}
                  className="group mt-14 relative inline-flex items-center gap-3 px-10 py-4 rounded-sm font-[family-name:var(--font-body)] font-semibold text-sm tracking-widest uppercase cursor-pointer
                    text-[var(--accent-gold)] border-2 border-[var(--accent-gold)]/50
                    hover:bg-[var(--accent-gold)] hover:text-white hover:border-[var(--accent-gold)]
                    active:scale-[0.97]
                    transition-all duration-300 ease-out
                    shadow-[0_0_0_0_var(--accent-gold)] hover:shadow-[0_4px_20px_-4px_var(--accent-gold)]"
                >
                  {/* Decorative left bar */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-[var(--primary-saffron)] group-hover:h-full transition-all duration-500 rounded-full" />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <polyline points="7 13 12 18 17 13" />
                    <polyline points="7 6 12 11 17 6" />
                  </svg>

                  <span>
                    Load More
                    <span className="ml-2 text-xs opacity-60 font-normal normal-case tracking-normal">
                      ({remainingCount} remaining)
                    </span>
                  </span>

                  {/* Decorative right bar */}
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-[var(--primary-saffron)] group-hover:h-full transition-all duration-500 rounded-full" />
                </button>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {selectedIndex !== null && filteredImages[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={closeModal}
        >
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

          <button
            onClick={showPrev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 text-white/60 hover:text-[var(--accent-gold)] bg-black/40 hover:bg-black/70 p-3 sm:p-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox uses raw <img> intentionally — single visible image, needs instant display */}
            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].alt}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="max-w-full max-h-full object-contain select-none rounded-sm shadow-2xl"
            />
          </div>

          <button
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 text-white/60 hover:text-[var(--accent-gold)] bg-black/40 hover:bg-black/70 p-3 sm:p-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs sm:text-sm tracking-[0.2em] font-mono select-none">
            {selectedIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
