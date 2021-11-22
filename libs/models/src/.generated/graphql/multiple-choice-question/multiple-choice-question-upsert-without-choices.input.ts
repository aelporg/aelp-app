import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionUpdateWithoutChoicesInput } from './multiple-choice-question-update-without-choices.input';
import { MultipleChoiceQuestionCreateWithoutChoicesInput } from './multiple-choice-question-create-without-choices.input';

@InputType()
export class MultipleChoiceQuestionUpsertWithoutChoicesInput {

    @Field(() => MultipleChoiceQuestionUpdateWithoutChoicesInput, {nullable:false})
    update!: MultipleChoiceQuestionUpdateWithoutChoicesInput;

    @Field(() => MultipleChoiceQuestionCreateWithoutChoicesInput, {nullable:false})
    create!: MultipleChoiceQuestionCreateWithoutChoicesInput;
}
