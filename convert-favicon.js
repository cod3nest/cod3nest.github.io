const sharp = require('sharp');
const fs = require('fs');

async function convertFavicon() {
  // Read the SVG favicon
  const svgBuffer = fs.readFileSync('public/favicon.svg');

  // Create 16x16 PNG
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile('public/favicon-16x16.png');

  // Create 32x32 PNG
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');

  // Create 512x512 app icon
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile('public/icon-512x512.png');

  console.log('✓ Created favicon-16x16.png');
  console.log('✓ Created favicon-32x32.png');
  console.log('✓ Created icon-512x512.png');
}

convertFavicon().catch(console.error);
