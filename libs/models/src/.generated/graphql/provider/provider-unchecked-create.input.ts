import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountUncheckedCreateNestedManyWithoutProviderInput } from '../linked-account/linked-account-unchecked-create-nested-many-without-provider.input';

@InputType()
export class ProviderUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LinkedAccountUncheckedCreateNestedManyWithoutProviderInput, {nullable:true})
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutProviderInput;
}
