import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerUpdateWithoutEnvirnmentInput } from './programming-question-answer-update-without-envirnment.input';
import { ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput } from './programming-question-answer-create-without-envirnment.input';

@InputType()
export class ProgrammingQuestionAnswerUpsertWithWhereUniqueWithoutEnvirnmentInput {

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => ProgrammingQuestionAnswerUpdateWithoutEnvirnmentInput, {nullable:false})
    update!: ProgrammingQuestionAnswerUpdateWithoutEnvirnmentInput;

    @Field(() => ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput, {nullable:false})
    create!: ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput;
}
