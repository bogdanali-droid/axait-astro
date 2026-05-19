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
        display: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Brand v3 — Petrol Dusk: petrol/teal body + sand warm (header/footer/cards) + amber accent.
        // Token-urile rămân la fel (ink-*, brand-cyan-*, surface-*); doar valorile s-au remapat.
        brand: {
          ink: '#F4E8D0',
          paper: '#0C2630',
          accent: '#3CC8DC',
          blue: '#3CC8DC',
          node: '#3CC8DC',
          muted: 'rgba(244, 232, 208, 0.55)',
          steel: '#8FA8B0',
          light: '#0C2630',
          dark: '#F4E8D0',
          border: 'rgba(228, 215, 184, 0.18)',
          amber: '#E6AF64',
        },
        ink: {
          900: '#143845',
          800: '#1B4453',
          700: '#235260',
          600: '#2F6373',
          500: '#427687',
          400: '#5B8C9C',
        },
        'brand-cyan': {
          400: '#6FDDEC',
          500: '#3CC8DC',
          600: '#1FA3B8',
          700: '#127486',
          900: '#062C38',
        },
        surface: {
          50:  '#F4E8D0',
          100: '#F8EEDC',
          200: '#E4D7B8',
          300: '#B8A684',
          400: '#8FA8B0',
          500: '#5C7178',
        },
        amber: {
          400: '#F0C588',
          500: '#E6AF64',
          600: '#C8923F',
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
