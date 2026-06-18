"use client";

import { useState } from "react";
import { Camera, Images } from "lucide-react";

const categories = ["All", "Performances", "Tours", "Academy", "Events", "Heritage"];

const generatePlaceholders = () => {
  const aspects = ["aspect-square", "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/3]", "aspect-square"];
  const labels = [
    "Performance", "Event", "Tour", "Academy", "Heritage",
    "Concert", "Festival", "Training", "Award", "Cultural",
  ];
  const cats = ["Performances", "Tours", "Academy", "Events", "Heritage"];
  
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    aspect: aspects[i % aspects.length],
    label: labels[i % labels.length],
    category: cats[i % cats.length],
  }));
};

const placeholders = generatePlaceholders();

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? placeholders
      : placeholders.filter((p) => p.category === activeFilter);

  return (
    <>
      <section className="bg-[var(--dark-brown)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20 text-center">
          <p className="text-[var(--accent-gold)] text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
            Media Archive
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
            Gallery
          </h1>
          <span className="gold-divider-wide mx-auto mt-4" />
          <p className="text-[var(--gold-light)]/50 text-sm mt-4 font-[family-name:var(--font-body)]">
            {placeholders.length} photos — images will be added soon
          </p>
        </div>
      </section>

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
              Showing {filtered.length} of {placeholders.length}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`gallery-frame break-inside-avoid ${item.aspect} group cursor-pointer`}
              >
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <Camera
                    size={24}
                    className="text-[var(--accent-gold)]/20 mb-2 group-hover:text-[var(--accent-gold)]/40 transition-colors"
                  />
                  <p className="text-[var(--accent-gold)]/25 text-[9px] font-[family-name:var(--font-body)] group-hover:text-[var(--accent-gold)]/50 transition-colors">
                    {item.label} #{item.id}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 py-8 border-t border-[var(--accent-gold)]/10">
            <Images size={32} className="mx-auto text-[var(--accent-gold)]/20 mb-3" />
            <p className="text-sm text-[var(--text-espresso)]/40 font-[family-name:var(--font-body)]">
              Photos will be uploaded soon. The gallery structure is ready to hold your media.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}