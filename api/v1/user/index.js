const express = require('express')
const userRouter = express.Router()
const {
  root,
  // getUserAll,
  postUser, // CREATE
  getUser, // READ
  putUser, // UPDATE
  deleteUser // DELETE
} = require('./action')
const {
  tokenVerification
} = require('../middleware')

userRouter.get('/', root)
userRouter.post('/', tokenVerification, postUser)
// userRouter.get('/all', tokenVerification, getUserAll)
userRouter.get('/:email', tokenVerification, getUser)
userRouter.put('/:email', tokenVerification, putUser)
userRouter.delete('/:email', tokenVerification, deleteUser)

module.exports = userRouter
