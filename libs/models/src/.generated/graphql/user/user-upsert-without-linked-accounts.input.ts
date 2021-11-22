import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLinkedAccountsInput } from './user-update-without-linked-accounts.input';
import { UserCreateWithoutLinkedAccountsInput } from './user-create-without-linked-accounts.input';

@InputType()
export class UserUpsertWithoutLinkedAccountsInput {

    @Field(() => UserUpdateWithoutLinkedAccountsInput, {nullable:false})
    update!: UserUpdateWithoutLinkedAccountsInput;

    @Field(() => UserCreateWithoutLinkedAccountsInput, {nullable:false})
    create!: UserCreateWithoutLinkedAccountsInput;
}
