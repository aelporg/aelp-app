import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { MultipleChoiceQuestionCreateWithoutChoicesInput } from './multiple-choice-question-create-without-choices.input';

@InputType()
export class MultipleChoiceQuestionCreateOrConnectWithoutChoicesInput {

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionCreateWithoutChoicesInput, {nullable:false})
    create!: MultipleChoiceQuestionCreateWithoutChoicesInput;
}
