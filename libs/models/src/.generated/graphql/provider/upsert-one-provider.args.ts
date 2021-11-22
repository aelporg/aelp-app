import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';
import { ProviderCreateInput } from './provider-create.input';
import { ProviderUpdateInput } from './provider-update.input';

@ArgsType()
export class UpsertOneProviderArgs {

    @Field(() => ProviderWhereUniqueInput, {nullable:false})
    where!: ProviderWhereUniqueInput;

    @Field(() => ProviderCreateInput, {nullable:false})
    create!: ProviderCreateInput;

    @Field(() => ProviderUpdateInput, {nullable:false})
    update!: ProviderUpdateInput;
}
