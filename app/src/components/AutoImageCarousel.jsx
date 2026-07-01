"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AutoImageCarousel({ images, altText = "Carousel Image", sizes = "(max-width: 1024px) 100vw, 50vw" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="w-full h-full bg-[var(--parchment-dark)]" />;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-t-md bg-black/90">
      {images.map((src, index) => (
        <div 
          key={src} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Blurred background layer */}
          <Image
            src={src}
            alt=""
            fill
            sizes={sizes}
            className="object-cover blur-xl opacity-40 scale-110"
            priority={index === 0}
          />
          {/* Main uncropped image */}
          <Image
            src={src}
            alt={`${altText} ${index + 1}`}
            fill
            sizes={sizes}
            className="object-contain drop-shadow-2xl"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
