import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://axait.ro',
  integrations: [
    tailwind()
    // sitemap() // Activated after all pages are done
  ],
  output: 'static'
});
