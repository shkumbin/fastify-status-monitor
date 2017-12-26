const fp = require('fastify-plugin')

module.exports = fp(require('./src/status-monitor'), { fastify: '>=0.27.0' })
