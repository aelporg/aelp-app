import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberUpdateWithoutClassroomInput } from './classroom-member-update-without-classroom.input';

@InputType()
export class ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput {

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:false})
    where!: ClassroomMemberWhereUniqueInput;

    @Field(() => ClassroomMemberUpdateWithoutClassroomInput, {nullable:false})
    data!: ClassroomMemberUpdateWithoutClassroomInput;
}
