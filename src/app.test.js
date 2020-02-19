const supertest = require('supertest')
const app = require('./app')

it('GET', async () => {
    await app.ready()
    await supertest(app.server)
        .get('/')
        .expect(200)
    await app.close()    
})
