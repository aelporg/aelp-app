import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLinkedAccountsInput } from './user-create-without-linked-accounts.input';
import { UserCreateOrConnectWithoutLinkedAccountsInput } from './user-create-or-connect-without-linked-accounts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLinkedAccountsInput {

    @Field(() => UserCreateWithoutLinkedAccountsInput, {nullable:true})
    create?: UserCreateWithoutLinkedAccountsInput;

    @Field(() => UserCreateOrConnectWithoutLinkedAccountsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLinkedAccountsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
