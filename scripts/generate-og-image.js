// Generates the default 1200x630 Open Graph card (public/img/og-default.png).
// Run: node scripts/generate-og-image.js
const sharp = require('sharp');
const path = require('path');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#2C3E50"/>
  <rect x="0" y="0" width="1200" height="6" fill="#D4AF37"/>
  <text x="90" y="200" font-family="Georgia, 'Times New Roman', serif" font-size="64" letter-spacing="14" fill="#FFFFFF">CODENEST</text>
  <rect x="94" y="240" width="180" height="3" fill="#D4AF37"/>
  <text x="90" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="52" fill="#D4AF37">Fractional CTO &amp; CFO</text>
  <text x="90" y="400" font-family="Georgia, 'Times New Roman', serif" font-size="52" fill="#FFFFFF">for UK Startups</text>
  <text x="90" y="490" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#B8C2CC">Big 4 rigour meets founder empathy. Pre-seed to Series A.</text>
  <text x="90" y="560" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#8A98A5">codenest.uk</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, '../public/img/og-default.png'))
  .then(() => console.log('Wrote public/img/og-default.png'))
  .catch((err) => { console.error(err); process.exit(1); });
