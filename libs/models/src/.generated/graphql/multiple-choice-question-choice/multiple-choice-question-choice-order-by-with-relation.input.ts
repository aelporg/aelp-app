import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleChoiceQuestionOrderByWithRelationInput } from '../multiple-choice-question/multiple-choice-question-order-by-with-relation.input';
import { MultipleChoiceQuestionAnswerOrderByRelationAggregateInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-order-by-relation-aggregate.input';

@InputType()
export class MultipleChoiceQuestionChoiceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    choice?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionOrderByWithRelationInput, {nullable:true})
    question?: MultipleChoiceQuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    correct?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionAnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: MultipleChoiceQuestionAnswerOrderByRelationAggregateInput;
}
