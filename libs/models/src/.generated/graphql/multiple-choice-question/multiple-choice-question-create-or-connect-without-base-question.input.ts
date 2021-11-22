import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { MultipleChoiceQuestionCreateWithoutBaseQuestionInput } from './multiple-choice-question-create-without-base-question.input';

@InputType()
export class MultipleChoiceQuestionCreateOrConnectWithoutBaseQuestionInput {

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionCreateWithoutBaseQuestionInput, {nullable:false})
    create!: MultipleChoiceQuestionCreateWithoutBaseQuestionInput;
}
