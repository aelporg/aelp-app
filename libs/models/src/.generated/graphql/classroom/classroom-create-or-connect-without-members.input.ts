import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { ClassroomCreateWithoutMembersInput } from './classroom-create-without-members.input';

@InputType()
export class ClassroomCreateOrConnectWithoutMembersInput {

    @Field(() => ClassroomWhereUniqueInput, {nullable:false})
    where!: ClassroomWhereUniqueInput;

    @Field(() => ClassroomCreateWithoutMembersInput, {nullable:false})
    create!: ClassroomCreateWithoutMembersInput;
}
