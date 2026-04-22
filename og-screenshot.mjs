import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pages = [
  { slug: 'canva-print-size-for-etsy', filename: 'canva-print-size-for-etsy.png' },
  { slug: 'etsy-kitchen-wall-art-sizes', filename: 'etsy-kitchen-wall-art-sizes.png' },
];

const baseUrl = 'http://localhost:3333';
const outDir = join(__dirname, 'app-next/public/assets/og');

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1200, height: 630 } });

await context.addInitScript(() => {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('header, nav').forEach(el => el.remove());
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

for (const { slug, filename } of pages) {
  const page = await context.newPage();
  const url = `${baseUrl}/${slug}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    document.querySelectorAll('header, nav').forEach(el => el.remove());
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: join(outDir, filename),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  console.log(`✓ ${filename}`);
  await page.close();
}

await browser.close();
console.log('Done.');
