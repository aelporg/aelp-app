import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutLinkedAccountsInput } from './user-create-without-linked-accounts.input';

@InputType()
export class UserCreateOrConnectWithoutLinkedAccountsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutLinkedAccountsInput, {nullable:false})
    create!: UserCreateWithoutLinkedAccountsInput;
}
