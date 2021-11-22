import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountCreateNestedManyWithoutProviderInput } from '../linked-account/linked-account-create-nested-many-without-provider.input';

@InputType()
export class ProviderCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LinkedAccountCreateNestedManyWithoutProviderInput, {nullable:true})
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutProviderInput;
}
