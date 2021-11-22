import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerUpdateWithoutBaseAnswerInput } from './multiple-choice-question-answer-update-without-base-answer.input';
import { MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput } from './multiple-choice-question-answer-create-without-base-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerUpsertWithoutBaseAnswerInput {

    @Field(() => MultipleChoiceQuestionAnswerUpdateWithoutBaseAnswerInput, {nullable:false})
    update!: MultipleChoiceQuestionAnswerUpdateWithoutBaseAnswerInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput, {nullable:false})
    create!: MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput;
}
