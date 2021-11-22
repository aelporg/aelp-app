import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderCreateWithoutLinkedAccountsInput } from './provider-create-without-linked-accounts.input';
import { ProviderCreateOrConnectWithoutLinkedAccountsInput } from './provider-create-or-connect-without-linked-accounts.input';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';

@InputType()
export class ProviderCreateNestedOneWithoutLinkedAccountsInput {

    @Field(() => ProviderCreateWithoutLinkedAccountsInput, {nullable:true})
    create?: ProviderCreateWithoutLinkedAccountsInput;

    @Field(() => ProviderCreateOrConnectWithoutLinkedAccountsInput, {nullable:true})
    connectOrCreate?: ProviderCreateOrConnectWithoutLinkedAccountsInput;

    @Field(() => ProviderWhereUniqueInput, {nullable:true})
    connect?: ProviderWhereUniqueInput;
}
