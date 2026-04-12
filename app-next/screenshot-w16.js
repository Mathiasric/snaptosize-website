const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 10000 } });

  console.log('Connecting to http://localhost:3001/social-slides ...');
  await page.goto('http://localhost:3001/social-slides', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(6000);

  const ROOT = path.join(__dirname, '..');

  const shots = [
    {
      id: 'neon-pack-showcase-songbirds-pinterest',
      out: path.join(ROOT, 'marketing/social/content/pinterest/2026-04-14-songbirds-pack-showcase/pin.jpg'),
    },
    {
      id: 'neon-pack-showcase-misty_lake-pinterest',
      out: path.join(ROOT, 'marketing/social/content/pinterest/2026-04-15-misty-lake-pack-showcase/pin.jpg'),
    },
    {
      id: 'neon-pack-showcase-landscape_abstract-instagram',
      out: path.join(ROOT, 'marketing/social/content/instagram/2026-04-13-landscape-abstract-instagram/pin.jpg'),
    },
  ];

  for (const { id, out } of shots) {
    const el = await page.$(`[id="${id}"]`);
    if (el) {
      await el.screenshot({ path: out });
      console.log('OK:', id, '->', out);
    } else {
      console.log('NOT FOUND:', id);
    }
  }

  await browser.close();
  console.log('Done.');
})();
