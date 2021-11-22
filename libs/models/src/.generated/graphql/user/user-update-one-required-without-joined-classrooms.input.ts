import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutJoinedClassroomsInput } from './user-create-without-joined-classrooms.input';
import { UserCreateOrConnectWithoutJoinedClassroomsInput } from './user-create-or-connect-without-joined-classrooms.input';
import { UserUpsertWithoutJoinedClassroomsInput } from './user-upsert-without-joined-classrooms.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutJoinedClassroomsInput } from './user-update-without-joined-classrooms.input';

@InputType()
export class UserUpdateOneRequiredWithoutJoinedClassroomsInput {

    @Field(() => UserCreateWithoutJoinedClassroomsInput, {nullable:true})
    create?: UserCreateWithoutJoinedClassroomsInput;

    @Field(() => UserCreateOrConnectWithoutJoinedClassroomsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutJoinedClassroomsInput;

    @Field(() => UserUpsertWithoutJoinedClassroomsInput, {nullable:true})
    upsert?: UserUpsertWithoutJoinedClassroomsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutJoinedClassroomsInput, {nullable:true})
    update?: UserUpdateWithoutJoinedClassroomsInput;
}
