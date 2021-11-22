import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutJoinedClassroomsInput } from './user-create-without-joined-classrooms.input';
import { UserCreateOrConnectWithoutJoinedClassroomsInput } from './user-create-or-connect-without-joined-classrooms.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutJoinedClassroomsInput {

    @Field(() => UserCreateWithoutJoinedClassroomsInput, {nullable:true})
    create?: UserCreateWithoutJoinedClassroomsInput;

    @Field(() => UserCreateOrConnectWithoutJoinedClassroomsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutJoinedClassroomsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
