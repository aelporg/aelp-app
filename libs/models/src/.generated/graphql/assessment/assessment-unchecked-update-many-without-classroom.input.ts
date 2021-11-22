import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateWithoutClassroomInput } from './assessment-create-without-classroom.input';
import { AssessmentCreateOrConnectWithoutClassroomInput } from './assessment-create-or-connect-without-classroom.input';
import { AssessmentUpsertWithWhereUniqueWithoutClassroomInput } from './assessment-upsert-with-where-unique-without-classroom.input';
import { AssessmentCreateManyClassroomInputEnvelope } from './assessment-create-many-classroom-input-envelope.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentUpdateWithWhereUniqueWithoutClassroomInput } from './assessment-update-with-where-unique-without-classroom.input';
import { AssessmentUpdateManyWithWhereWithoutClassroomInput } from './assessment-update-many-with-where-without-classroom.input';
import { AssessmentScalarWhereInput } from './assessment-scalar-where.input';

@InputType()
export class AssessmentUncheckedUpdateManyWithoutClassroomInput {

    @Field(() => [AssessmentCreateWithoutClassroomInput], {nullable:true})
    create?: Array<AssessmentCreateWithoutClassroomInput>;

    @Field(() => [AssessmentCreateOrConnectWithoutClassroomInput], {nullable:true})
    connectOrCreate?: Array<AssessmentCreateOrConnectWithoutClassroomInput>;

    @Field(() => [AssessmentUpsertWithWhereUniqueWithoutClassroomInput], {nullable:true})
    upsert?: Array<AssessmentUpsertWithWhereUniqueWithoutClassroomInput>;

    @Field(() => AssessmentCreateManyClassroomInputEnvelope, {nullable:true})
    createMany?: AssessmentCreateManyClassroomInputEnvelope;

    @Field(() => [AssessmentWhereUniqueInput], {nullable:true})
    set?: Array<AssessmentWhereUniqueInput>;

    @Field(() => [AssessmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<AssessmentWhereUniqueInput>;

    @Field(() => [AssessmentWhereUniqueInput], {nullable:true})
    delete?: Array<AssessmentWhereUniqueInput>;

    @Field(() => [AssessmentWhereUniqueInput], {nullable:true})
    connect?: Array<AssessmentWhereUniqueInput>;

    @Field(() => [AssessmentUpdateWithWhereUniqueWithoutClassroomInput], {nullable:true})
    update?: Array<AssessmentUpdateWithWhereUniqueWithoutClassroomInput>;

    @Field(() => [AssessmentUpdateManyWithWhereWithoutClassroomInput], {nullable:true})
    updateMany?: Array<AssessmentUpdateManyWithWhereWithoutClassroomInput>;

    @Field(() => [AssessmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<AssessmentScalarWhereInput>;
}
