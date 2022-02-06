import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { getClassSchema, JoiSchema } from 'joi-class-decorators'

export class JoinClassroomValidator {
  @JoiSchema(
    Joi.string()
      .required()
      .messages({ 'string.empty': 'Classroom Invite Code is required' })
  )
  inviteCode?: string
}

export const hfJoinClassroomResolver = joiResolver(
  getClassSchema(JoinClassroomValidator)
)
