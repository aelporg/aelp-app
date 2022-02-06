import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProgrammingQuestionType } from './programming-question-type.enum'

@InputType()
export class NestedEnumProgrammingQuestionTypeFilter {
  @Field(() => ProgrammingQuestionType, { nullable: true })
  equals?: keyof typeof ProgrammingQuestionType;

  @Field(() => [ProgrammingQuestionType], { nullable: true })
  in?: Array<keyof typeof ProgrammingQuestionType>

  @Field(() => [ProgrammingQuestionType], { nullable: true })
  notIn?: Array<keyof typeof ProgrammingQuestionType>

  @Field(() => NestedEnumProgrammingQuestionTypeFilter, { nullable: true })
  not?: NestedEnumProgrammingQuestionTypeFilter
}
