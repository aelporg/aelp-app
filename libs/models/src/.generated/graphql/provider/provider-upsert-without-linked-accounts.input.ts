import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderUpdateWithoutLinkedAccountsInput } from './provider-update-without-linked-accounts.input';
import { ProviderCreateWithoutLinkedAccountsInput } from './provider-create-without-linked-accounts.input';

@InputType()
export class ProviderUpsertWithoutLinkedAccountsInput {

    @Field(() => ProviderUpdateWithoutLinkedAccountsInput, {nullable:false})
    update!: ProviderUpdateWithoutLinkedAccountsInput;

    @Field(() => ProviderCreateWithoutLinkedAccountsInput, {nullable:false})
    create!: ProviderCreateWithoutLinkedAccountsInput;
}
