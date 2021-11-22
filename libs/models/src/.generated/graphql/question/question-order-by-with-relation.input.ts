import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleChoiceQuestionOrderByWithRelationInput } from '../multiple-choice-question/multiple-choice-question-order-by-with-relation.input';
import { ProgrammingQuestionOrderByWithRelationInput } from '../programming-question/programming-question-order-by-with-relation.input';
import { AssessmentOrderByWithRelationInput } from '../assessment/assessment-order-by-with-relation.input';
import { QuestionAnswerOrderByRelationAggregateInput } from '../question-answer/question-answer-order-by-relation-aggregate.input';

@InputType()
export class QuestionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionOrderByWithRelationInput, {nullable:true})
    multipleChoiceQuestion?: MultipleChoiceQuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    multipleChoiceQuestionId?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionOrderByWithRelationInput, {nullable:true})
    programmingQuestion?: ProgrammingQuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionId?: keyof typeof SortOrder;

    @Field(() => AssessmentOrderByWithRelationInput, {nullable:true})
    assessment?: AssessmentOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    assessmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => QuestionAnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: QuestionAnswerOrderByRelationAggregateInput;
}
