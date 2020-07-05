const services = require('../../../services')

const { deleteUser, logger } = services

const deleteUserId = async (req, res) => {
  const { idUser } = req.params
  try {
    logger.info(`user ${idUser} requested for deletion!`)
    const { ok, data } = await deleteUser(idUser)
    if (ok) {
      return res.status(204).json({
        ok: true,
        msg: `user ${idUser} deleted successfully`,
        data: data
      })
    }

    return res.status(404).json({
      ok: false,
      msg: 'No users found in the system',
      errors: [{
        msg: 'No users found in the system'
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

module.exports = deleteUserId
