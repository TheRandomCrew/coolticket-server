const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const services = require('../../../services')

const { findUser, logger, secret } = services

const postLogIn = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({
      ok: false,
      msg: 'Request is well-formed, however, due to semantic errors it is unable to be processed. Validation errors.',
      errors: errors.array()
    })
  }

  const { email, password } = req.body

  try {
    const { ok, data } = await findUser('email', email)

    if (!ok) {
      throw Error(data)
    }

    if (!data) {
      return res.status(404).json({
        ok: false,
        msg: 'email not found on DB',
        errors: [{
          msg: 'email not found'
        }]
      })
    }

    const isPasswordValid = await bcrypt.compare(password, data.password)

    if (!isPasswordValid) {
      return res.status(403).json({
        ok: false,
        msg: 'Password for given email is not correct',
        errors: [{
          msg: 'assword for given email is not correct'
        }]
      })
    }

    const token = jwt.sign({ email, role: data.role }, secret, { expiresIn: 86400 })

    return res.status(200).json({
      ok: true,
      msg: 'user login successfully',
      data: {
        expires: 86400,
        email: email,
        token: token,
        role: data.role
      }
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).json(
      {
        ok: false,
        msg: 'there was a problem log in a user.',
        errors: [
          { error: error.message }
        ]
      }
    )
  }
}

module.exports = postLogIn
