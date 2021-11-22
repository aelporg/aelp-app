import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput } from './programming-question-answer-create-without-envirnment.input';
import { ProgrammingQuestionAnswerCreateOrConnectWithoutEnvirnmentInput } from './programming-question-answer-create-or-connect-without-envirnment.input';
import { ProgrammingQuestionAnswerUpsertWithWhereUniqueWithoutEnvirnmentInput } from './programming-question-answer-upsert-with-where-unique-without-envirnment.input';
import { ProgrammingQuestionAnswerCreateManyEnvirnmentInputEnvelope } from './programming-question-answer-create-many-envirnment-input-envelope.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerUpdateWithWhereUniqueWithoutEnvirnmentInput } from './programming-question-answer-update-with-where-unique-without-envirnment.input';
import { ProgrammingQuestionAnswerUpdateManyWithWhereWithoutEnvirnmentInput } from './programming-question-answer-update-many-with-where-without-envirnment.input';
import { ProgrammingQuestionAnswerScalarWhereInput } from './programming-question-answer-scalar-where.input';

@InputType()
export class ProgrammingQuestionAnswerUpdateManyWithoutEnvirnmentInput {

    @Field(() => [ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput], {nullable:true})
    create?: Array<ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput>;

    @Field(() => [ProgrammingQuestionAnswerCreateOrConnectWithoutEnvirnmentInput], {nullable:true})
    connectOrCreate?: Array<ProgrammingQuestionAnswerCreateOrConnectWithoutEnvirnmentInput>;

    @Field(() => [ProgrammingQuestionAnswerUpsertWithWhereUniqueWithoutEnvirnmentInput], {nullable:true})
    upsert?: Array<ProgrammingQuestionAnswerUpsertWithWhereUniqueWithoutEnvirnmentInput>;

    @Field(() => ProgrammingQuestionAnswerCreateManyEnvirnmentInputEnvelope, {nullable:true})
    createMany?: ProgrammingQuestionAnswerCreateManyEnvirnmentInputEnvelope;

    @Field(() => [ProgrammingQuestionAnswerWhereUniqueInput], {nullable:true})
    set?: Array<ProgrammingQuestionAnswerWhereUniqueInput>;

    @Field(() => [ProgrammingQuestionAnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProgrammingQuestionAnswerWhereUniqueInput>;

    @Field(() => [ProgrammingQuestionAnswerWhereUniqueInput], {nullable:true})
    delete?: Array<ProgrammingQuestionAnswerWhereUniqueInput>;

    @Field(() => [ProgrammingQuestionAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<ProgrammingQuestionAnswerWhereUniqueInput>;

    @Field(() => [ProgrammingQuestionAnswerUpdateWithWhereUniqueWithoutEnvirnmentInput], {nullable:true})
    update?: Array<ProgrammingQuestionAnswerUpdateWithWhereUniqueWithoutEnvirnmentInput>;

    @Field(() => [ProgrammingQuestionAnswerUpdateManyWithWhereWithoutEnvirnmentInput], {nullable:true})
    updateMany?: Array<ProgrammingQuestionAnswerUpdateManyWithWhereWithoutEnvirnmentInput>;

    @Field(() => [ProgrammingQuestionAnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProgrammingQuestionAnswerScalarWhereInput>;
}
