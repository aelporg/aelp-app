import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EvaluationCriteriaType } from './evaluation-criteria-type.enum'
import { NestedEnumEvaluationCriteriaTypeFilter } from './nested-enum-evaluation-criteria-type-filter.input'

@InputType()
export class EnumEvaluationCriteriaTypeFilter {
  @Field(() => EvaluationCriteriaType, { nullable: true })
  equals?: keyof typeof EvaluationCriteriaType;

  @Field(() => [EvaluationCriteriaType], { nullable: true })
  in?: Array<keyof typeof EvaluationCriteriaType>

  @Field(() => [EvaluationCriteriaType], { nullable: true })
  notIn?: Array<keyof typeof EvaluationCriteriaType>

  @Field(() => NestedEnumEvaluationCriteriaTypeFilter, { nullable: true })
  not?: NestedEnumEvaluationCriteriaTypeFilter
}
