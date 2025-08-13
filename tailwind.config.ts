/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',
      },
      borderRadius: {
        sm: '6px', md: '10px', lg: '14px'
      }
    },
  },
  plugins: [],
}
