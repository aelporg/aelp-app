import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput } from './programming-question-answer-create-without-base-answer.input';
import { ProgrammingQuestionAnswerCreateOrConnectWithoutBaseAnswerInput } from './programming-question-answer-create-or-connect-without-base-answer.input';
import { ProgrammingQuestionAnswerUpsertWithoutBaseAnswerInput } from './programming-question-answer-upsert-without-base-answer.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerUpdateWithoutBaseAnswerInput } from './programming-question-answer-update-without-base-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUpdateOneWithoutBaseAnswerInput {

    @Field(() => ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput, {nullable:true})
    create?: ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput;

    @Field(() => ProgrammingQuestionAnswerCreateOrConnectWithoutBaseAnswerInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionAnswerCreateOrConnectWithoutBaseAnswerInput;

    @Field(() => ProgrammingQuestionAnswerUpsertWithoutBaseAnswerInput, {nullable:true})
    upsert?: ProgrammingQuestionAnswerUpsertWithoutBaseAnswerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => ProgrammingQuestionAnswerUpdateWithoutBaseAnswerInput, {nullable:true})
    update?: ProgrammingQuestionAnswerUpdateWithoutBaseAnswerInput;
}
