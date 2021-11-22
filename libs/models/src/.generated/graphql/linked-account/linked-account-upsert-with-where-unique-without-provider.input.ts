import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountUpdateWithoutProviderInput } from './linked-account-update-without-provider.input';
import { LinkedAccountCreateWithoutProviderInput } from './linked-account-create-without-provider.input';

@InputType()
export class LinkedAccountUpsertWithWhereUniqueWithoutProviderInput {

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;

    @Field(() => LinkedAccountUpdateWithoutProviderInput, {nullable:false})
    update!: LinkedAccountUpdateWithoutProviderInput;

    @Field(() => LinkedAccountCreateWithoutProviderInput, {nullable:false})
    create!: LinkedAccountCreateWithoutProviderInput;
}
