import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberUpdateWithoutUserInput } from './classroom-member-update-without-user.input';
import { ClassroomMemberCreateWithoutUserInput } from './classroom-member-create-without-user.input';

@InputType()
export class ClassroomMemberUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:false})
    where!: ClassroomMemberWhereUniqueInput;

    @Field(() => ClassroomMemberUpdateWithoutUserInput, {nullable:false})
    update!: ClassroomMemberUpdateWithoutUserInput;

    @Field(() => ClassroomMemberCreateWithoutUserInput, {nullable:false})
    create!: ClassroomMemberCreateWithoutUserInput;
}
