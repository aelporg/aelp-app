import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { QuestionType } from './question-type.enum'

@InputType()
export class EnumQuestionTypeFieldUpdateOperationsInput {
  @Field(() => QuestionType, { nullable: true })
  set?: keyof typeof QuestionType
}
