function forceHttps () {
  if (window.location.protocol !== 'https:') {
    window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length)
  }
}

module.exports = exports.default = forceHttps
