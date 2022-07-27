/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      "colors": {
        "blue": {
          "50": "#E9F0F6",
          "100": "#D7E3EF",
          "200": "#AFC8DE",
          "300": "#84AACD",
          "400": "#5C8EBC",
          "500": "#41729F",
          "600": "#345A7F",
          "700": "#26435E",
          "800": "#1B2F41",
          "900": "#0D1721"
        }
      }
    },
  },
  plugins: [],
}
