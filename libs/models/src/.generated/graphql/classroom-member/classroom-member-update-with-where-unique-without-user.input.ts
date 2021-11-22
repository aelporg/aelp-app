import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberUpdateWithoutUserInput } from './classroom-member-update-without-user.input';

@InputType()
export class ClassroomMemberUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:false})
    where!: ClassroomMemberWhereUniqueInput;

    @Field(() => ClassroomMemberUpdateWithoutUserInput, {nullable:false})
    data!: ClassroomMemberUpdateWithoutUserInput;
}
