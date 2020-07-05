const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async ticketId => {
  try {
    let result = {}
    await query(queries.deleteTicketId, { ticketId }, (err, res) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      result = res
    })
    logger.info(`Ticket ${ticketId} erased!`)
    return {
      ok: true,
      data: result
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
