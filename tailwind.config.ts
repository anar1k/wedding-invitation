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
          DEFAULT: '#595958',
          ...colors.gray
        },
      },

      screens: {
        'lg': '700px',
        'xl': '700px',
        '2xl': '700px',
      },
    },
  },

  plugins: [],
}

