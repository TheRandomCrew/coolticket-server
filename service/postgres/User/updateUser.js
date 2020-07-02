const query = require('../connection')
const queries = require('./queries')
const bcrypt = require('bcryptjs')
const logger = require('../../../util/logger')

module.exports = async ({ idUser, userType, name, email, password }) => {
  try {
    let thisPass = ''
    if (password) {
      thisPass = await bcrypt.hash(password, 8)
      logger.warn(`User ${idUser} changed password!`)
    }
    let updatedUser = {}
    await query(
      queries.updateUser,
      { idUser, userType, name, email, password: thisPass },
      (err, user) => {
        if (err) {
          logger.warn(err)
          throw Error(err)
        }
        updatedUser = { ...user, password: 'secret' }
      }
    )
    logger.info(`User ${idUser} updated!`)
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
