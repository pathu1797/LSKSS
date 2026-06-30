const fs = require('fs');
const path = require('path');

const sourceBase = path.join(__dirname, 'Photos To be used in Website', 'Acheivements', 'Certificates and Awards');
const targetBase = path.join(__dirname, 'app', 'public', 'images', 'achievements', 'certificates');

const psSource = path.join(sourceBase, 'Adv. Pandurang Shinde');
const psTarget = path.join(targetBase, 'pandurang');
const hsSource = path.join(sourceBase, 'Prof. Haridas Shinde');
const hsTarget = path.join(targetBase, 'haridas');

if (!fs.existsSync(psTarget)) fs.mkdirSync(psTarget, { recursive: true });
if (!fs.existsSync(hsTarget)) fs.mkdirSync(hsTarget, { recursive: true });

// Copy PS certificates
for (let i = 1; i <= 9; i++) {
  const oldPath = path.join(psSource, `Certificates and Awards PS (${i}).png`);
  const newPath = path.join(psTarget, `ps-${i}.png`);
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied PS: ${i}`);
  } else {
    console.log(`Missing PS: ${oldPath}`);
  }
}

// Copy HS certificates
for (let i = 1; i <= 11; i++) {
  const oldPath = path.join(hsSource, `Certificates and awards HS (${i}).png`);
  const newPath = path.join(hsTarget, `hs-${i}.png`);
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied HS: ${i}`);
  } else {
    console.log(`Missing HS: ${oldPath}`);
  }
}
console.log('Migration complete.');
