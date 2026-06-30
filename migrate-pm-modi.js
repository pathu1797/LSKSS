const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Photos To be used in Website', 'Acheivements', 'US');
const targetDir = path.join(__dirname, 'app', 'public', 'images', 'achievements', 'harirang');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const fileMap = {
  'T1.jpeg': 't1.jpeg',
  'T2.jpeg': 't2.jpeg',
  'T3.jpeg': 't3.jpeg',
  'T4.jpeg': 't4.jpeg'
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
