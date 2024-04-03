/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#282828",
        secondary: "#F4F4F4",
      },
      fontFamily: {
        sans: ["Encode Sans Semi Condensed", "sans-serif"], // Font family dari Google Fonts
        didot: ["Linotype Didot", "serif"], // Font family yang sudah didefinisikan dengan font-face
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
