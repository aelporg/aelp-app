import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput } from './question-answer-create-without-programming-question-answer.input';
import { QuestionAnswerCreateOrConnectWithoutProgrammingQuestionAnswerInput } from './question-answer-create-or-connect-without-programming-question-answer.input';
import { QuestionAnswerUpsertWithoutProgrammingQuestionAnswerInput } from './question-answer-upsert-without-programming-question-answer.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerUpdateWithoutProgrammingQuestionAnswerInput } from './question-answer-update-without-programming-question-answer.input';

@InputType()
export class QuestionAnswerUncheckedUpdateOneWithoutProgrammingQuestionAnswerInput {

    @Field(() => QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput, {nullable:true})
    create?: QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput;

    @Field(() => QuestionAnswerCreateOrConnectWithoutProgrammingQuestionAnswerInput, {nullable:true})
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutProgrammingQuestionAnswerInput;

    @Field(() => QuestionAnswerUpsertWithoutProgrammingQuestionAnswerInput, {nullable:true})
    upsert?: QuestionAnswerUpsertWithoutProgrammingQuestionAnswerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerUpdateWithoutProgrammingQuestionAnswerInput, {nullable:true})
    update?: QuestionAnswerUpdateWithoutProgrammingQuestionAnswerInput;
}
