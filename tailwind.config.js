/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Chess/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
}
