const fs = require("fs");
const path = require("path");

/* ── Configuration ── */
const SOURCE_DIR = path.resolve(
  __dirname,
  "Photos To be used in Website",
  "Gallery"
);
const PUBLIC_GALLERY = path.resolve(__dirname, "app", "public", "gallery");
const ACADEMY_DEST = path.resolve(PUBLIC_GALLERY, "academy");

const DELETE_IDS = [
  2, 3, 4, 5, 6, 8, 21, 32, 33, 36, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  51, 132,
];

const EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"];
const ACADEMY_COUNT = 46;

/* ── Helpers ── */
const green = (t) => `\x1b[32m${t}\x1b[0m`;
const red = (t) => `\x1b[31m${t}\x1b[0m`;
const yellow = (t) => `\x1b[33m${t}\x1b[0m`;
const cyan = (t) => `\x1b[36m${t}\x1b[0m`;

function tryDelete(dir, baseName) {
  for (const ext of EXTENSIONS) {
    const filePath = path.join(dir, baseName + ext);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(green("  DELETED") + ` ${filePath}`);
      return true;
    }
  }
  return false;
}

function tryCopy(srcDir, destDir, baseName) {
  for (const ext of EXTENSIONS) {
    const srcPath = path.join(srcDir, baseName + ext);
    if (fs.existsSync(srcPath)) {
      const destPath = path.join(destDir, baseName + ext);
      fs.copyFileSync(srcPath, destPath);
      console.log(cyan("  COPIED") + ` → ${destPath}`);
      return true;
    }
  }
  return false;
}

/* ── Main ── */
console.log("\n" + "=".repeat(60));
console.log("  Gallery Organization Script");
console.log("=".repeat(60) + "\n");

/* Step 1: Delete unwanted Gallery (n) files */
console.log(yellow("Step 1: Deleting unwanted files...\n"));
let deletedCount = 0;
let notFoundCount = 0;

for (const id of DELETE_IDS) {
  const baseName = `Gallery (${id})`;
  console.log(`  Processing: ${baseName}`);

  const fromSource = tryDelete(SOURCE_DIR, baseName);
  const fromPublic = tryDelete(PUBLIC_GALLERY, baseName);

  if (fromSource || fromPublic) {
    deletedCount++;
  } else {
    console.log(yellow("  SKIPPED") + ` (not found in either location)`);
    notFoundCount++;
  }
}

console.log(
  `\n  Summary: ${green(deletedCount + " deleted")}, ${yellow(
    notFoundCount + " not found"
  )}\n`
);

/* Step 2: Copy Academy photos */
console.log(yellow("Step 2: Copying Academy photos...\n"));

if (!fs.existsSync(ACADEMY_DEST)) {
  fs.mkdirSync(ACADEMY_DEST, { recursive: true });
  console.log(green("  Created directory:") + ` ${ACADEMY_DEST}\n`);
}

let copiedCount = 0;
let missingCount = 0;

for (let m = 1; m <= ACADEMY_COUNT; m++) {
  const baseName = `Gallery A (${m})`;
  const found = tryCopy(SOURCE_DIR, ACADEMY_DEST, baseName);
  if (found) {
    copiedCount++;
  } else {
    console.log(red("  MISSING") + ` ${baseName} (no file found in source)`);
    missingCount++;
  }
}

console.log(
  `\n  Summary: ${green(copiedCount + " copied")}, ${red(
    missingCount + " missing"
  )}\n`
);

console.log("=".repeat(60));
console.log("  Done! You can now delete this script.");
console.log("=".repeat(60) + "\n");
