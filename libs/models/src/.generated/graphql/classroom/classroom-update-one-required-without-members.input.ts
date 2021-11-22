import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomCreateWithoutMembersInput } from './classroom-create-without-members.input';
import { ClassroomCreateOrConnectWithoutMembersInput } from './classroom-create-or-connect-without-members.input';
import { ClassroomUpsertWithoutMembersInput } from './classroom-upsert-without-members.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { ClassroomUpdateWithoutMembersInput } from './classroom-update-without-members.input';

@InputType()
export class ClassroomUpdateOneRequiredWithoutMembersInput {

    @Field(() => ClassroomCreateWithoutMembersInput, {nullable:true})
    create?: ClassroomCreateWithoutMembersInput;

    @Field(() => ClassroomCreateOrConnectWithoutMembersInput, {nullable:true})
    connectOrCreate?: ClassroomCreateOrConnectWithoutMembersInput;

    @Field(() => ClassroomUpsertWithoutMembersInput, {nullable:true})
    upsert?: ClassroomUpsertWithoutMembersInput;

    @Field(() => ClassroomWhereUniqueInput, {nullable:true})
    connect?: ClassroomWhereUniqueInput;

    @Field(() => ClassroomUpdateWithoutMembersInput, {nullable:true})
    update?: ClassroomUpdateWithoutMembersInput;
}
