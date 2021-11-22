import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput } from './programming-question-answer-create-without-envirnment.input';

@InputType()
export class ProgrammingQuestionAnswerCreateOrConnectWithoutEnvirnmentInput {

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput, {nullable:false})
    create!: ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput;
}
