# Visual & Smoke Tests (Playwright)

Playwright is intentionally **not** listed in `package.json` devDependencies. The Cloudflare Pages build container does not run tests, and the `@playwright/test` postinstall hook (which downloads ~170 MB of Chromium binaries) was breaking the production build.

## Local setup (one-time)

```bash
npm i -D @playwright/test@1.49.0
npx playwright install --with-deps
```

Do **not** commit the resulting `package.json` / `package-lock.json` changes — Playwright must stay out of the repo manifest so Cloudflare Pages builds succeed.

## Running tests

```bash
# Against a running dev/preview server (set PREVIEW_URL or default in playwright.config.ts)
npm run test:visual

# Update local snapshots
npm run test:visual:update

# Capture baseline against production
npm run test:visual:baseline:prod

# Run against the Cloudflare Pages preview deployment for this branch
npm run test:visual:preview
```

## Files

- `playwright.config.ts` — Playwright config (root)
- `tests/_routes.ts` — shared route list
- `tests/visual.spec.ts` — visual regression suite
- `tests/smoke.spec.ts` — smoke checks
