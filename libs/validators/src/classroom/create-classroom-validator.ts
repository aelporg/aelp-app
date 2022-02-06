import Joi from 'joi'
import { JoiSchema, getClassSchema } from 'joi-class-decorators'
import { joiResolver } from '@hookform/resolvers/joi'

export class CreateClassroomInputValidator {
  @JoiSchema(
    Joi.string().min(3).max(250).required().messages({
      'string.min': 'Name must be at least 3 characters long',
      'string.max': 'Name must be at most 250 characters long',
      'string.empty': 'Name is required',

    })
  )
  name!: string

  @JoiSchema(
    Joi.alternatives().try(
      Joi.string().valid('').empty('').default(null).allow(null),
      Joi.string().max(250).messages({
        'string.max': 'Subject must be at most 250 characters long',
      })
    )
  )
  subject?: string

  @JoiSchema(
    Joi.alternatives().try(
      Joi.string().valid('').empty('').default(null).allow(null),
      Joi.string().max(250).messages({
        'string.max': 'Section must be at most 250 characters long',
      })
    )
  )
  section?: string
}

export const hfCreateClassroomResolver = joiResolver(
  getClassSchema(CreateClassroomInputValidator)
)
