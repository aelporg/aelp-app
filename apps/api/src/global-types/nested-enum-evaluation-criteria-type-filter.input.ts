import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EvaluationCriteriaType } from './evaluation-criteria-type.enum'

@InputType()
export class NestedEnumEvaluationCriteriaTypeFilter {
  @Field(() => EvaluationCriteriaType, { nullable: true })
  equals?: keyof typeof EvaluationCriteriaType;

  @Field(() => [EvaluationCriteriaType], { nullable: true })
  in?: Array<keyof typeof EvaluationCriteriaType>

  @Field(() => [EvaluationCriteriaType], { nullable: true })
  notIn?: Array<keyof typeof EvaluationCriteriaType>

  @Field(() => NestedEnumEvaluationCriteriaTypeFilter, { nullable: true })
  not?: NestedEnumEvaluationCriteriaTypeFilter
}
