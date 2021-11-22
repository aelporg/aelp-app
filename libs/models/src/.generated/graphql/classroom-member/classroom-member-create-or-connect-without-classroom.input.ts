import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberCreateWithoutClassroomInput } from './classroom-member-create-without-classroom.input';

@InputType()
export class ClassroomMemberCreateOrConnectWithoutClassroomInput {

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:false})
    where!: ClassroomMemberWhereUniqueInput;

    @Field(() => ClassroomMemberCreateWithoutClassroomInput, {nullable:false})
    create!: ClassroomMemberCreateWithoutClassroomInput;
}
