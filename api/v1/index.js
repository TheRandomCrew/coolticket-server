const express = require('express')
const authController = require('./auth')
const userController = require('./user')
const reportController = require('./report')

const v1router = express.Router()

v1router.use('/auth', authController)
v1router.use('/user', userController)
v1router.use('/report', reportController)

module.exports = v1router
