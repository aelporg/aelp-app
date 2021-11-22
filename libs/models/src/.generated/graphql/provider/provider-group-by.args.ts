import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderWhereInput } from './provider-where.input';
import { ProviderOrderByWithAggregationInput } from './provider-order-by-with-aggregation.input';
import { ProviderScalarFieldEnum } from './provider-scalar-field.enum';
import { ProviderScalarWhereWithAggregatesInput } from './provider-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProviderCountAggregateInput } from './provider-count-aggregate.input';
import { ProviderMinAggregateInput } from './provider-min-aggregate.input';
import { ProviderMaxAggregateInput } from './provider-max-aggregate.input';

@ArgsType()
export class ProviderGroupByArgs {

    @Field(() => ProviderWhereInput, {nullable:true})
    where?: ProviderWhereInput;

    @Field(() => [ProviderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProviderOrderByWithAggregationInput>;

    @Field(() => [ProviderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProviderScalarFieldEnum>;

    @Field(() => ProviderScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProviderScalarWhereWithAggregatesInput;

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
