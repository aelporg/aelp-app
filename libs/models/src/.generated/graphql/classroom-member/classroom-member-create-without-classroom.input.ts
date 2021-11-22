import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomRole } from '../prisma/classroom-role.enum';
import { UserCreateNestedOneWithoutJoinedClassroomsInput } from '../user/user-create-nested-one-without-joined-classrooms.input';

@InputType()
export class ClassroomMemberCreateWithoutClassroomInput {

    @Field(() => ClassroomRole, {nullable:false})
    classroomRole!: keyof typeof ClassroomRole;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutJoinedClassroomsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutJoinedClassroomsInput;
}
