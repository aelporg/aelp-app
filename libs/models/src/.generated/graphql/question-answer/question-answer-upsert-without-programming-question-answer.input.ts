import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerUpdateWithoutProgrammingQuestionAnswerInput } from './question-answer-update-without-programming-question-answer.input';
import { QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput } from './question-answer-create-without-programming-question-answer.input';

@InputType()
export class QuestionAnswerUpsertWithoutProgrammingQuestionAnswerInput {

    @Field(() => QuestionAnswerUpdateWithoutProgrammingQuestionAnswerInput, {nullable:false})
    update!: QuestionAnswerUpdateWithoutProgrammingQuestionAnswerInput;

    @Field(() => QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput, {nullable:false})
    create!: QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput;
}
