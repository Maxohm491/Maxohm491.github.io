/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,css}","src/index.css","src/App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans - serif'],
      },
    },
  },
  plugins: [],
}

