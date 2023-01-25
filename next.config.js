/** @type {import('next').NextConfig} */


module.exports = {
  env: {
    GREETING: process.env.GREETING,
    GETFORM_FORM_ENDPOINT: "http://localhost:8081/api/create/unknownuser"
  },
};


module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
        }
      }
      return config
    },
  }
}