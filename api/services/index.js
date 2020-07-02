const CRUD = require('../../service/CRUD')
const secret = require('../../service/config')
const logger = require('../../util/logger')

module.exports = {
  logger,
  secret,
  createUser: CRUD.DB.user.createUser,
  deleteUser: CRUD.DB.user.deleteUser,
  findUser: CRUD.DB.user.findUser,
  isUser: CRUD.DB.user.isUser,
  updateUser: CRUD.DB.user.updateUser,
  createTicket: CRUD.DB.ticket.createTicket,
  deleteTicket: CRUD.DB.ticket.deleteTicket,
  findTickets: CRUD.DB.ticket.findTickets,
  updateTicket: CRUD.DB.ticket.updateTicket
}
