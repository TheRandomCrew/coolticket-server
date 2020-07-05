module.exports = {
  deleteTicketId: ({ ticketId }) => `
    DELETE FROM tickets
    WHERE id = '${ticketId}'
  `,
  getTicketAll: () => `
    SELECT *
    FROM tickets
  `,
  postTicket: ({ idUser, ticketRequest }) => `
    INSERT INTO tickets (id_user, ticket_request)
    VALUES ('${idUser}', '${ticketRequest}')
  `,
  // To request, update ticket_pedido, to assign, update id_user
  updateTicket: ({ ticketId, idUser, ticketRequest }) => `
    UPDATE tickets
    SET
      ${idUser ? `id_user = '${idUser}',` : ''}
      ${ticketRequest ? `ticket_request = '${ticketRequest}',` : ''}
      updated_at = TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    WHERE id = '${ticketId}'
  `
}
