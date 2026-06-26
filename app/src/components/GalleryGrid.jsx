"use client";

import { useState, useEffect, useCallback } from "react";

export default function GalleryGrid({ initialImages }) {
  const [visibleCount, setVisibleCount] = useState(24);
  const [selectedIndex, setSelectedIndex] = useState(null);

  /* ── Batch loading ── */
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  /* ── Lightbox navigation handlers ── */
  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === 0 ? initialImages.length - 1 : prev - 1
      );
    },
    [initialImages.length]
  );

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === initialImages.length - 1 ? 0 : prev + 1
      );
    },
    [initialImages.length]
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
      {/* ── Justified row gallery ── */}
      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14 flex flex-col items-center">
          {initialImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-sm text-[var(--text-espresso)]/50 font-[family-name:var(--font-body)]">
                No photos have been added yet. Drop images into the
                public/gallery/ folder to get started.
              </p>
            </div>
          ) : (
            <>
              {/* Grid */}
              <div className="flex flex-wrap gap-4 w-full after:content-[''] after:flex-grow-[10]">
                {initialImages.slice(0, visibleCount).map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className="gallery-frame relative h-[200px] sm:h-[250px] lg:h-[300px] min-w-[150px] sm:min-w-[200px] flex-grow overflow-hidden group rounded-sm cursor-pointer bg-[var(--parchment-dark)]"
                  >
                    <img
                      src={src}
                      alt={`Lok Sanskruti Kala Seva Sangh Gallery Image ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className="w-full h-full block object-cover object-top transition-transform duration-700 group-hover:scale-105 select-none transform-gpu backface-hidden"
                    />
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < initialImages.length && (
                <button
                  onClick={handleLoadMore}
                  className="mt-12 px-8 py-3 rounded-sm text-[var(--accent-gold)] border border-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-white transition-colors duration-300 font-[family-name:var(--font-body)] font-medium tracking-wide cursor-pointer"
                >
                  Load More Photos
                </button>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {selectedIndex !== null && initialImages[selectedIndex] && (
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

          {/* Active image — uses fill + object-contain for full uncropped view */}
          <div
            className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={initialImages[selectedIndex]}
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
            {selectedIndex + 1} / {initialImages.length}
          </div>
        </div>
      )}
    </>
  );
}
