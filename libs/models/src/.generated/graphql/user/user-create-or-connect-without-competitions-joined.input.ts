import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCompetitionsJoinedInput } from './user-create-without-competitions-joined.input';

@InputType()
export class UserCreateOrConnectWithoutCompetitionsJoinedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCompetitionsJoinedInput, {nullable:false})
    create!: UserCreateWithoutCompetitionsJoinedInput;
}
