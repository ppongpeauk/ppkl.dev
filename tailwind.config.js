/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/**/*',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#101010',
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      neutral: colors.neutral
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        'height': 'height'
      },
    },
  },
  plugins: [],
}
