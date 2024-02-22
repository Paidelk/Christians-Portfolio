module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-background': "url('./Background.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
