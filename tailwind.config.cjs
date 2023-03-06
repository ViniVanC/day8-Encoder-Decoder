/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#fae5e2",
        azalea: "#f9d6d4",
        "rosu-fog": "#e6b5b8",
        pharlap: "#a7767c",
        mortar: "#48404d",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
