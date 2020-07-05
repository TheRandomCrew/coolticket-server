/**
 * @jest-environment node
 */
const supertest = require('supertest')
const server = require('../server')
const api = require('../api')
api(server)

const request = supertest(server)

it('Gets the /ping endpoint', async (done) => {
  const response = await request.get('/ping')
  expect(response.status).toBe(200)
  done()
})
