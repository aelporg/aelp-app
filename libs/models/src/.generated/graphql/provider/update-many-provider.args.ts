import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderUpdateManyMutationInput } from './provider-update-many-mutation.input';
import { ProviderWhereInput } from './provider-where.input';

@ArgsType()
export class UpdateManyProviderArgs {

    @Field(() => ProviderUpdateManyMutationInput, {nullable:false})
    data!: ProviderUpdateManyMutationInput;

    @Field(() => ProviderWhereInput, {nullable:true})
    where?: ProviderWhereInput;
}
