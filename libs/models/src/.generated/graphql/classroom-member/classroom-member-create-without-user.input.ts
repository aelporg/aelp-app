import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomRole } from '../prisma/classroom-role.enum';
import { ClassroomCreateNestedOneWithoutMembersInput } from '../classroom/classroom-create-nested-one-without-members.input';

@InputType()
export class ClassroomMemberCreateWithoutUserInput {

    @Field(() => ClassroomRole, {nullable:false})
    classroomRole!: keyof typeof ClassroomRole;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ClassroomCreateNestedOneWithoutMembersInput, {nullable:false})
    classroom!: ClassroomCreateNestedOneWithoutMembersInput;
}
