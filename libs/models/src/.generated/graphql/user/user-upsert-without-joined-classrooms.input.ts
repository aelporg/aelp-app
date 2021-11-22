import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutJoinedClassroomsInput } from './user-update-without-joined-classrooms.input';
import { UserCreateWithoutJoinedClassroomsInput } from './user-create-without-joined-classrooms.input';

@InputType()
export class UserUpsertWithoutJoinedClassroomsInput {

    @Field(() => UserUpdateWithoutJoinedClassroomsInput, {nullable:false})
    update!: UserUpdateWithoutJoinedClassroomsInput;

    @Field(() => UserCreateWithoutJoinedClassroomsInput, {nullable:false})
    create!: UserCreateWithoutJoinedClassroomsInput;
}
