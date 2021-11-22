import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerUpdateWithoutEnvirnmentInput } from './programming-question-answer-update-without-envirnment.input';

@InputType()
export class ProgrammingQuestionAnswerUpdateWithWhereUniqueWithoutEnvirnmentInput {

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => ProgrammingQuestionAnswerUpdateWithoutEnvirnmentInput, {nullable:false})
    data!: ProgrammingQuestionAnswerUpdateWithoutEnvirnmentInput;
}
