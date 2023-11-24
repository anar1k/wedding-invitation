/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],

  theme: {
    colors: {
      primary: '#fda4af',
      ...colors
    },

    extend: {
      fontFamily: {
        caveat: ['"Caveat"', ...defaultTheme.fontFamily.sans]
      }
    },
  },

  plugins: [],
}

