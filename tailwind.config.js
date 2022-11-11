/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '600px'},
        'sm': '320px',
        ...defaultTheme.screens,
      },
      colors: {
        ...defaultTheme.colors,        
      }
    },
  },
  plugins: [],
}
