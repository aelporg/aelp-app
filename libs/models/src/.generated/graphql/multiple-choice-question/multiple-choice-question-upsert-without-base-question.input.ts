import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionUpdateWithoutBaseQuestionInput } from './multiple-choice-question-update-without-base-question.input';
import { MultipleChoiceQuestionCreateWithoutBaseQuestionInput } from './multiple-choice-question-create-without-base-question.input';

@InputType()
export class MultipleChoiceQuestionUpsertWithoutBaseQuestionInput {

    @Field(() => MultipleChoiceQuestionUpdateWithoutBaseQuestionInput, {nullable:false})
    update!: MultipleChoiceQuestionUpdateWithoutBaseQuestionInput;

    @Field(() => MultipleChoiceQuestionCreateWithoutBaseQuestionInput, {nullable:false})
    create!: MultipleChoiceQuestionCreateWithoutBaseQuestionInput;
}
