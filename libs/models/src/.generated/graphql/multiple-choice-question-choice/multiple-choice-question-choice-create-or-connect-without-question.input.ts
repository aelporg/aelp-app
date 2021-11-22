import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { MultipleChoiceQuestionChoiceCreateWithoutQuestionInput } from './multiple-choice-question-choice-create-without-question.input';

@InputType()
export class MultipleChoiceQuestionChoiceCreateOrConnectWithoutQuestionInput {

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionChoiceWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionChoiceCreateWithoutQuestionInput, {nullable:false})
    create!: MultipleChoiceQuestionChoiceCreateWithoutQuestionInput;
}
