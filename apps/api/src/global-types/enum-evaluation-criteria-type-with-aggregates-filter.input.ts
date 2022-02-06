import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EvaluationCriteriaType } from './evaluation-criteria-type.enum'
import { NestedEnumEvaluationCriteriaTypeWithAggregatesFilter } from './nested-enum-evaluation-criteria-type-with-aggregates-filter.input'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumEvaluationCriteriaTypeFilter } from './nested-enum-evaluation-criteria-type-filter.input'

@InputType()
export class EnumEvaluationCriteriaTypeWithAggregatesFilter {
  @Field(() => EvaluationCriteriaType, { nullable: true })
  equals?: keyof typeof EvaluationCriteriaType;

  @Field(() => [EvaluationCriteriaType], { nullable: true })
  in?: Array<keyof typeof EvaluationCriteriaType>

  @Field(() => [EvaluationCriteriaType], { nullable: true })
  notIn?: Array<keyof typeof EvaluationCriteriaType>

  @Field(() => NestedEnumEvaluationCriteriaTypeWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumEvaluationCriteriaTypeWithAggregatesFilter

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter

  @Field(() => NestedEnumEvaluationCriteriaTypeFilter, { nullable: true })
  _min?: NestedEnumEvaluationCriteriaTypeFilter

  @Field(() => NestedEnumEvaluationCriteriaTypeFilter, { nullable: true })
  _max?: NestedEnumEvaluationCriteriaTypeFilter
}
