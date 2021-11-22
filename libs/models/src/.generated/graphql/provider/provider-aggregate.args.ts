import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderWhereInput } from './provider-where.input';
import { ProviderOrderByWithRelationInput } from './provider-order-by-with-relation.input';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProviderCountAggregateInput } from './provider-count-aggregate.input';
import { ProviderMinAggregateInput } from './provider-min-aggregate.input';
import { ProviderMaxAggregateInput } from './provider-max-aggregate.input';

@ArgsType()
export class ProviderAggregateArgs {

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

    @Field(() => ProviderCountAggregateInput, {nullable:true})
    _count?: ProviderCountAggregateInput;

    @Field(() => ProviderMinAggregateInput, {nullable:true})
    _min?: ProviderMinAggregateInput;

    @Field(() => ProviderMaxAggregateInput, {nullable:true})
    _max?: ProviderMaxAggregateInput;
}
