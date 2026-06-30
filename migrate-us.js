const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Photos To be used in Website', 'Acheivements', 'US');
const targetDir = path.join(__dirname, 'app', 'public', 'images', 'achievements', 'harirang');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const fileMap = {
  'Main.webp': 'main.webp',
  'R1.jpeg': 'r1.jpeg',
  'R2.jpeg': 'r2.jpeg',
  'R3.jpeg': 'r3.jpeg',
  'R4 (1).jpeg': 'r4-1.jpeg',
  'R4 (2).jpeg': 'r4-2.jpeg',
  'R5.jpeg': 'r5.jpeg'
};

for (const [oldName, newName] of Object.entries(fileMap)) {
  const oldPath = path.join(sourceDir, oldName);
  const newPath = path.join(targetDir, newName);
  
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied ${oldName} to ${newName}`);
  } else {
    console.log(`Missing file: ${oldName}`);
  }
}

console.log('Migration complete.');
