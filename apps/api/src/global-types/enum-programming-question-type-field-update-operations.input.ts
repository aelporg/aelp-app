import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProgrammingQuestionType } from './programming-question-type.enum'

@InputType()
export class EnumProgrammingQuestionTypeFieldUpdateOperationsInput {
  @Field(() => ProgrammingQuestionType, { nullable: true })
  set?: keyof typeof ProgrammingQuestionType
}
