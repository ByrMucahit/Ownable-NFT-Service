/** @type {import('next').NextConfig} */


module.exports = {
  env: {
    GREETING: process.env.GREETING,
    GETFORM_FORM_ENDPOINT: "http://localhost:8081/api/create/unknownuser"
  },
};


