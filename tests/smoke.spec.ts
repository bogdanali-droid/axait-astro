import { test, expect } from '@playwright/test';

test.describe('smoke', () => {
  test('home returns 200 and renders main nav', async ({ page }) => {
    const resp = await page.goto('/', { waitUntil: 'domcontentloaded' });
    expect(resp?.status(), 'GET / should be 200').toBe(200);
    // Main navigation should be present
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });

  test('primary nav links are present on home', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    // At least one link to /despre, /contact and /blog should exist
    await expect(page.locator('a[href$="/despre"]').first()).toBeVisible();
    await expect(page.locator('a[href$="/contact"]').first()).toBeVisible();
    await expect(page.locator('a[href$="/blog"], a[href*="/blog"]').first()).toBeVisible();
  });

  test('contact page renders form inputs', async ({ page }) => {
    const resp = await page.goto('/contact', { waitUntil: 'domcontentloaded' });
    expect(resp?.status()).toBe(200);
    // Heuristic: contact page should have at least one input or textarea
    const inputs = page.locator('input, textarea');
    await expect(inputs.first()).toBeVisible();
  });

  test('blog index returns 200 and shows article links', async ({ page }) => {
    const resp = await page.goto('/blog', { waitUntil: 'domcontentloaded' });
    expect(resp?.status()).toBe(200);
    const blogLinks = page.locator('a[href*="/blog/"]');
    expect(await blogLinks.count()).toBeGreaterThan(0);
  });

  test('a services page renders without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    const resp = await page.goto('/servicii/cloud-backup', { waitUntil: 'domcontentloaded' });
    expect(resp?.status()).toBe(200);
    await expect(page.locator('h1, h2').first()).toBeVisible();
    expect(errors, `page errors: ${errors.join(' | ')}`).toEqual([]);
  });
});
