import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderCreateNestedOneWithoutLinkedAccountsInput } from '../provider/provider-create-nested-one-without-linked-accounts.input';

@InputType()
export class LinkedAccountCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ProviderCreateNestedOneWithoutLinkedAccountsInput, {nullable:false})
    provider!: ProviderCreateNestedOneWithoutLinkedAccountsInput;
}
