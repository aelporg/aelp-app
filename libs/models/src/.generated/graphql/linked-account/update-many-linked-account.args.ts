import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountUpdateManyMutationInput } from './linked-account-update-many-mutation.input';
import { LinkedAccountWhereInput } from './linked-account-where.input';

@ArgsType()
export class UpdateManyLinkedAccountArgs {

    @Field(() => LinkedAccountUpdateManyMutationInput, {nullable:false})
    data!: LinkedAccountUpdateManyMutationInput;

    @Field(() => LinkedAccountWhereInput, {nullable:true})
    where?: LinkedAccountWhereInput;
}
