import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerCreateWithoutUserInput } from './assessment-answer-create-without-user.input';
import { AssessmentAnswerCreateOrConnectWithoutUserInput } from './assessment-answer-create-or-connect-without-user.input';
import { AssessmentAnswerUpsertWithWhereUniqueWithoutUserInput } from './assessment-answer-upsert-with-where-unique-without-user.input';
import { AssessmentAnswerCreateManyUserInputEnvelope } from './assessment-answer-create-many-user-input-envelope.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerUpdateWithWhereUniqueWithoutUserInput } from './assessment-answer-update-with-where-unique-without-user.input';
import { AssessmentAnswerUpdateManyWithWhereWithoutUserInput } from './assessment-answer-update-many-with-where-without-user.input';
import { AssessmentAnswerScalarWhereInput } from './assessment-answer-scalar-where.input';

@InputType()
export class AssessmentAnswerUncheckedUpdateManyWithoutUserInput {

    @Field(() => [AssessmentAnswerCreateWithoutUserInput], {nullable:true})
    create?: Array<AssessmentAnswerCreateWithoutUserInput>;

    @Field(() => [AssessmentAnswerCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<AssessmentAnswerCreateOrConnectWithoutUserInput>;

    @Field(() => [AssessmentAnswerUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<AssessmentAnswerUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AssessmentAnswerCreateManyUserInputEnvelope, {nullable:true})
    createMany?: AssessmentAnswerCreateManyUserInputEnvelope;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    set?: Array<AssessmentAnswerWhereUniqueInput>;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<AssessmentAnswerWhereUniqueInput>;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    delete?: Array<AssessmentAnswerWhereUniqueInput>;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AssessmentAnswerWhereUniqueInput>;

    @Field(() => [AssessmentAnswerUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<AssessmentAnswerUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AssessmentAnswerUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<AssessmentAnswerUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AssessmentAnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<AssessmentAnswerScalarWhereInput>;
}
