import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderCreateInput } from './provider-create.input';

@ArgsType()
export class CreateOneProviderArgs {

    @Field(() => ProviderCreateInput, {nullable:false})
    data!: ProviderCreateInput;
}
