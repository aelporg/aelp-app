import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateNestedOneWithoutBaseAnswerInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-create-nested-one-without-base-answer.input';
import { ProgrammingQuestionAnswerCreateNestedOneWithoutBaseAnswerInput } from '../programming-question-answer/programming-question-answer-create-nested-one-without-base-answer.input';
import { AssessmentAnswerCreateNestedOneWithoutQuestionsSubmissionsInput } from '../assessment-answer/assessment-answer-create-nested-one-without-questions-submissions.input';

@InputType()
export class QuestionAnswerCreateWithoutQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => MultipleChoiceQuestionAnswerCreateNestedOneWithoutBaseAnswerInput, {nullable:true})
    multipleChoiceQuestionAnswer?: MultipleChoiceQuestionAnswerCreateNestedOneWithoutBaseAnswerInput;

    @Field(() => ProgrammingQuestionAnswerCreateNestedOneWithoutBaseAnswerInput, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswerCreateNestedOneWithoutBaseAnswerInput;

    @Field(() => AssessmentAnswerCreateNestedOneWithoutQuestionsSubmissionsInput, {nullable:true})
    assessmentSubmission?: AssessmentAnswerCreateNestedOneWithoutQuestionsSubmissionsInput;
}
