const validateLogIn = require('./validateLogIn')
const validateSignUp = require('./validateSignUp')
const { tokenVerification } = require('../../middleware')

module.exports = {
  tokenVerification,
  validateLogIn,
  validateSignUp
}
