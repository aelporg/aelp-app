import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomUpdateWithoutMembersInput } from './classroom-update-without-members.input';
import { ClassroomCreateWithoutMembersInput } from './classroom-create-without-members.input';

@InputType()
export class ClassroomUpsertWithoutMembersInput {

    @Field(() => ClassroomUpdateWithoutMembersInput, {nullable:false})
    update!: ClassroomUpdateWithoutMembersInput;

    @Field(() => ClassroomCreateWithoutMembersInput, {nullable:false})
    create!: ClassroomCreateWithoutMembersInput;
}
