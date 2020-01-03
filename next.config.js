const dotenv = require('dotenv')
dotenv.config()

exports.default = {
  env: {
    CLIENT_ID:
      process.env.CLIENT_ID,
    PROJECT_ID: process.env.PROJECT_ID,
    AUTH_URI: process.env.AUTH_URI,
    TOKEN_URI: process.env.TOKEN_URI,
    AUTH_PROVIDER_X509_CERT_URL: process.env.AUTH_PROVIDER_X509_CERT_URL,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    JAVASCRIPT_ORIGINS: process.env.JAVASCRIPT_ORIGINS
  }
};
