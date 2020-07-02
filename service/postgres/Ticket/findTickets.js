const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async () => {
  try {
    let tickets = []
    await query(queries.getTicketAll, {}, (err, data) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      tickets = data
    })
    logger.info('Tickets Retrieved!')
    return {
      ok: true,
      data: tickets
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
