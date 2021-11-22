import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';
import { MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput } from './multiple-choice-question-answer-create-without-question-choice.input';

@InputType()
export class MultipleChoiceQuestionAnswerCreateOrConnectWithoutQuestionChoiceInput {

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionAnswerWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput, {nullable:false})
    create!: MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput;
}
