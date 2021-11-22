import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLinkedAccountsInput } from '../user/user-create-nested-one-without-linked-accounts.input';
import { ProviderCreateNestedOneWithoutLinkedAccountsInput } from '../provider/provider-create-nested-one-without-linked-accounts.input';

@InputType()
export class LinkedAccountCreateInput {

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLinkedAccountsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLinkedAccountsInput;

    @Field(() => ProviderCreateNestedOneWithoutLinkedAccountsInput, {nullable:false})
    provider!: ProviderCreateNestedOneWithoutLinkedAccountsInput;
}
