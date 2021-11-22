import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { MultipleChoiceQuestionChoiceUpdateWithoutQuestionInput } from './multiple-choice-question-choice-update-without-question.input';

@InputType()
export class MultipleChoiceQuestionChoiceUpdateWithWhereUniqueWithoutQuestionInput {

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionChoiceWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionChoiceUpdateWithoutQuestionInput, {nullable:false})
    data!: MultipleChoiceQuestionChoiceUpdateWithoutQuestionInput;
}
