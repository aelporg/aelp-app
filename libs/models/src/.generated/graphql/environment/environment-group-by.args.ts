import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentWhereInput } from './environment-where.input';
import { EnvironmentOrderByWithAggregationInput } from './environment-order-by-with-aggregation.input';
import { EnvironmentScalarFieldEnum } from './environment-scalar-field.enum';
import { EnvironmentScalarWhereWithAggregatesInput } from './environment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EnvironmentCountAggregateInput } from './environment-count-aggregate.input';
import { EnvironmentMinAggregateInput } from './environment-min-aggregate.input';
import { EnvironmentMaxAggregateInput } from './environment-max-aggregate.input';

@ArgsType()
export class EnvironmentGroupByArgs {

    @Field(() => EnvironmentWhereInput, {nullable:true})
    where?: EnvironmentWhereInput;

    @Field(() => [EnvironmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EnvironmentOrderByWithAggregationInput>;

    @Field(() => [EnvironmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EnvironmentScalarFieldEnum>;

    @Field(() => EnvironmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: EnvironmentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EnvironmentCountAggregateInput, {nullable:true})
    _count?: EnvironmentCountAggregateInput;

    @Field(() => EnvironmentMinAggregateInput, {nullable:true})
    _min?: EnvironmentMinAggregateInput;

    @Field(() => EnvironmentMaxAggregateInput, {nullable:true})
    _max?: EnvironmentMaxAggregateInput;
}
