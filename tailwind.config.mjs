/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Faza 1: Geist păstrat ca primary până migrăm paginile (Faza 4).
        // Inter e deja fallback — la cleanup (Faza 5) îl promovăm primary.
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Legacy — se elimină în Faza 5 după ce paginile migrează
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
        },
        // Brand v2 — dark + cyan (din manual)
        ink: {
          900: '#070C1C',
          800: '#0B1226',
          700: '#111A38',
          600: '#1A2548',
          500: '#243364',
          400: '#3C4B7E',
        },
        'brand-cyan': {
          400: '#4DCFF5',
          500: '#19B6E6',
          600: '#0E8FBA',
          700: '#0A6A8C',
          900: '#062C3D',
        },
        surface: {
          50: '#F5F7FB',
          100: '#FFFFFF',
          200: '#C7CFE0',
          300: '#9AA4BE',
          400: '#6E7896',
          500: '#4B5677',
        },
        signal: {
          up: '#16C784',
          warn: '#F5A623',
          down: '#E64545',
          info: '#6C8CFF',
        },
      },
      borderRadius: {
        'brand-sm': '6px',
        'brand-md': '12px',
        'brand-lg': '20px',
        'brand-xl': '32px',
      },
      backgroundSize: {
        'grid-64': '64px 64px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
