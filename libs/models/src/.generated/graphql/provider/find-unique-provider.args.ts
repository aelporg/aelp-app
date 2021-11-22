import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';

@ArgsType()
export class FindUniqueProviderArgs {

    @Field(() => ProviderWhereUniqueInput, {nullable:false})
    where!: ProviderWhereUniqueInput;
}
