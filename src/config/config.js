const defaultConfig = require('./default-config')

const getConfig = function (config) {
  if (!config) {
    return defaultConfig
  }
  config.title = (typeof config.title === 'string') ? config.title : defaultConfig.title
  config.url = (typeof config.url === 'string') ? config.url : defaultConfig.url
  config.method = (typeof config.method === 'string') ? config.method : defaultConfig.method
  config.port = (typeof config.port === 'number') ? config.port : defaultConfig.port

  return config
}

module.exports = getConfig
