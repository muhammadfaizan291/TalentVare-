/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Neue Haas Grotesk Display'],
      },
      colors: {
        'primary': '#0154AA',
        'secondary': '#737A91',
      },
    },
  },
  plugins: [],
}