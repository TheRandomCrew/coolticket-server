const { body } = require('express-validator')

const validateSignUp = () => {
  return [
    body('name')
      .exists()
      .withMessage('name field is required')
      .isLength({ min: 3 })
      .withMessage('name must be greater than 3 characters'),
    body('email').exists()
      .withMessage('email field is required')
      .isEmail()
      .withMessage('Email is invalid'),
    body('password')
      .exists()
      .withMessage('password field is required')
      .isLength({ min: 6, max: 24 })
      .withMessage('password must be greater than 6 characters')
  ]
}

module.exports = validateSignUp
