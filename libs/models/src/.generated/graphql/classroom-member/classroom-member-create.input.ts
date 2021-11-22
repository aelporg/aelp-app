import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomRole } from '../prisma/classroom-role.enum';
import { ClassroomCreateNestedOneWithoutMembersInput } from '../classroom/classroom-create-nested-one-without-members.input';
import { UserCreateNestedOneWithoutJoinedClassroomsInput } from '../user/user-create-nested-one-without-joined-classrooms.input';

@InputType()
export class ClassroomMemberCreateInput {

    @Field(() => ClassroomRole, {nullable:false})
    classroomRole!: keyof typeof ClassroomRole;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ClassroomCreateNestedOneWithoutMembersInput, {nullable:false})
    classroom!: ClassroomCreateNestedOneWithoutMembersInput;

    @Field(() => UserCreateNestedOneWithoutJoinedClassroomsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutJoinedClassroomsInput;
}
