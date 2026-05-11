import { test, expect } from '@playwright/test';
import { routes } from './_routes';

for (const path of routes) {
  test(`visual ${path}`, async ({ page }, info) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.evaluate(() => (document as any).fonts.ready);
    const snap = `${info.project.name}${path.replace(/\//g, '_') || '_root'}.png`;
    await expect(page).toHaveScreenshot(snap, { fullPage: true, animations: 'disabled' });
  });
}
