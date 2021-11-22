import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderWhereInput } from './provider-where.input';
import { ProviderOrderByWithRelationInput } from './provider-order-by-with-relation.input';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProviderScalarFieldEnum } from './provider-scalar-field.enum';

@ArgsType()
export class FindFirstProviderArgs {

    @Field(() => ProviderWhereInput, {nullable:true})
    where?: ProviderWhereInput;

    @Field(() => [ProviderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProviderOrderByWithRelationInput>;

    @Field(() => ProviderWhereUniqueInput, {nullable:true})
    cursor?: ProviderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProviderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProviderScalarFieldEnum>;
}
