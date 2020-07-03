const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (key = '', value = '') => {
  try {
    if (!key || !value) throw Error('You must provide key and value!')
    let exists = false
    await query(queries.getUser, { key, value }, (err, res) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      exists = res.data[0].exists
    })
    logger.info(`User ${exists} found!`)
    return {
      ok: true,
      data: exists
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
