import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProgrammingQuestionType } from './programming-question-type.enum'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumProgrammingQuestionTypeFilter } from './nested-enum-programming-question-type-filter.input'

@InputType()
export class NestedEnumProgrammingQuestionTypeWithAggregatesFilter {
  @Field(() => ProgrammingQuestionType, { nullable: true })
  equals?: keyof typeof ProgrammingQuestionType;

  @Field(() => [ProgrammingQuestionType], { nullable: true })
  in?: Array<keyof typeof ProgrammingQuestionType>

  @Field(() => [ProgrammingQuestionType], { nullable: true })
  notIn?: Array<keyof typeof ProgrammingQuestionType>

  @Field(() => NestedEnumProgrammingQuestionTypeWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumProgrammingQuestionTypeWithAggregatesFilter

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter

  @Field(() => NestedEnumProgrammingQuestionTypeFilter, { nullable: true })
  _min?: NestedEnumProgrammingQuestionTypeFilter

  @Field(() => NestedEnumProgrammingQuestionTypeFilter, { nullable: true })
  _max?: NestedEnumProgrammingQuestionTypeFilter
}
