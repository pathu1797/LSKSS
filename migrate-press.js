const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Photos To be used in Website', 'Acheivements', 'Newspaper Cutout');
const targetDir = path.join(__dirname, 'app', 'public', 'images', 'achievements', 'press');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy and rename files
for (let i = 1; i <= 17; i++) {
  const oldPath = path.join(sourceDir, `Newspaper Cutout (${i}).png`);
  const newPath = path.join(targetDir, `press-${i}.png`);
  
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied ${oldPath} to ${newPath}`);
  } else {
    console.log(`Source file not found: ${oldPath}`);
  }
}

console.log('Migration complete.');
