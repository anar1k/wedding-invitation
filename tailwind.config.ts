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
          DEFAULT: '#af9888',
          50: '#f8f6f4',
          100: '#eeebe6',
          200: '#ddd4cb',
          300: '#bcaa9a',
          400: '#af9888',
          500: '#9f8170',
          600: '#927264',
          700: '#7a5d54',
          800: '#644e48',
          900: '#52413c',
          950: '#2b211f',
        },

        neutral: {
          DEFAULT: '#a8a29e',
          ...colors.stone
        }
      },
    },
  },

  plugins: [],
}

