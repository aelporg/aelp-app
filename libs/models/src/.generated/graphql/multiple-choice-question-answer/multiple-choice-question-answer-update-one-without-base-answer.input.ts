import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput } from './multiple-choice-question-answer-create-without-base-answer.input';
import { MultipleChoiceQuestionAnswerCreateOrConnectWithoutBaseAnswerInput } from './multiple-choice-question-answer-create-or-connect-without-base-answer.input';
import { MultipleChoiceQuestionAnswerUpsertWithoutBaseAnswerInput } from './multiple-choice-question-answer-upsert-without-base-answer.input';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';
import { MultipleChoiceQuestionAnswerUpdateWithoutBaseAnswerInput } from './multiple-choice-question-answer-update-without-base-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerUpdateOneWithoutBaseAnswerInput {

    @Field(() => MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput, {nullable:true})
    create?: MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateOrConnectWithoutBaseAnswerInput, {nullable:true})
    connectOrCreate?: MultipleChoiceQuestionAnswerCreateOrConnectWithoutBaseAnswerInput;

    @Field(() => MultipleChoiceQuestionAnswerUpsertWithoutBaseAnswerInput, {nullable:true})
    upsert?: MultipleChoiceQuestionAnswerUpsertWithoutBaseAnswerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: MultipleChoiceQuestionAnswerWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionAnswerUpdateWithoutBaseAnswerInput, {nullable:true})
    update?: MultipleChoiceQuestionAnswerUpdateWithoutBaseAnswerInput;
}
