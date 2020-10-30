const express = require('express')
const authRouter = express.Router()
const { root, logIn, signUp, validate } = require('./action')
const {
  tokenVerification,
  validateLogIn,
  validateSignUp
} = require('./middleware')

authRouter.get('/', root)
authRouter.post('/signup', validateSignUp(), signUp)
authRouter.post('/login', validateLogIn(), logIn)
authRouter.post('/validate', tokenVerification, validate)

module.exports = authRouter
