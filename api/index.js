const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

const versionController = require('./versions')
const service = require('./services')
const system = require('./system')

module.exports = (server) => {
  try {
    server.use('/', system)
    server.use('/api', versionController)
    server.use('/api', limiter)
    return server
  } catch (error) {
    service.logger.error(error)
    process.exit(1)
  }
}
