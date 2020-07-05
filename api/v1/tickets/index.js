const express = require('express')
const reportRouter = express.Router()
const {
  root,
  postTicket, // CREATE
  getTicketAll, // READ
  putTicketId, // UPDATE
  deleteTicketId // DELETE
} = require('./action')
const {
  tokenVerification
} = require('../middleware')

reportRouter.get('/', root)
reportRouter.post('/', tokenVerification, postTicket)
reportRouter.get('/all', tokenVerification, getTicketAll)
reportRouter.put('/:ticketId', tokenVerification, putTicketId)
reportRouter.delete('/:ticketId', tokenVerification, deleteTicketId)

module.exports = reportRouter
