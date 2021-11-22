import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput } from './programming-question-answer-create-without-envirnment.input';
import { ProgrammingQuestionAnswerCreateOrConnectWithoutEnvirnmentInput } from './programming-question-answer-create-or-connect-without-envirnment.input';
import { ProgrammingQuestionAnswerCreateManyEnvirnmentInputEnvelope } from './programming-question-answer-create-many-envirnment-input-envelope.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';

@InputType()
export class ProgrammingQuestionAnswerUncheckedCreateNestedManyWithoutEnvirnmentInput {

    @Field(() => [ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput], {nullable:true})
    create?: Array<ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput>;

    @Field(() => [ProgrammingQuestionAnswerCreateOrConnectWithoutEnvirnmentInput], {nullable:true})
    connectOrCreate?: Array<ProgrammingQuestionAnswerCreateOrConnectWithoutEnvirnmentInput>;

    @Field(() => ProgrammingQuestionAnswerCreateManyEnvirnmentInputEnvelope, {nullable:true})
    createMany?: ProgrammingQuestionAnswerCreateManyEnvirnmentInputEnvelope;

    @Field(() => [ProgrammingQuestionAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<ProgrammingQuestionAnswerWhereUniqueInput>;
}
