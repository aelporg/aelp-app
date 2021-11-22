import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderCreateWithoutLinkedAccountsInput } from './provider-create-without-linked-accounts.input';
import { ProviderCreateOrConnectWithoutLinkedAccountsInput } from './provider-create-or-connect-without-linked-accounts.input';
import { ProviderUpsertWithoutLinkedAccountsInput } from './provider-upsert-without-linked-accounts.input';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';
import { ProviderUpdateWithoutLinkedAccountsInput } from './provider-update-without-linked-accounts.input';

@InputType()
export class ProviderUpdateOneRequiredWithoutLinkedAccountsInput {

    @Field(() => ProviderCreateWithoutLinkedAccountsInput, {nullable:true})
    create?: ProviderCreateWithoutLinkedAccountsInput;

    @Field(() => ProviderCreateOrConnectWithoutLinkedAccountsInput, {nullable:true})
    connectOrCreate?: ProviderCreateOrConnectWithoutLinkedAccountsInput;

    @Field(() => ProviderUpsertWithoutLinkedAccountsInput, {nullable:true})
    upsert?: ProviderUpsertWithoutLinkedAccountsInput;

    @Field(() => ProviderWhereUniqueInput, {nullable:true})
    connect?: ProviderWhereUniqueInput;

    @Field(() => ProviderUpdateWithoutLinkedAccountsInput, {nullable:true})
    update?: ProviderUpdateWithoutLinkedAccountsInput;
}
