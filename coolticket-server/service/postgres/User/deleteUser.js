const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (idUser = '') => {
  try {
    let updatedUser = {}
    await query(queries.deleteUser, { idUser }, (err, user) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      updatedUser = { ...user, password: 'secret' }
    })
    logger.info(`User ${updatedUser} erased!`)
    return {
      ok: true,
      data: updatedUser
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
