const services = require('../../../services')

const { updateTicket, logger } = services

const putTicket = async (req, res) => {
  try {
    const { ticketId } = req.params
    const { idUser, ticketRequest } = req.body

    if (!ticketId) {
      return res.status(422).json({
        ok: false,
        msg: 'ticketId is required',
        errors: [{
          msg: 'Provee un identificador para el tickete por favor!'
        }]
      })
    }

    const { ok, data } = await updateTicket({
      idUser,
      ticketRequest,
      ticketId
    })

    logger.info(data)
    if (ok) {
      return res.status(200).json({
        ok: true,
        msg: 'El ticket se actualizo sin problemas!',
        data
      })
    } else {
      throw new Error('Hubo un problema con la Base de Datos!')
    }
  } catch (error) {
    logger.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong with code, Please try again',
      errors: [error.message]
    })
  }
}

module.exports = putTicket
