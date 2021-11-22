import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberUpdateWithoutClassroomInput } from './classroom-member-update-without-classroom.input';
import { ClassroomMemberCreateWithoutClassroomInput } from './classroom-member-create-without-classroom.input';

@InputType()
export class ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput {

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:false})
    where!: ClassroomMemberWhereUniqueInput;

    @Field(() => ClassroomMemberUpdateWithoutClassroomInput, {nullable:false})
    update!: ClassroomMemberUpdateWithoutClassroomInput;

    @Field(() => ClassroomMemberCreateWithoutClassroomInput, {nullable:false})
    create!: ClassroomMemberCreateWithoutClassroomInput;
}
