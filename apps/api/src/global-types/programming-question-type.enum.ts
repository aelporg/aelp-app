import { registerEnumType } from '@nestjs/graphql'

export enum ProgrammingQuestionType {
  SINGLE_FILE = 'SINGLE_FILE',
  MULTIPLE_FILE = 'MULTIPLE_FILE',
}

registerEnumType(ProgrammingQuestionType, {
  name: 'ProgrammingQuestionType',
  description: undefined,
})
