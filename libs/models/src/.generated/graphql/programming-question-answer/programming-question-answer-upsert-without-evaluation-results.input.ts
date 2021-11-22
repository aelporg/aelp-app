import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerUpdateWithoutEvaluationResultsInput } from './programming-question-answer-update-without-evaluation-results.input';
import { ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput } from './programming-question-answer-create-without-evaluation-results.input';

@InputType()
export class ProgrammingQuestionAnswerUpsertWithoutEvaluationResultsInput {

    @Field(() => ProgrammingQuestionAnswerUpdateWithoutEvaluationResultsInput, {nullable:false})
    update!: ProgrammingQuestionAnswerUpdateWithoutEvaluationResultsInput;

    @Field(() => ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput, {nullable:false})
    create!: ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput;
}
