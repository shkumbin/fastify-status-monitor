const fs = require('fs')
const path = require('path')
const getConfig = require('./config/config')
const websocketServer = require('./websocket-init')

function statusMonitor (fastify, opts, next) {
  opts = opts || {}
  const config = getConfig(opts)
  const wss = websocketServer(fastify.server)
  // fastify.decorate('ws', wss)
  // fastify.addHook('onClose', (fastify, done) => fastify.ws.close(done))

  function onStatus (request, reply) {
    const renderedHtml = fs.readFileSync(path.join(__dirname, '/public/index.html'))
        .toString()
        .replace(/{{title}}/g, config.title)
        .replace(/{{port}}/g, config.port)
        .replace(/{{script}}/g, fs.readFileSync(path.join(__dirname, '/public/js/app.js')))
        .replace(/{{style}}/g, fs.readFileSync(path.join(__dirname, '/public/css/style.css')))
    reply.type('text/html').send(renderedHtml)
  }

  fastify.route({
    url: config.url,
    method: config.method,
    handler: onStatus
  })

  return next()
}

module.exports = statusMonitor
