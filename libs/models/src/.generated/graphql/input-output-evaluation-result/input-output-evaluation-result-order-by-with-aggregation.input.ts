import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InputOutputEvaluationResultCountOrderByAggregateInput } from './input-output-evaluation-result-count-order-by-aggregate.input';
import { InputOutputEvaluationResultMaxOrderByAggregateInput } from './input-output-evaluation-result-max-order-by-aggregate.input';
import { InputOutputEvaluationResultMinOrderByAggregateInput } from './input-output-evaluation-result-min-order-by-aggregate.input';

@InputType()
export class InputOutputEvaluationResultOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resultOutputs?: keyof typeof SortOrder;

    @Field(() => InputOutputEvaluationResultCountOrderByAggregateInput, {nullable:true})
    _count?: InputOutputEvaluationResultCountOrderByAggregateInput;

    @Field(() => InputOutputEvaluationResultMaxOrderByAggregateInput, {nullable:true})
    _max?: InputOutputEvaluationResultMaxOrderByAggregateInput;

    @Field(() => InputOutputEvaluationResultMinOrderByAggregateInput, {nullable:true})
    _min?: InputOutputEvaluationResultMinOrderByAggregateInput;
}
