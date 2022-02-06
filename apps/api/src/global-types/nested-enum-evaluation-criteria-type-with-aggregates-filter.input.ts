import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaType } from './evaluation-criteria-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEvaluationCriteriaTypeFilter } from './nested-enum-evaluation-criteria-type-filter.input';

@InputType()
export class NestedEnumEvaluationCriteriaTypeWithAggregatesFilter {

    @Field(() => EvaluationCriteriaType, {nullable:true})
    equals?: keyof typeof EvaluationCriteriaType;

    @Field(() => [EvaluationCriteriaType], {nullable:true})
    in?: Array<keyof typeof EvaluationCriteriaType>;

    @Field(() => [EvaluationCriteriaType], {nullable:true})
    notIn?: Array<keyof typeof EvaluationCriteriaType>;

    @Field(() => NestedEnumEvaluationCriteriaTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEvaluationCriteriaTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEvaluationCriteriaTypeFilter, {nullable:true})
    _min?: NestedEnumEvaluationCriteriaTypeFilter;

    @Field(() => NestedEnumEvaluationCriteriaTypeFilter, {nullable:true})
    _max?: NestedEnumEvaluationCriteriaTypeFilter;
}
