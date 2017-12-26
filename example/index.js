const fastify = require('fastify')()

fastify.register(require('../'))

fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listening on %d', fastify.server.address().port)
})
