const express = require('express')
var swaggerUi = require('swagger-ui-express')
const ping = require('./ping')
const swaggerDocument = require('./openapi.json')

const system = express.Router()

system.use(express.static('public'))
system.use('/', swaggerUi.serve)
system.get('/', swaggerUi.setup(swaggerDocument, {
  customeSiteTitle: 'CoolTicket Documentation'
}))
system.get('/ping', ping)

module.exports = system
