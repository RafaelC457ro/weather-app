/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        card: {
          background: 'var(--card-background)',
          foreground: 'var(--card-foreground)',
        },
        input: {
          background: 'var(--input-background)',
          foreground: 'var(--input-foreground)',
        },
      },
    },
  },
  plugins: [],
};
