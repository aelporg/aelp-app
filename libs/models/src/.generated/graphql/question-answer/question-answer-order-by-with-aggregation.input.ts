import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionAnswerCountOrderByAggregateInput } from './question-answer-count-order-by-aggregate.input';
import { QuestionAnswerAvgOrderByAggregateInput } from './question-answer-avg-order-by-aggregate.input';
import { QuestionAnswerMaxOrderByAggregateInput } from './question-answer-max-order-by-aggregate.input';
import { QuestionAnswerMinOrderByAggregateInput } from './question-answer-min-order-by-aggregate.input';
import { QuestionAnswerSumOrderByAggregateInput } from './question-answer-sum-order-by-aggregate.input';

@InputType()
export class QuestionAnswerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    multipleChoiceQuestionAnswerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionAnswerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assessmentSubmissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => QuestionAnswerCountOrderByAggregateInput, {nullable:true})
    _count?: QuestionAnswerCountOrderByAggregateInput;

    @Field(() => QuestionAnswerAvgOrderByAggregateInput, {nullable:true})
    _avg?: QuestionAnswerAvgOrderByAggregateInput;

    @Field(() => QuestionAnswerMaxOrderByAggregateInput, {nullable:true})
    _max?: QuestionAnswerMaxOrderByAggregateInput;

    @Field(() => QuestionAnswerMinOrderByAggregateInput, {nullable:true})
    _min?: QuestionAnswerMinOrderByAggregateInput;

    @Field(() => QuestionAnswerSumOrderByAggregateInput, {nullable:true})
    _sum?: QuestionAnswerSumOrderByAggregateInput;
}
