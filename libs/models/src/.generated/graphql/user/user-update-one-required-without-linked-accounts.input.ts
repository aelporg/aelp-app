import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLinkedAccountsInput } from './user-create-without-linked-accounts.input';
import { UserCreateOrConnectWithoutLinkedAccountsInput } from './user-create-or-connect-without-linked-accounts.input';
import { UserUpsertWithoutLinkedAccountsInput } from './user-upsert-without-linked-accounts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLinkedAccountsInput } from './user-update-without-linked-accounts.input';

@InputType()
export class UserUpdateOneRequiredWithoutLinkedAccountsInput {

    @Field(() => UserCreateWithoutLinkedAccountsInput, {nullable:true})
    create?: UserCreateWithoutLinkedAccountsInput;

    @Field(() => UserCreateOrConnectWithoutLinkedAccountsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLinkedAccountsInput;

    @Field(() => UserUpsertWithoutLinkedAccountsInput, {nullable:true})
    upsert?: UserUpsertWithoutLinkedAccountsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLinkedAccountsInput, {nullable:true})
    update?: UserUpdateWithoutLinkedAccountsInput;
}
