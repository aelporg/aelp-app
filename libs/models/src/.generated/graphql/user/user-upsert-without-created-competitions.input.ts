import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCreatedCompetitionsInput } from './user-update-without-created-competitions.input';
import { UserCreateWithoutCreatedCompetitionsInput } from './user-create-without-created-competitions.input';

@InputType()
export class UserUpsertWithoutCreatedCompetitionsInput {

    @Field(() => UserUpdateWithoutCreatedCompetitionsInput, {nullable:false})
    update!: UserUpdateWithoutCreatedCompetitionsInput;

    @Field(() => UserCreateWithoutCreatedCompetitionsInput, {nullable:false})
    create!: UserCreateWithoutCreatedCompetitionsInput;
}
