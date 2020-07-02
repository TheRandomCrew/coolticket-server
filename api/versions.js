const express = require('express')
const v1Controller = require('./v1')
const router = express.Router()

router.use('/v1', v1Controller)

module.exports = router
