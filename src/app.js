const database = require('../config/db.config')
const fastify = require('fastify')()

fastify.get('/', (req, reply) => {
    reply.send('Welcome to the nfl!')
})

database()

module.exports = fastify
