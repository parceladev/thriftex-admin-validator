/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FBFBFB",
        secondary: "#282828",
        buttonpending: "#8D8D8D",
        buttonangle: "#D9E0E7"
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
