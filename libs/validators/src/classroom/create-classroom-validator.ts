import Joi from 'joi'
import { JoiSchema, getClassSchema } from 'joi-class-decorators'
import { joiResolver } from '@hookform/resolvers/joi'

export class CreateClassroomInputValidator {
  @JoiSchema(
    Joi.string().min(3).required().messages({
      'string.min': 'Name must be at least 3 characters long',
      'string.required': 'Name is required',
    })
  )
  name!: string

  @JoiSchema(
    Joi.string().optional().messages({
      'string.min': 'Subject must be at least 3 characters long',
    })
  )
  subject?: string

  @JoiSchema(
    Joi.string()
      .optional()
      .messages({
        'string.empty': "You can't leave this empty",
      })

  )
  section?: string
}

export const hfCreateClassroomResolver = joiResolver(
  getClassSchema(CreateClassroomInputValidator)
)
