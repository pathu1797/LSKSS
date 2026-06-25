"use client";

import Image from "next/image";
import { useState } from "react";
import { Images } from "lucide-react";

const categories = ["All", "Performances", "Tours", "Academy", "Events", "Heritage"];

export default function GalleryGrid({ initialImages }) {
  const [activeFilter, setActiveFilter] = useState("All");

  /* ── filter logic ── */
  const filtered =
    activeFilter === "All"
      ? initialImages
      : initialImages.filter((img) => img.category === activeFilter);

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
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Images size={40} className="mx-auto text-[var(--accent-gold)]/25 mb-4" />
              <p className="text-sm text-[var(--text-espresso)]/50 font-[family-name:var(--font-body)]">
                {initialImages.length === 0
                  ? "No photos have been added yet. Drop images into the public/gallery/ folder to get started."
                  : "No photos match the selected filter."}
              </p>
            </div>
          ) : (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filtered.map((img, idx) => (
                <div
                  key={img.src}
                  className="gallery-frame relative w-full overflow-hidden break-inside-avoid group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={`Gallery image ${idx + 1}`}
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    loading={idx < 8 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          )}

          {initialImages.length > 0 && (
            <div className="text-center mt-12 py-8 border-t border-[var(--accent-gold)]/10">
              <Images size={32} className="mx-auto text-[var(--accent-gold)]/20 mb-3" />
              <p className="text-sm text-[var(--text-espresso)]/40 font-[family-name:var(--font-body)]">
                {initialImages.length} photos in the gallery
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
