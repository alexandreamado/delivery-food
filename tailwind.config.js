/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
        '1xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
    },
    colors: {
      "primaria-clr": "#C33",
      "secondary-clr": "#2A435D",
      "3-third-color": "#FFF8EE",
      "link-color": "#4BFF3C",
      "pure-white": "#FFFFFF",
    },
  },
  plugins: [],
};
