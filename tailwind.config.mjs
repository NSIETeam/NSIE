/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#b31b1b',
          hover: '#8b0000',
        },
        nav: '#1a1a2e',
      },
      maxWidth: {
        'readable': '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            'h1, h2, h3, h4': {
              fontFamily: '"Crimson Text", Georgia, serif',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
