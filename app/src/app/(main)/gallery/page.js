import fs from "fs";
import path from "path";
import GalleryGrid from "@/components/GalleryGrid";

/* ── Supported image extensions ── */
const IMAGE_EXTENSIONS = new Set([
  ".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg",
]);

/* ── Category inference from filename prefix ──
   Files named  performances-*.jpg  →  "Performances"
   Files named  tours-*.jpg         →  "Tours"
   No prefix or unrecognised        →  "All"             */
const PREFIX_TO_CATEGORY = {
  performances: "Performances",
  performance: "Performances",
  tours: "Tours",
  tour: "Tours",
  academy: "Academy",
  events: "Events",
  event: "Events",
  heritage: "Heritage",
};

function inferCategory(filename) {
  const lower = filename.toLowerCase();
  for (const [prefix, category] of Object.entries(PREFIX_TO_CATEGORY)) {
    if (lower.startsWith(prefix)) return category;
  }
  return "All"; // uncategorised — visible under "All"
}

export default function GalleryPage() {
  /* ── Read the public/gallery directory at build / request time ── */
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  let imagePaths = [];

  if (fs.existsSync(galleryDir)) {
    const files = fs.readdirSync(galleryDir);

    imagePaths = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return IMAGE_EXTENSIONS.has(ext);
      })
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => ({
        src: `/gallery/${file}`,
        category: inferCategory(file),
      }));
  }

  return (
    <>
      {/* ── Hero header ── */}
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
            {imagePaths.length > 0
              ? `${imagePaths.length} photo${imagePaths.length === 1 ? "" : "s"}`
              : "Photos will appear here once added to the gallery"}
          </p>
        </div>
      </section>

      {/* ── Client‑side filter bar + masonry grid ── */}
      <GalleryGrid initialImages={imagePaths} />
    </>
  );
}