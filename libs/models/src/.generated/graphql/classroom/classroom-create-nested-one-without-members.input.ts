import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomCreateWithoutMembersInput } from './classroom-create-without-members.input';
import { ClassroomCreateOrConnectWithoutMembersInput } from './classroom-create-or-connect-without-members.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';

@InputType()
export class ClassroomCreateNestedOneWithoutMembersInput {

    @Field(() => ClassroomCreateWithoutMembersInput, {nullable:true})
    create?: ClassroomCreateWithoutMembersInput;

    @Field(() => ClassroomCreateOrConnectWithoutMembersInput, {nullable:true})
    connectOrCreate?: ClassroomCreateOrConnectWithoutMembersInput;

    @Field(() => ClassroomWhereUniqueInput, {nullable:true})
    connect?: ClassroomWhereUniqueInput;
}
