import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput } from './multiple-choice-question-answer-create-without-base-answer.input';
import { MultipleChoiceQuestionAnswerCreateOrConnectWithoutBaseAnswerInput } from './multiple-choice-question-answer-create-or-connect-without-base-answer.input';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';

@InputType()
export class MultipleChoiceQuestionAnswerCreateNestedOneWithoutBaseAnswerInput {

    @Field(() => MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput, {nullable:true})
    create?: MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateOrConnectWithoutBaseAnswerInput, {nullable:true})
    connectOrCreate?: MultipleChoiceQuestionAnswerCreateOrConnectWithoutBaseAnswerInput;

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: MultipleChoiceQuestionAnswerWhereUniqueInput;
}
