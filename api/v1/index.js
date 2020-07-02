const express = require('express')
const authController = require('./auth')
const userController = require('./user')
const ticketController = require('./tickets')

const v1router = express.Router()

v1router.use('/auth', authController)
v1router.use('/user', userController)
v1router.use('/ticket', ticketController)

module.exports = v1router
