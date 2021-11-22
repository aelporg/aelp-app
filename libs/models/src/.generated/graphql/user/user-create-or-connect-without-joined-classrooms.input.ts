import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutJoinedClassroomsInput } from './user-create-without-joined-classrooms.input';

@InputType()
export class UserCreateOrConnectWithoutJoinedClassroomsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutJoinedClassroomsInput, {nullable:false})
    create!: UserCreateWithoutJoinedClassroomsInput;
}
