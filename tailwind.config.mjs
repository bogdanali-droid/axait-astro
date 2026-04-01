/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1A2332',
          blue: '#2563A8',
          accent: '#3B8FD4',
          node: '#5BA3DE',
          steel: '#6B8299',
          light: '#F4F6F9',
          border: '#D0D8E0',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
