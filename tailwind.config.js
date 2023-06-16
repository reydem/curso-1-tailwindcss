module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'body-pattern': "url('../img/pattern.png')",
        
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
