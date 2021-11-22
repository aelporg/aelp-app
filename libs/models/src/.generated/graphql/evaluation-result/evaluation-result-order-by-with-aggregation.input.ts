import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EvaluationResultCountOrderByAggregateInput } from './evaluation-result-count-order-by-aggregate.input';
import { EvaluationResultAvgOrderByAggregateInput } from './evaluation-result-avg-order-by-aggregate.input';
import { EvaluationResultMaxOrderByAggregateInput } from './evaluation-result-max-order-by-aggregate.input';
import { EvaluationResultMinOrderByAggregateInput } from './evaluation-result-min-order-by-aggregate.input';
import { EvaluationResultSumOrderByAggregateInput } from './evaluation-result-sum-order-by-aggregate.input';

@InputType()
export class EvaluationResultOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evaluationCriteriaId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evaulationPoints?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inputOutputEvaluationResultId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionAnswerId?: keyof typeof SortOrder;

    @Field(() => EvaluationResultCountOrderByAggregateInput, {nullable:true})
    _count?: EvaluationResultCountOrderByAggregateInput;

    @Field(() => EvaluationResultAvgOrderByAggregateInput, {nullable:true})
    _avg?: EvaluationResultAvgOrderByAggregateInput;

    @Field(() => EvaluationResultMaxOrderByAggregateInput, {nullable:true})
    _max?: EvaluationResultMaxOrderByAggregateInput;

    @Field(() => EvaluationResultMinOrderByAggregateInput, {nullable:true})
    _min?: EvaluationResultMinOrderByAggregateInput;

    @Field(() => EvaluationResultSumOrderByAggregateInput, {nullable:true})
    _sum?: EvaluationResultSumOrderByAggregateInput;
}
