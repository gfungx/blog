const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
