module.exports = {
  plugins: {
    'postcss-nested': {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: {'--t': '(max-width: 943px)' }
        },
        {
          customMedia: {'--d': '(min-width: 1270px)'}
        },
        {
          customMedia: {'--m': '(min-width: 960px)'}
        },
        {
          customMedia: {'--o': '(max-width: 600px)'}
        },
        {
          customMedia: {'--n': '(min-width: 600px)'}
        }
      ]
    }
  },
}