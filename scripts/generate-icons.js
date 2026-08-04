const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// public/ is the only image root. Next copies it verbatim into out/ at build time,
// so the mirror this script used to write to ../img was never served — it only
// duplicated every asset in the repo.
const publicImg = path.join(__dirname, '../public/img');

if (!fs.existsSync(publicImg)) {
  fs.mkdirSync(publicImg, { recursive: true });
}

const conversions = [
  // Icon variations at multiple sizes
  { input: 'icon.svg', output: 'icon-64.png', size: 64 },
  { input: 'icon.svg', output: 'icon-128.png', size: 128 },
  { input: 'icon.svg', output: 'icon-256.png', size: 256 },
  { input: 'icon.svg', output: 'icon-512.png', size: 512 },

  // Company logo for OG/meta images
  { input: 'companylogo.svg', output: 'companylogo.png', width: 1200 },

  // Full logo at higher resolutions (remove if not needed)
  { input: 'companylogo.svg', output: 'companylogo-480.png', width: 480 },
  { input: 'companylogo.svg', output: 'companylogo-960.png', width: 960 },
  { input: 'companylogo-light.svg', output: 'companylogo-light-480.png', width: 480 },
  { input: 'companylogo-light.svg', output: 'companylogo-light-960.png', width: 960 },
];

async function generateImages() {
  console.log('Generating PNG images from SVGs...\n');

  for (const conv of conversions) {
    const inputPath = path.join(publicImg, conv.input);
    const outputPath = path.join(publicImg, conv.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`  Skipping ${conv.input} (not found)`);
      continue;
    }

    try {
      const svgBuffer = fs.readFileSync(inputPath);

      let sharpInstance = sharp(svgBuffer);

      if (conv.size) {
        sharpInstance = sharpInstance.resize(conv.size, conv.size);
      } else if (conv.width) {
        sharpInstance = sharpInstance.resize(conv.width);
      }

      await sharpInstance.png().toFile(outputPath);

      console.log(`  Generated: ${conv.output}`);
    } catch (err) {
      console.error(`  Error generating ${conv.output}:`, err.message);
    }
  }

  console.log('\nDone!');
}

generateImages();
