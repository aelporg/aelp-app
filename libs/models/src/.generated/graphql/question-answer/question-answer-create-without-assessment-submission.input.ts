import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionCreateNestedOneWithoutAnswersInput } from '../question/question-create-nested-one-without-answers.input';
import { MultipleChoiceQuestionAnswerCreateNestedOneWithoutBaseAnswerInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-create-nested-one-without-base-answer.input';
import { ProgrammingQuestionAnswerCreateNestedOneWithoutBaseAnswerInput } from '../programming-question-answer/programming-question-answer-create-nested-one-without-base-answer.input';

@InputType()
export class QuestionAnswerCreateWithoutAssessmentSubmissionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => QuestionCreateNestedOneWithoutAnswersInput, {nullable:false})
    question!: QuestionCreateNestedOneWithoutAnswersInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateNestedOneWithoutBaseAnswerInput, {nullable:true})
    multipleChoiceQuestionAnswer?: MultipleChoiceQuestionAnswerCreateNestedOneWithoutBaseAnswerInput;

    @Field(() => ProgrammingQuestionAnswerCreateNestedOneWithoutBaseAnswerInput, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswerCreateNestedOneWithoutBaseAnswerInput;
}
