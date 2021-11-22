import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';
import { MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput } from './multiple-choice-question-answer-create-without-base-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerCreateOrConnectWithoutBaseAnswerInput {

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionAnswerWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput, {nullable:false})
    create!: MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput;
}
