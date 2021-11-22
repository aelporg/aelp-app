import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderCreateManyInput } from './provider-create-many.input';

@ArgsType()
export class CreateManyProviderArgs {

    @Field(() => [ProviderCreateManyInput], {nullable:false})
    data!: Array<ProviderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
