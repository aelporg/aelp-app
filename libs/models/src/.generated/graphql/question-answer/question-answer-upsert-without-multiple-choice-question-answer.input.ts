import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerUpdateWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-update-without-multiple-choice-question-answer.input';
import { QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-create-without-multiple-choice-question-answer.input';

@InputType()
export class QuestionAnswerUpsertWithoutMultipleChoiceQuestionAnswerInput {

    @Field(() => QuestionAnswerUpdateWithoutMultipleChoiceQuestionAnswerInput, {nullable:false})
    update!: QuestionAnswerUpdateWithoutMultipleChoiceQuestionAnswerInput;

    @Field(() => QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput, {nullable:false})
    create!: QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput;
}
