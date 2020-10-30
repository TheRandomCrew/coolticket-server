const jwt = require('jsonwebtoken')
const services = require('../../services')

const { logger, secret } = services

const tokenVerification = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']

    if (!token || token === 'undefined') {
      res.set({
        'WWW-Authenticate': 'Bearer realm="/login", charset="UTF-8"'
      })
      return res.status(401).json({
        ok: false,
        msg: 'No token provided',
        errors: [
          {
            msg:
              'No token provided. Please go to /login endpoint to get a token!'
          }
        ]
      })
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.set({
          'WWW-Authenticate':
            'Bearer realm="/api/v1/auth/login", charset="UTF-8"'
        })
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({
            ok: false,
            msg: 'Access token has expired!',
            errors: [
              {
                msg: `${err.message} at ${err.expiredAt} Please renew your token in /api/v1/auth/login!`
              }
            ]
          })
        }
        return res.status(401).json({
          ok: false,
          msg: 'Invalid Token',
          errors: [
            {
              msg: err.message
            }
          ]
        })
      }
      res.locals.jwt = decoded
      next()
    })
  } catch (error) {
    logger.error(error)
    res.status(500).json({
      ok: false,
      msg: 'Servers code have a problem!',
      errors: [
        {
          msg: error.message
        }
      ]
    })
  }
}

module.exports = tokenVerification
