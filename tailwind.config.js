module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'body-pattern': "url('../img/pattern.png')",
      }),
      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9"
      },
      animation: {
        'spin-low': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear',
        'bg-banner': 'backBanner 10s linear',
        'text-banner': 'showBannerText 10s linear',
        'show-card-icon': 'showCardIcon 300ms linear',
        'show-card-category': 'showCardCategory 400ms linear',
        'show-card-desc': 'showCardDesc 400ms linear'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
