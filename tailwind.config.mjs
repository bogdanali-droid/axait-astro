/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          ink: '#0A0A0A',
          paper: '#FAFAFA',
          accent: '#FF5A1F',
          blue: '#2563A8',
          node: '#5BA3DE',
          muted: 'rgba(10, 10, 10, 0.55)',
          steel: '#6B8299',
          light: '#FAFAFA',
          dark: '#0A0A0A',
          border: '#D0D8E0',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};