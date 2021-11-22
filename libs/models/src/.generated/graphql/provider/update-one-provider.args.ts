import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderUpdateInput } from './provider-update.input';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';

@ArgsType()
export class UpdateOneProviderArgs {

    @Field(() => ProviderUpdateInput, {nullable:false})
    data!: ProviderUpdateInput;

    @Field(() => ProviderWhereUniqueInput, {nullable:false})
    where!: ProviderWhereUniqueInput;
}
