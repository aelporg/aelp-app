import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceUpdateWithoutAnswersInput } from './multiple-choice-question-choice-update-without-answers.input';
import { MultipleChoiceQuestionChoiceCreateWithoutAnswersInput } from './multiple-choice-question-choice-create-without-answers.input';

@InputType()
export class MultipleChoiceQuestionChoiceUpsertWithoutAnswersInput {

    @Field(() => MultipleChoiceQuestionChoiceUpdateWithoutAnswersInput, {nullable:false})
    update!: MultipleChoiceQuestionChoiceUpdateWithoutAnswersInput;

    @Field(() => MultipleChoiceQuestionChoiceCreateWithoutAnswersInput, {nullable:false})
    create!: MultipleChoiceQuestionChoiceCreateWithoutAnswersInput;
}
