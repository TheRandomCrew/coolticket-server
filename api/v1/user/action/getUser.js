const services = require('../../../services')

const { findUser, logger } = services

const getUserId = async (req, res) => {
  try {
    const { idUser } = req.params
    const { ok, data } = await findUser('id', idUser)

    if (!ok) {
      throw Error(data)
    }

    if (!data) {
      return res.status(404).json({
        ok: false,
        msg: 'No user found in the system',
        errors: [{
          msg: 'No user found in the system'
        }]
      })
    }

    return res.status(200).json({
      ok: true,
      msg: `user ${idUser} fetched successfully`,
      data: { ...data, password: 'secret' }
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

module.exports = getUserId
