const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Photos To be used in Website', 'Acheivements', 'Certificates and Awards');
const targetDir = path.join(__dirname, 'app', 'public', 'images', 'achievements', 'certificates');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (let i = 1; i <= 11; i++) {
  const oldPath = path.join(sourceDir, `Certificates and awards (${i}).png`);
  const newPath = path.join(targetDir, `certificate-${i}.png`);
  
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied ${oldPath} to ${newPath}`);
  } else {
    console.log(`Source file not found: ${oldPath}`);
  }
}

console.log('Migration complete.');
