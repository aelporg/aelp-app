import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerCreateWithoutAssessmentInput } from './assessment-answer-create-without-assessment.input';
import { AssessmentAnswerCreateOrConnectWithoutAssessmentInput } from './assessment-answer-create-or-connect-without-assessment.input';
import { AssessmentAnswerUpsertWithWhereUniqueWithoutAssessmentInput } from './assessment-answer-upsert-with-where-unique-without-assessment.input';
import { AssessmentAnswerCreateManyAssessmentInputEnvelope } from './assessment-answer-create-many-assessment-input-envelope.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerUpdateWithWhereUniqueWithoutAssessmentInput } from './assessment-answer-update-with-where-unique-without-assessment.input';
import { AssessmentAnswerUpdateManyWithWhereWithoutAssessmentInput } from './assessment-answer-update-many-with-where-without-assessment.input';
import { AssessmentAnswerScalarWhereInput } from './assessment-answer-scalar-where.input';

@InputType()
export class AssessmentAnswerUncheckedUpdateManyWithoutAssessmentInput {

    @Field(() => [AssessmentAnswerCreateWithoutAssessmentInput], {nullable:true})
    create?: Array<AssessmentAnswerCreateWithoutAssessmentInput>;

    @Field(() => [AssessmentAnswerCreateOrConnectWithoutAssessmentInput], {nullable:true})
    connectOrCreate?: Array<AssessmentAnswerCreateOrConnectWithoutAssessmentInput>;

    @Field(() => [AssessmentAnswerUpsertWithWhereUniqueWithoutAssessmentInput], {nullable:true})
    upsert?: Array<AssessmentAnswerUpsertWithWhereUniqueWithoutAssessmentInput>;

    @Field(() => AssessmentAnswerCreateManyAssessmentInputEnvelope, {nullable:true})
    createMany?: AssessmentAnswerCreateManyAssessmentInputEnvelope;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    set?: Array<AssessmentAnswerWhereUniqueInput>;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<AssessmentAnswerWhereUniqueInput>;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    delete?: Array<AssessmentAnswerWhereUniqueInput>;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AssessmentAnswerWhereUniqueInput>;

    @Field(() => [AssessmentAnswerUpdateWithWhereUniqueWithoutAssessmentInput], {nullable:true})
    update?: Array<AssessmentAnswerUpdateWithWhereUniqueWithoutAssessmentInput>;

    @Field(() => [AssessmentAnswerUpdateManyWithWhereWithoutAssessmentInput], {nullable:true})
    updateMany?: Array<AssessmentAnswerUpdateManyWithWhereWithoutAssessmentInput>;

    @Field(() => [AssessmentAnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<AssessmentAnswerScalarWhereInput>;
}
