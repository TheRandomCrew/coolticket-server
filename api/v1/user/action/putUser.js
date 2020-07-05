const services = require('../../../services')

const { updateUser, isUser, logger } = services

const putUser = async (req, res) => {
  try {
    const { idUser } = req.params
    const {
      name,
      userType,
      email,
      password
    } = req.body

    if (email === undefined || email === '') {
      return res.status(422).json({
        ok: false,
        msg: 'email is required',
        errors: [{
          msg: 'Provee un email por favor!'
        }]
      })
    }

    const { ok, data } = await isUser('id', idUser)

    if (!ok) {
      throw Error(data)
    }

    if (ok && data) {
      return res.status(404).json({
        ok: false,
        msg: 'No user found in the system',
        errors: [{
          msg: 'El usuario con ese ID no existe en la Base de Datos!'
        }]
      })
    }

    const temp = { email }
    if (name) temp.name = name
    if (userType) temp.country = userType
    if (email) temp.phone = email
    if (password) temp.password = password

    const updatedUser = await updateUser(temp)

    if (updatedUser.ok) {
      return res.status(200).json({
        ok: true,
        msg: 'El usuario se actualizo sin problemas!',
        data: updatedUser.data
      })
    } else {
      throw new Error('Hubo un problema con la Base de Datos!')
    }
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong with code, Please try again',
      errors: [error.message]
    })
  }
}

module.exports = putUser
