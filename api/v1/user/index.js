const express = require('express')
const userRouter = express.Router()
const {
  root,
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
userRouter.get('/:idUser', tokenVerification, getUser)
userRouter.put('/:idUser', tokenVerification, putUser)
userRouter.delete('/:idUser', tokenVerification, deleteUser)

module.exports = userRouter
