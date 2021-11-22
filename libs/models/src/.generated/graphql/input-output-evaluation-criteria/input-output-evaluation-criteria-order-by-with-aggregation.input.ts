import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InputOutputEvaluationCriteriaCountOrderByAggregateInput } from './input-output-evaluation-criteria-count-order-by-aggregate.input';
import { InputOutputEvaluationCriteriaMaxOrderByAggregateInput } from './input-output-evaluation-criteria-max-order-by-aggregate.input';
import { InputOutputEvaluationCriteriaMinOrderByAggregateInput } from './input-output-evaluation-criteria-min-order-by-aggregate.input';

@InputType()
export class InputOutputEvaluationCriteriaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inputs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    outputs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => InputOutputEvaluationCriteriaCountOrderByAggregateInput, {nullable:true})
    _count?: InputOutputEvaluationCriteriaCountOrderByAggregateInput;

    @Field(() => InputOutputEvaluationCriteriaMaxOrderByAggregateInput, {nullable:true})
    _max?: InputOutputEvaluationCriteriaMaxOrderByAggregateInput;

    @Field(() => InputOutputEvaluationCriteriaMinOrderByAggregateInput, {nullable:true})
    _min?: InputOutputEvaluationCriteriaMinOrderByAggregateInput;
}
