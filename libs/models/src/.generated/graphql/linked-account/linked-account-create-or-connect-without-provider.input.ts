import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountCreateWithoutProviderInput } from './linked-account-create-without-provider.input';

@InputType()
export class LinkedAccountCreateOrConnectWithoutProviderInput {

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;

    @Field(() => LinkedAccountCreateWithoutProviderInput, {nullable:false})
    create!: LinkedAccountCreateWithoutProviderInput;
}
