require('https-scheme')()
const forceHttps = require('https-scheme')

if (isProduction) {
  forceHttps()
}
