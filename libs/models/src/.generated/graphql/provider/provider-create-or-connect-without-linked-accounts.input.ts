import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';
import { ProviderCreateWithoutLinkedAccountsInput } from './provider-create-without-linked-accounts.input';

@InputType()
export class ProviderCreateOrConnectWithoutLinkedAccountsInput {

    @Field(() => ProviderWhereUniqueInput, {nullable:false})
    where!: ProviderWhereUniqueInput;

    @Field(() => ProviderCreateWithoutLinkedAccountsInput, {nullable:false})
    create!: ProviderCreateWithoutLinkedAccountsInput;
}
