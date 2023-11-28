/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '10rem',
        '2xl': '6rem',
      },
      center: true,
    },
  },
  plugins: [],
}