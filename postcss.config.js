module.exports = {
  plugins: {
    'postcss-nested': {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: {'--t': '(max-width: 959.95px)' }
        },
        {
          customMedia: {'--d': '(min-width: 600px)'}
        },
        {
          customMedia: {'--m': '(min-width: 960px)'}
        },
        {
          customMedia: {'--o': '(max-width: 600px)'}
        }
        
      ]
    }
  },
}