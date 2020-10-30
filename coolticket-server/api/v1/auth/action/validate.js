const services = require('../../../services')

const validateUser = async (_, res) => {
  try {
    const decoded = res.locals.jwt

    const tenMin = Math.floor(Date.now() / 1000) + 10 * 60

    if (decoded.exp <= tenMin) {
      res.set({
        Location: '/api/v1/auth/login'
      })
      return res.status(200).json({
        ok: true,
        msg: 'Token about to expire!',
        data: {
          exp: decoded.exp,
          role: decoded.role,
          email: decoded.email,
          msg: 'Please renew your session! Session expired, please login again!'
        }
      })
    }
    return res.status(200).json({
      ok: true,
      msg: 'user validated token successfully',
      data: {
        exp: decoded.exp,
        role: decoded.role,
        email: decoded.email,
        msg: 'You can continue requesting!'
      }
    })
  } catch (error) {
    services.logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'there was a problem validating a token.',
      errors: [{ error: error.message }]
    })
  }
}

module.exports = validateUser
