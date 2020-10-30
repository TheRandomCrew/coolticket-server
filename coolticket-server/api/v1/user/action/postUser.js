const services = require('../../../services')

const { createUser, isUser, logger } = services

const postUser = async (req, res) => {
  try {
    const { name, email, password, userType } = req.body
    if (name === undefined || name === '') {
      return res.status(422).json({
        ok: false,
        msg: 'name is required',
        errors: [
          {
            msg: 'Agrega un nombre'
          }
        ]
      })
    }

    if (email === undefined || email === '') {
      return res.status(422).json({
        ok: false,
        msg: 'email is required',
        errors: [
          {
            msg: 'Agrega un correo electrónico'
          }
        ]
      })
    }

    const { ok, data } = await isUser('email', email)

    if (!ok) {
      throw Error(data)
    }

    if (ok && data) {
      return res.status(409).json({
        ok: false,
        msg: 'email already exists',
        errors: [
          {
            msg: 'Ese Email ya existe, prueba otro por favor'
          }
        ]
      })
    }

    if (password === undefined || password === '') {
      return res.status(422).json({
        ok: false,
        msg: 'password is required',
        errors: [
          {
            msg: 'Agrega una contrasena'
          }
        ]
      })
    }

    const temp = {
      name,
      email,
      password,
      userType
    }

    const newUser = await createUser(temp)

    if (newUser) {
      return res.status(201).json({
        ok: true,
        msg: 'user created successfully',
        data: newUser
      })
    } else {
      throw new Error('El usuario no pudo ser creado')
    }
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong, Please try again',
      errors: [error]
    })
  }
}

module.exports = postUser
