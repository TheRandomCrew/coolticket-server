const server = require('./server')
const api = require('./api')
const boot = require('./server/start')

const withAPI = api(server)
boot(withAPI)
