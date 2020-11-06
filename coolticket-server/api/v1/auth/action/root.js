const root = async (req, res) => {
  const info = [
    {
      path: '/api/v1/auth',
      url: 'https://coolticket-server.herokuapp.com/api/v1/auth',
      description: 'Get info about Endpoint. Return info',
      methods: {
        get: {
          summary: 'get Info about /auth Endpoint',
          description: 'Get Info'
        }
      }
    },
    {
      path: '/api/v1/auth/login',
      url: 'https://coolticket-server.herokuapp.com/api/v1/auth/login',
      description:
        "Get jwt token with your email and password. Send me your credentials, I'll tell you if you can enter",
      methods: {
        post: {
          summary: "Validate your user to use server's resources",
          description:
            'Given email and password, create and return jwt token and DB id'
        }
      }
    },
    {
      path: '/api/v1/auth/signup',
      url: 'https:/coolticket-server.herokuapp.com/api/v1/auth/signup',
      description:
        'Create user in database of Users. Give an name, an email, and a password, we register all in our databases',
      methods: {
        post: {
          summary: 'Create user in database of Users',
          description: 'If you want access come here first'
        }
      }
    }
  ]
  return res.status(200).send({
    ok: true,
    msg:
      'The /auth route is about authentification and get jwt token to gain acces to data',
    data: info
  })
}

module.exports = root
