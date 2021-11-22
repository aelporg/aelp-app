import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput } from './programming-question-answer-create-without-base-answer.input';

@InputType()
export class ProgrammingQuestionAnswerCreateOrConnectWithoutBaseAnswerInput {

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput, {nullable:false})
    create!: ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput;
}
