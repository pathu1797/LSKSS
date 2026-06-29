import GalleryGrid from "@/components/GalleryGrid";
import galleryData from "@/data/galleryData";

export const metadata = {
  title: "Gallery | लोकसंस्कृती कला सेवा संघ",
  description:
    "Browse photos from concerts, Academy events, achievements, and the Philadelphia US tour — Lok Sanskruti Kala Seva Sangh.",
};

const CATEGORIES = ["All", "Concerts", "Academy", "Achievements", "Philadelphia (US)"];

export default function GalleryPage() {
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
        </div>
      </section>

      <GalleryGrid images={galleryData} categories={CATEGORIES} />
    </>
  );
}