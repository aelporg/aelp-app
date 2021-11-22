import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleChoiceQuestionChoiceOrderByRelationAggregateInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-order-by-relation-aggregate.input';
import { QuestionOrderByWithRelationInput } from '../question/question-order-by-with-relation.input';

@InputType()
export class MultipleChoiceQuestionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionChoiceOrderByRelationAggregateInput, {nullable:true})
    choices?: MultipleChoiceQuestionChoiceOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => QuestionOrderByWithRelationInput, {nullable:true})
    baseQuestion?: QuestionOrderByWithRelationInput;
}
