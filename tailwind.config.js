// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.amber,
        night: {
          50: '#FFFFFF',
          100: '#b4b2c2',
          200: '#88869e',
          300: '#75758f',
          400: '#424259',
          500: '#363647',
          600: '#1f1f2a',
          700: '#191a23',
          800: '#14151b',
          900: '#0e0e10',
        },
      },
    },
  },
  plugins: [],
};
