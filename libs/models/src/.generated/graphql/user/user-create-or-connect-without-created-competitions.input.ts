import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCreatedCompetitionsInput } from './user-create-without-created-competitions.input';

@InputType()
export class UserCreateOrConnectWithoutCreatedCompetitionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCreatedCompetitionsInput, {nullable:false})
    create!: UserCreateWithoutCreatedCompetitionsInput;
}
