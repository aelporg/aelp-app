import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AssessmentAnswerCountOrderByAggregateInput } from './assessment-answer-count-order-by-aggregate.input';
import { AssessmentAnswerAvgOrderByAggregateInput } from './assessment-answer-avg-order-by-aggregate.input';
import { AssessmentAnswerMaxOrderByAggregateInput } from './assessment-answer-max-order-by-aggregate.input';
import { AssessmentAnswerMinOrderByAggregateInput } from './assessment-answer-min-order-by-aggregate.input';
import { AssessmentAnswerSumOrderByAggregateInput } from './assessment-answer-sum-order-by-aggregate.input';

@InputType()
export class AssessmentAnswerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assessmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    submittedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recPoints?: keyof typeof SortOrder;

    @Field(() => AssessmentAnswerCountOrderByAggregateInput, {nullable:true})
    _count?: AssessmentAnswerCountOrderByAggregateInput;

    @Field(() => AssessmentAnswerAvgOrderByAggregateInput, {nullable:true})
    _avg?: AssessmentAnswerAvgOrderByAggregateInput;

    @Field(() => AssessmentAnswerMaxOrderByAggregateInput, {nullable:true})
    _max?: AssessmentAnswerMaxOrderByAggregateInput;

    @Field(() => AssessmentAnswerMinOrderByAggregateInput, {nullable:true})
    _min?: AssessmentAnswerMinOrderByAggregateInput;

    @Field(() => AssessmentAnswerSumOrderByAggregateInput, {nullable:true})
    _sum?: AssessmentAnswerSumOrderByAggregateInput;
}
