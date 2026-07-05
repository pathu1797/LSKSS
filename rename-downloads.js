const fs = require('fs');
const path = require('path');

const renames = [
  { old: "AMERICA NEWS.pdf", new: "America-News-Coverage.pdf" },
  { old: "HARIDAS NEWS.pdf", new: "Prof-Haridas-Shinde-News.pdf" },
  { old: "HARIDAS SHINDE BIODATA IN ENGLISH.pdf", new: "Prof-Haridas-Shinde-Biodata.pdf" },
  { old: "HARIDAS SHINDE FOLK ART CERTIFCATE.pdf", new: "Prof-Haridas-Shinde-Folk-Art-Certificate.pdf" },
  { old: "Haridas Shinde Letter of Honor Sneh Arts 2024.pdf", new: "Prof-Haridas-Shinde-Letter-of-Honor-Sneh-Arts-2024.pdf" },
  { old: "Haridas Shinde PGF Letter of recommendation.pdf", new: "Prof-Haridas-Shinde-PGF-Recommendation.pdf" },
  { old: "LSKSS introduction ppt.pdf", new: "LSKSS-Introduction.pdf" },
  { old: "PANDURANG SHINDE BIODATA IN ENGLISH.pdf", new: "Adv-Pandurang-Shinde-Biodata.pdf" },
  { old: "PANDURANG SHINDE FOLK ART HARMONIUM AND VOCAL CERTIFICATE.pdf", new: "Adv-Pandurang-Shinde-Folk-Art-Certificate.pdf" },
  { old: "SHINDE PURUSHOTTAM.docx", new: "Purushottam-Shinde-Biography.docx" },
  { old: "हरिदास शिंदे – लोककलेचा जागतिक वारसदार.docx", new: "Prof-Haridas-Shinde-Marathi-Biography.docx" }
];

const sourceDir = path.join(__dirname, "Photos To be used in Website", "Downloads and more information");
const publicDir = path.join(__dirname, "app", "public", "downloads");

function renameFilesInDir(dir) {
  if (!fs.existsSync(dir)) return;
  renames.forEach(({ old, new: newName }) => {
    const oldPath = path.join(dir, old);
    const newPath = path.join(dir, newName);
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${old} -> ${newName} in ${dir}`);
    }
  });
}

renameFilesInDir(sourceDir);
renameFilesInDir(publicDir);
console.log("Renaming complete.");
