const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (idUser, ticketRequest) => {
  try {
    let newTicket = {}
    await query(queries.postTicket, { idUser, ticketRequest }, (err, ticket) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      newTicket = ticket
    })
    logger.info(`Ticket ${newTicket.id} created!`)
    return {
      ok: true,
      data: newTicket
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
