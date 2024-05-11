/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F4F4F4',
        secondary: '#0D1117',
        textWhite: '#FFFFFF',
        textBlack: '#0D1117',
        buttonpending: '#8D8D8D',
        buttonangle: '#D9E0E7',
        darkButton: '#292E36',
        lightButton: '#0D1117',
        lightBorder: '#8D8D8D',
        darkBorder: '#30363D',
        darkTable: '#161B22',
      },
      fontFamily: {
        sans: ['Encode Sans Semi Condensed', 'sans-serif'],
        didot: ['Linotype Didot', 'serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
