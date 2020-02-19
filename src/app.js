const database = require('../config/db.config')
const fastify = require('fastify')()

//database()

fastify.get('/', (req, reply) => {
    reply.send('Welcome to the nfl!')
})

module.exports = fastify
