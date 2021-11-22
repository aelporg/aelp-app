import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';
import { MultipleChoiceQuestionAnswerUpdateWithoutQuestionChoiceInput } from './multiple-choice-question-answer-update-without-question-choice.input';
import { MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput } from './multiple-choice-question-answer-create-without-question-choice.input';

@InputType()
export class MultipleChoiceQuestionAnswerUpsertWithWhereUniqueWithoutQuestionChoiceInput {

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionAnswerWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionAnswerUpdateWithoutQuestionChoiceInput, {nullable:false})
    update!: MultipleChoiceQuestionAnswerUpdateWithoutQuestionChoiceInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput, {nullable:false})
    create!: MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput;
}
