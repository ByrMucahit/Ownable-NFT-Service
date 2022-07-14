module.exports = {
  plugins: {
    'postcss-nested': {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: {'--m': '(min-width: 959.95px)'}
        },
        {
          customMedia: {'--t': '(max-width: 959.95px)'}
        },
        {
          customMedia: {'--d': '(min-width: 600px)'}
        },
        {
          customMedia: {'--u': '(min-width: 2500.95px)'}
        },
        {
          customMedia: {'--h': '(min-width: 960px)'}
        },
        {
          customMedia: {'--x': '(min-width: 460px)'}
        }
      ]
    }
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}