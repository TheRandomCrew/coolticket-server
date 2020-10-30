const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (ticketId, idUser, ticketRequest) => {
  try {
    const temp = { }
    if (ticketId) temp.ticketId = ticketId
    if (idUser) temp.idUser = idUser
    if (ticketRequest) temp.ticketRequest = ticketRequest

    let updatedTicket = {}
    await query(queries.updateTicket, temp, (err, data) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      updatedTicket = data
    })
    logger.info(`Ticket ${ticketId} Updated!`)
    return {
      ok: true,
      data: updatedTicket
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
