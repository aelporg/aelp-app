import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Question } from './question.model';
import { AssessmentAnswer } from '../../assessment/types/assessment-answer.model';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswer } from './multiple-choice-question-answer.model';

@ObjectType()
export class QuestionAnswer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Question, {nullable:false})
    question?: Question;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => MultipleChoiceQuestionAnswer, {nullable:true})
    multipleChoiceQuestionAnswer?: MultipleChoiceQuestionAnswer | null;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionAnswerId!: string | null;

    @Field(() => ProgrammingQuestionAnswer, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswer | null;

    @Field(() => String, {nullable:true})
    programmingQuestionAnswerId!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => AssessmentAnswer, {nullable:true})
    assessmentSubmission?: AssessmentAnswer | null;

    @Field(() => String, {nullable:true})
    assessmentSubmissionId!: string | null;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => String, {nullable:true})
    userId!: string | null;
}
