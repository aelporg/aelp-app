import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountScalarWhereInput } from './linked-account-scalar-where.input';
import { LinkedAccountUpdateManyMutationInput } from './linked-account-update-many-mutation.input';

@InputType()
export class LinkedAccountUpdateManyWithWhereWithoutProviderInput {

    @Field(() => LinkedAccountScalarWhereInput, {nullable:false})
    where!: LinkedAccountScalarWhereInput;

    @Field(() => LinkedAccountUpdateManyMutationInput, {nullable:false})
    data!: LinkedAccountUpdateManyMutationInput;
}
