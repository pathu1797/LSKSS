const fs = require("fs");
const path = require("path");

/* ── Paths ── */
const SOURCE = path.resolve(
  __dirname,
  "Photos To be used in Website",
  "Gallery",
  "All"
);
const DEST = path.resolve(__dirname, "app", "public", "images", "gallery");
const DATA_OUT = path.resolve(
  __dirname,
  "app",
  "src",
  "data",
  "galleryData.js"
);

/* ── Old gallery to clean up ── */
const OLD_GALLERY = path.resolve(__dirname, "app", "public", "gallery");

const green = (t) => `\x1b[32m${t}\x1b[0m`;
const yellow = (t) => `\x1b[33m${t}\x1b[0m`;
const cyan = (t) => `\x1b[36m${t}\x1b[0m`;
const red = (t) => `\x1b[31m${t}\x1b[0m`;

const IMAGE_EXTS = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif"]);

function isImage(file) {
  return IMAGE_EXTS.has(path.extname(file).toLowerCase());
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDir(src, dest) {
  ensureDir(dest);
  let count = 0;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      count += copyDir(srcPath, destPath);
    } else if (isImage(entry.name)) {
      fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }
  return count;
}

function rmDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    return true;
  }
  return false;
}

/* ── Main ── */
console.log("\n" + "=".repeat(60));
console.log("  Gallery Migration Script v2");
console.log("=".repeat(60) + "\n");

/* Step 0: Clean up old public/gallery/ */
console.log(yellow("Step 0: Cleaning up old public/gallery/...\n"));
if (rmDir(OLD_GALLERY)) {
  console.log(green("  REMOVED") + ` ${OLD_GALLERY}\n`);
} else {
  console.log(yellow("  SKIPPED") + " (not found)\n");
}

/* Step 1: Clean destination and copy files */
console.log(yellow("Step 1: Copying images to public/images/gallery/...\n"));
if (fs.existsSync(DEST)) {
  fs.rmSync(DEST, { recursive: true, force: true });
  console.log(yellow("  Cleared existing destination\n"));
}

const copied = copyDir(SOURCE, DEST);
console.log(green(`  Copied ${copied} images\n`));

/* Step 2: Generate galleryData.js */
console.log(yellow("Step 2: Generating galleryData.js...\n"));

const galleryItems = [];

const looseFiles = fs
  .readdirSync(DEST)
  .filter((f) => {
    const full = path.join(DEST, f);
    return !fs.statSync(full).isDirectory() && isImage(f);
  })
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

for (const file of looseFiles) {
  galleryItems.push({
    src: `/images/gallery/${encodeURIComponent(file)}`,
    category: "All",
    alt: `Lok Sanskruti Kala Seva Sangh`,
  });
}

const subdirs = fs
  .readdirSync(DEST)
  .filter((f) => fs.statSync(path.join(DEST, f)).isDirectory())
  .sort();

for (const dir of subdirs) {
  const dirPath = path.join(DEST, dir);
  const files = fs
    .readdirSync(dirPath)
    .filter((f) => isImage(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const category = dir;

  for (const file of files) {
    galleryItems.push({
      src: `/images/gallery/${encodeURIComponent(dir)}/${encodeURIComponent(file)}`,
      category,
      alt: `Lok Sanskruti Kala Seva Sangh — ${category}`,
    });
  }
}

const dataContent = `const galleryData = ${JSON.stringify(galleryItems, null, 2)};

export default galleryData;
`;

ensureDir(path.dirname(DATA_OUT));
fs.writeFileSync(DATA_OUT, dataContent, "utf-8");

console.log(green(`  Generated ${galleryItems.length} entries\n`));

const byCat = {};
for (const item of galleryItems) {
  byCat[item.category] = (byCat[item.category] || 0) + 1;
}
for (const [cat, count] of Object.entries(byCat)) {
  console.log(cyan(`    ${cat}: ${count}`));
}

console.log("\n" + "=".repeat(60));
console.log("  Done! You can delete this script.");
console.log("=".repeat(60) + "\n");
