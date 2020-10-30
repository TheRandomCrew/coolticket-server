const root = async (req, res) => {
  const info = [
    // TODO: make a function that takes swagger json and generate this
    {
      path: '/api/v1/ticket',
      url: 'https://coolticket-server.herokuapp.com/api/v1/ticket',
      description: 'Get info about Endpoint. Return info',
      methods: {
        get: {
          description: 'Return an explanation of endpoint'
        },
        post: {
          description: 'Create a new Ticket'
        }
      }
    },
    {
      path: '/api/v1/ticket/{ticketId}',
      url: 'https://coolticket-server.herokuapp.com/api/v1/ticket/{ticketId}',
      description:
        'operations in User from specific id. Need to have a valid token.',
      methods: {
        get: {
          description:
            'provide an id (and a valid token) to get the info of the ticket the id belongs'
        },
        put: {
          description: 'UPDATE ticket. Modify current info of ticket'
        },
        delete: {
          description: 'DELETE the ticket. Give an ID and I will delete the ticket that belongs to'
        }
      }
    }
  ]
  return res.status(200).send({
    ok: true,
    msg: 'The /ticket route is about CRUD operations on tickets database',
    data: info
  })
}

module.exports = root
