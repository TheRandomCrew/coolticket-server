const query = require('../connection')
const queries = require('./queries')
const bcrypt = require('bcryptjs')
const logger = require('../../../util/logger')

module.exports = async ({ email = '', name = '', password = '', userType = 'USER' }) => {
  try {
    if (!email || !password) throw Error('You must provide email and password!')
    const hashedPassword = await bcrypt.hash(password, 8)
    let newUser = {}
    await query(queries.createUser, {
      email,
      name,
      userType: userType === 'ADMIN' ? 2 : 3,
      password: hashedPassword
    }, (err, res) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      newUser = { ...res, password: 'secret' }
    })
    logger.info(`User ${JSON.stringify(newUser)} created!`)
    return {
      ok: true,
      data: newUser
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
