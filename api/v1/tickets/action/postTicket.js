const services = require('../../../services')

const { createTicket, logger } = services

const postTicket = async (req, res) => {
  try {
    const { idUser, ticketRequest } = req.body

    const { ok, data } = await createTicket({
      idUser,
      ticketRequest
    })
    if (ok) {
      return res.status(201).json({
        ok: true,
        msg: 'ticket created successfully',
        data
      })
    } else {
      throw new Error('El tickete no pudo crearse')
    }
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong, Please try again',
      errors: [error.message]
    })
  }
}

module.exports = postTicket
