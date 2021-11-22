import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberCreateWithoutUserInput } from './classroom-member-create-without-user.input';
import { ClassroomMemberCreateOrConnectWithoutUserInput } from './classroom-member-create-or-connect-without-user.input';
import { ClassroomMemberUpsertWithWhereUniqueWithoutUserInput } from './classroom-member-upsert-with-where-unique-without-user.input';
import { ClassroomMemberCreateManyUserInputEnvelope } from './classroom-member-create-many-user-input-envelope.input';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberUpdateWithWhereUniqueWithoutUserInput } from './classroom-member-update-with-where-unique-without-user.input';
import { ClassroomMemberUpdateManyWithWhereWithoutUserInput } from './classroom-member-update-many-with-where-without-user.input';
import { ClassroomMemberScalarWhereInput } from './classroom-member-scalar-where.input';

@InputType()
export class ClassroomMemberUncheckedUpdateManyWithoutUserInput {

    @Field(() => [ClassroomMemberCreateWithoutUserInput], {nullable:true})
    create?: Array<ClassroomMemberCreateWithoutUserInput>;

    @Field(() => [ClassroomMemberCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ClassroomMemberCreateOrConnectWithoutUserInput>;

    @Field(() => [ClassroomMemberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ClassroomMemberUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ClassroomMemberCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ClassroomMemberCreateManyUserInputEnvelope;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    set?: Array<ClassroomMemberWhereUniqueInput>;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    disconnect?: Array<ClassroomMemberWhereUniqueInput>;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    delete?: Array<ClassroomMemberWhereUniqueInput>;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    connect?: Array<ClassroomMemberWhereUniqueInput>;

    @Field(() => [ClassroomMemberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ClassroomMemberUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ClassroomMemberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ClassroomMemberUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ClassroomMemberScalarWhereInput], {nullable:true})
    deleteMany?: Array<ClassroomMemberScalarWhereInput>;
}
