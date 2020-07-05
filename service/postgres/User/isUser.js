const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (key = '', value = '') => {
  try {
    if (!key || !value) throw Error('You must provide key and value!')
    let isUser = false
    await query(queries.isUser, { key, value }, (err, res) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      isUser = res.data[0].exists
    })
    logger.info(`User with ${key} ${value} searched! ...and found? ${isUser}`)
    return {
      ok: true,
      data: isUser
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
