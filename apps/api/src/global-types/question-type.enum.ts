import { registerEnumType } from '@nestjs/graphql'

export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  PROGRAMMING = 'PROGRAMMING',
}

registerEnumType(QuestionType, { name: 'QuestionType', description: undefined })
