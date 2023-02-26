/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "jensonImg":"url('./src/images/Tisch.png')"
      }
    },
  },
  plugins: [],
}
