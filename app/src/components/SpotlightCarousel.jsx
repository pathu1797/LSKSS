"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SpotlightCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-12 px-4 sm:px-12">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-[var(--parchment-dark)] border border-[var(--accent-gold)] text-[var(--accent-gold)] p-3 rounded-full shadow-lg hover:bg-[var(--accent-gold)] hover:text-white transition-colors focus:outline-none"
        aria-label="Previous press coverage"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-[var(--parchment-dark)] border border-[var(--accent-gold)] text-[var(--accent-gold)] p-3 rounded-full shadow-lg hover:bg-[var(--accent-gold)] hover:text-white transition-colors focus:outline-none"
        aria-label="Next press coverage"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Track */}
      <div className="relative h-72 sm:h-80 flex items-center justify-center perspective-[1000px]">
        {images.map((src, index) => {
          let offset = index - activeIndex;
          
          // Wrap around logic for infinite feel
          if (offset < -Math.floor(images.length / 2)) offset += images.length;
          if (offset > Math.floor(images.length / 2)) offset -= images.length;

          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          
          // Hide items that are far away from the center to improve performance
          if (absOffset > 2) return null;

          return (
            <div
              key={index}
              className="absolute transition-all duration-700 ease-in-out card-institutional p-2 bg-white flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (!isActive) {
                  // If clicked on an adjacent item, navigate to it
                  setActiveIndex(index);
                }
              }}
              style={{
                transform: `translateX(${offset * 90}%) scale(${isActive ? 1 : 0.8})`,
                opacity: isActive ? 1 : absOffset === 1 ? 0.5 : 0,
                zIndex: isActive ? 10 : 5 - absOffset,
                width: "320px",
                height: "100%",
                filter: isActive ? "none" : "blur(2px)",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Press coverage ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
