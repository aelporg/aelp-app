import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { MultipleChoiceQuestionChoiceUpdateWithoutQuestionInput } from './multiple-choice-question-choice-update-without-question.input';
import { MultipleChoiceQuestionChoiceCreateWithoutQuestionInput } from './multiple-choice-question-choice-create-without-question.input';

@InputType()
export class MultipleChoiceQuestionChoiceUpsertWithWhereUniqueWithoutQuestionInput {

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionChoiceWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionChoiceUpdateWithoutQuestionInput, {nullable:false})
    update!: MultipleChoiceQuestionChoiceUpdateWithoutQuestionInput;

    @Field(() => MultipleChoiceQuestionChoiceCreateWithoutQuestionInput, {nullable:false})
    create!: MultipleChoiceQuestionChoiceCreateWithoutQuestionInput;
}
