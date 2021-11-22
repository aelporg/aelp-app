import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-create-without-multiple-choice-question-answer.input';
import { QuestionAnswerCreateOrConnectWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-create-or-connect-without-multiple-choice-question-answer.input';
import { QuestionAnswerUpsertWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-upsert-without-multiple-choice-question-answer.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerUpdateWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-update-without-multiple-choice-question-answer.input';

@InputType()
export class QuestionAnswerUncheckedUpdateOneWithoutMultipleChoiceQuestionAnswerInput {

    @Field(() => QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    create?: QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput;

    @Field(() => QuestionAnswerCreateOrConnectWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutMultipleChoiceQuestionAnswerInput;

    @Field(() => QuestionAnswerUpsertWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    upsert?: QuestionAnswerUpsertWithoutMultipleChoiceQuestionAnswerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerUpdateWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    update?: QuestionAnswerUpdateWithoutMultipleChoiceQuestionAnswerInput;
}
