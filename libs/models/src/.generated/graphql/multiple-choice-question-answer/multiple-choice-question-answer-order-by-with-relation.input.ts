import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleChoiceQuestionChoiceOrderByWithRelationInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-order-by-with-relation.input';
import { QuestionAnswerOrderByWithRelationInput } from '../question-answer/question-answer-order-by-with-relation.input';

@InputType()
export class MultipleChoiceQuestionAnswerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionChoiceOrderByWithRelationInput, {nullable:true})
    questionChoice?: MultipleChoiceQuestionChoiceOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    questionChoiceId?: keyof typeof SortOrder;

    @Field(() => QuestionAnswerOrderByWithRelationInput, {nullable:true})
    baseAnswer?: QuestionAnswerOrderByWithRelationInput;
}
