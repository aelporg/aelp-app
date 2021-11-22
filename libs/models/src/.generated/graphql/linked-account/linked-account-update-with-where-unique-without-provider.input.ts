import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountUpdateWithoutProviderInput } from './linked-account-update-without-provider.input';

@InputType()
export class LinkedAccountUpdateWithWhereUniqueWithoutProviderInput {

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;

    @Field(() => LinkedAccountUpdateWithoutProviderInput, {nullable:false})
    data!: LinkedAccountUpdateWithoutProviderInput;
}
