import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberCreateWithoutUserInput } from './classroom-member-create-without-user.input';
import { ClassroomMemberCreateOrConnectWithoutUserInput } from './classroom-member-create-or-connect-without-user.input';
import { ClassroomMemberCreateManyUserInputEnvelope } from './classroom-member-create-many-user-input-envelope.input';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';

@InputType()
export class ClassroomMemberUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ClassroomMemberCreateWithoutUserInput], {nullable:true})
    create?: Array<ClassroomMemberCreateWithoutUserInput>;

    @Field(() => [ClassroomMemberCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ClassroomMemberCreateOrConnectWithoutUserInput>;

    @Field(() => ClassroomMemberCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ClassroomMemberCreateManyUserInputEnvelope;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    connect?: Array<ClassroomMemberWhereUniqueInput>;
}
