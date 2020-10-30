const services = require('../../../services')

const { deleteTicket, logger } = services

const deleteTicketId = async (req, res) => {
  try {
    const { ticketId } = req.params
    const { ok, data } = await deleteTicket(ticketId)
    if (ok) {
      logger.info(data)
      return res.status(204).json({
        ok: true,
        msg: `ticket with id ${ticketId} deleted successfully`,
        data
      })
    }

    return res.status(404).json({
      ok: false,
      msg: 'No tickets found in the system',
      errors: [{
        msg: 'Tickete con ese ID no encontrado en la DB!'
      }]
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong, Please try again',
      errors: [error]
    })
  }
}

module.exports = deleteTicketId
