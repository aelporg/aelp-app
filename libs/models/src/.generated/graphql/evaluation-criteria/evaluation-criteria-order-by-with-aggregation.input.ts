import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EvaluationCriteriaCountOrderByAggregateInput } from './evaluation-criteria-count-order-by-aggregate.input';
import { EvaluationCriteriaAvgOrderByAggregateInput } from './evaluation-criteria-avg-order-by-aggregate.input';
import { EvaluationCriteriaMaxOrderByAggregateInput } from './evaluation-criteria-max-order-by-aggregate.input';
import { EvaluationCriteriaMinOrderByAggregateInput } from './evaluation-criteria-min-order-by-aggregate.input';
import { EvaluationCriteriaSumOrderByAggregateInput } from './evaluation-criteria-sum-order-by-aggregate.input';

@InputType()
export class EvaluationCriteriaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPoints?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inputOutputEvalCritId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requiredToPass?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hidden?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => EvaluationCriteriaCountOrderByAggregateInput, {nullable:true})
    _count?: EvaluationCriteriaCountOrderByAggregateInput;

    @Field(() => EvaluationCriteriaAvgOrderByAggregateInput, {nullable:true})
    _avg?: EvaluationCriteriaAvgOrderByAggregateInput;

    @Field(() => EvaluationCriteriaMaxOrderByAggregateInput, {nullable:true})
    _max?: EvaluationCriteriaMaxOrderByAggregateInput;

    @Field(() => EvaluationCriteriaMinOrderByAggregateInput, {nullable:true})
    _min?: EvaluationCriteriaMinOrderByAggregateInput;

    @Field(() => EvaluationCriteriaSumOrderByAggregateInput, {nullable:true})
    _sum?: EvaluationCriteriaSumOrderByAggregateInput;
}
