const fs = require('fs');
const path = require('path');

const frontendDir = path.join('d:', 'Pribadi', 'Ide Ide, Project Project', 'Project Hackathon HIMTIF', 'Hackathon HIMTIF', 'unpam-space', 'frontend', 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Fix the duplicate keys: 'x-api-key': import.meta.env.VITE_KODE_RAHASIA_FRONTEND, 'x-api-key': import.meta.env.VITE_KODE_RAHASIA_FRONTEND
  content = content.replace(/'x-api-key':\s*import\.meta\.env\.VITE_KODE_RAHASIA_FRONTEND,\s*'x-api-key':\s*import\.meta\.env\.VITE_KODE_RAHASIA_FRONTEND/g, 
    "'x-api-key': import.meta.env.VITE_KODE_RAHASIA_FRONTEND");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed duplicates in: ' + filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walk(frontendDir);
