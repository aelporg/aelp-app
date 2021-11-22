import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderWhereInput } from './provider-where.input';

@ArgsType()
export class DeleteManyProviderArgs {

    @Field(() => ProviderWhereInput, {nullable:true})
    where?: ProviderWhereInput;
}
