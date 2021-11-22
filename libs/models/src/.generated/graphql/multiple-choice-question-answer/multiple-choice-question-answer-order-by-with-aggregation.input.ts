import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleChoiceQuestionAnswerCountOrderByAggregateInput } from './multiple-choice-question-answer-count-order-by-aggregate.input';
import { MultipleChoiceQuestionAnswerMaxOrderByAggregateInput } from './multiple-choice-question-answer-max-order-by-aggregate.input';
import { MultipleChoiceQuestionAnswerMinOrderByAggregateInput } from './multiple-choice-question-answer-min-order-by-aggregate.input';

@InputType()
export class MultipleChoiceQuestionAnswerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionChoiceId?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionAnswerCountOrderByAggregateInput, {nullable:true})
    _count?: MultipleChoiceQuestionAnswerCountOrderByAggregateInput;

    @Field(() => MultipleChoiceQuestionAnswerMaxOrderByAggregateInput, {nullable:true})
    _max?: MultipleChoiceQuestionAnswerMaxOrderByAggregateInput;

    @Field(() => MultipleChoiceQuestionAnswerMinOrderByAggregateInput, {nullable:true})
    _min?: MultipleChoiceQuestionAnswerMinOrderByAggregateInput;
}
