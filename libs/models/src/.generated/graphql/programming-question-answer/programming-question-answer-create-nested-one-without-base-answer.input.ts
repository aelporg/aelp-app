import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput } from './programming-question-answer-create-without-base-answer.input';
import { ProgrammingQuestionAnswerCreateOrConnectWithoutBaseAnswerInput } from './programming-question-answer-create-or-connect-without-base-answer.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';

@InputType()
export class ProgrammingQuestionAnswerCreateNestedOneWithoutBaseAnswerInput {

    @Field(() => ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput, {nullable:true})
    create?: ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput;

    @Field(() => ProgrammingQuestionAnswerCreateOrConnectWithoutBaseAnswerInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionAnswerCreateOrConnectWithoutBaseAnswerInput;

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionAnswerWhereUniqueInput;
}
