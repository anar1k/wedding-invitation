/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],

  theme: {
    screens: {
      'md': '700px',
    },

    extend: {
      fontFamily: {
        caveat: ['"Caveat"', ...defaultTheme.fontFamily.sans]
      },

      colors: {
        primary: {
          DEFAULT: '#a8a29e',
          ...colors.stone
        },

        secondary: {
          DEFAULT: '#fb7185',
          ...colors.rose
        }
      },
    },
  },

  plugins: [],
}

