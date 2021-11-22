import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberCreateWithoutClassroomInput } from './classroom-member-create-without-classroom.input';
import { ClassroomMemberCreateOrConnectWithoutClassroomInput } from './classroom-member-create-or-connect-without-classroom.input';
import { ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput } from './classroom-member-upsert-with-where-unique-without-classroom.input';
import { ClassroomMemberCreateManyClassroomInputEnvelope } from './classroom-member-create-many-classroom-input-envelope.input';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput } from './classroom-member-update-with-where-unique-without-classroom.input';
import { ClassroomMemberUpdateManyWithWhereWithoutClassroomInput } from './classroom-member-update-many-with-where-without-classroom.input';
import { ClassroomMemberScalarWhereInput } from './classroom-member-scalar-where.input';

@InputType()
export class ClassroomMemberUpdateManyWithoutClassroomInput {

    @Field(() => [ClassroomMemberCreateWithoutClassroomInput], {nullable:true})
    create?: Array<ClassroomMemberCreateWithoutClassroomInput>;

    @Field(() => [ClassroomMemberCreateOrConnectWithoutClassroomInput], {nullable:true})
    connectOrCreate?: Array<ClassroomMemberCreateOrConnectWithoutClassroomInput>;

    @Field(() => [ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput], {nullable:true})
    upsert?: Array<ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput>;

    @Field(() => ClassroomMemberCreateManyClassroomInputEnvelope, {nullable:true})
    createMany?: ClassroomMemberCreateManyClassroomInputEnvelope;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    set?: Array<ClassroomMemberWhereUniqueInput>;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    disconnect?: Array<ClassroomMemberWhereUniqueInput>;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    delete?: Array<ClassroomMemberWhereUniqueInput>;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    connect?: Array<ClassroomMemberWhereUniqueInput>;

    @Field(() => [ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput], {nullable:true})
    update?: Array<ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput>;

    @Field(() => [ClassroomMemberUpdateManyWithWhereWithoutClassroomInput], {nullable:true})
    updateMany?: Array<ClassroomMemberUpdateManyWithWhereWithoutClassroomInput>;

    @Field(() => [ClassroomMemberScalarWhereInput], {nullable:true})
    deleteMany?: Array<ClassroomMemberScalarWhereInput>;
}
