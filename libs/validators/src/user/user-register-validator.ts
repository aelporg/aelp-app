import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { getClassSchema, JoiSchema } from 'joi-class-decorators'

export class UserRegisterInputValidator {
  @JoiSchema(
    Joi.string().min(8).messages({
      'string.min': 'Password must be at least 8 characters long',
    })
  )
  password!: string

  @JoiSchema(
    Joi.string().equal(Joi.ref('password')).messages({
      'string.equal': 'Passwords must match',
    })
  )
  confirmPassword!: string

  @JoiSchema(
    Joi.string()
      .email({ tlds: { allow: false } })
      .messages({
        'string.email': 'Email must be a valid email address',
      })
  )
  email!: string

  @JoiSchema(
    Joi.boolean().equal(true).messages({
      'boolean.equal': 'You must agree to the terms and conditions',
    })
  )
  agreeTerms!: boolean
}

export const hfUserRegisterInputResolver = joiResolver(
  getClassSchema(UserRegisterInputValidator)
)
