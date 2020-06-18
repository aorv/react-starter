const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './*.html',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  corePlugins: {
    fontFamily: false,
  },
  theme: {
    screens: {
      md: '1024px',
      lg: '1500px',
    },
    extend: {
      colors: {
        'primary': '#e8385a',
        'secondary': '#2F405F',
      }
    }
  },
  variants: {},
  plugins: []
}
