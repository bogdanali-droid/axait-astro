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
        // Brand v2 — reasignare semantică big-bang (Faza 3).
        // Numele rămân identice, valorile pointează spre paleta dark+cyan.
        // Cleanup (renaming) — Faza 5.
        brand: {
          ink: '#0B1226',
          paper: '#FFFFFF',
          accent: '#0E8FBA',
          blue: '#0E8FBA',
          node: '#19B6E6',
          muted: 'rgba(11, 18, 38, 0.65)',
          steel: '#475569',
          light: '#FFFFFF',
          dark: '#0B1226',
          border: 'rgba(11, 18, 38, 0.12)',
        },
        // Brand v3 — light + cyan (inversare pentru logo nou)
        // Numele "ink" e pastrat pentru compatibilitate, dar valorile sunt acum LIGHT.
        ink: {
          900: '#FFFFFF',
          800: '#F8FAFC',
          700: '#F1F5F9',
          600: '#E2E8F0',
          500: '#CBD5E1',
          400: '#94A3B8',
        },
        'brand-cyan': {
          400: '#19B6E6',
          500: '#0E8FBA',
          600: '#0A6A8C',
          700: '#085571',
          900: '#062C3D',
        },
        surface: {
          50: '#0B1226',
          100: '#070C1C',
          200: '#1A2548',
          300: '#334155',
          400: '#475569',
          500: '#64748B',
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
