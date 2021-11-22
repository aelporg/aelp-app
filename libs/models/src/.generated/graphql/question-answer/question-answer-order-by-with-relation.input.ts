import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionOrderByWithRelationInput } from '../question/question-order-by-with-relation.input';
import { MultipleChoiceQuestionAnswerOrderByWithRelationInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-order-by-with-relation.input';
import { ProgrammingQuestionAnswerOrderByWithRelationInput } from '../programming-question-answer/programming-question-answer-order-by-with-relation.input';
import { AssessmentAnswerOrderByWithRelationInput } from '../assessment-answer/assessment-answer-order-by-with-relation.input';

@InputType()
export class QuestionAnswerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => QuestionOrderByWithRelationInput, {nullable:true})
    question?: QuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionAnswerOrderByWithRelationInput, {nullable:true})
    multipleChoiceQuestionAnswer?: MultipleChoiceQuestionAnswerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    multipleChoiceQuestionAnswerId?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionAnswerOrderByWithRelationInput, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionAnswerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => AssessmentAnswerOrderByWithRelationInput, {nullable:true})
    assessmentSubmission?: AssessmentAnswerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    assessmentSubmissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}
