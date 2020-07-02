const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (idUser = '') => {
  try {
    if (!idUser) throw Error('You must provide an ID for the user!')
    let user = {}
    await query(queries.getUser, { idUser }, (err, res) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      user = { ...res, password: 'secret' }
    })
    logger.info(`User ${user} found!`)
    return {
      ok: true,
      data: user
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
