/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"] ,
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

