/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0b2548',
          'navy-dark': '#071933',
          slate: '#4c5b71',
          surface: '#e5e7eb',
          gold: '#D4AF37',
          'gold-bright': '#FFB81F',
          'gold-light': '#F3E5AB',
        },
      },
      fontFamily: {
        sans: ['Gotham', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
