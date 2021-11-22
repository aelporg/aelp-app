import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberCreateWithoutUserInput } from './classroom-member-create-without-user.input';

@InputType()
export class ClassroomMemberCreateOrConnectWithoutUserInput {

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:false})
    where!: ClassroomMemberWhereUniqueInput;

    @Field(() => ClassroomMemberCreateWithoutUserInput, {nullable:false})
    create!: ClassroomMemberCreateWithoutUserInput;
}
