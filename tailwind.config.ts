/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        caveat: ['"Caveat"', ...defaultTheme.fontFamily.sans]
      },

      colors: {
        primary: {
          DEFAULT: '#fda4af',
          ...colors.rose
        },

        neutral: {
          DEFAULT: '#9ca3af',
          ...colors.gray
        },
      },

/*      screens: {
        'lg': '800px',
        'xl': '800px',
        '2xl': '800px',
      },*/
    },
  },

  plugins: [],
}

