import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereInput } from './environment-permission-where.input';
import { EnvironmentPermissionOrderByWithAggregationInput } from './environment-permission-order-by-with-aggregation.input';
import { EnvironmentPermissionScalarFieldEnum } from './environment-permission-scalar-field.enum';
import { EnvironmentPermissionScalarWhereWithAggregatesInput } from './environment-permission-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EnvironmentPermissionCountAggregateInput } from './environment-permission-count-aggregate.input';
import { EnvironmentPermissionMinAggregateInput } from './environment-permission-min-aggregate.input';
import { EnvironmentPermissionMaxAggregateInput } from './environment-permission-max-aggregate.input';

@ArgsType()
export class EnvironmentPermissionGroupByArgs {

    @Field(() => EnvironmentPermissionWhereInput, {nullable:true})
    where?: EnvironmentPermissionWhereInput;

    @Field(() => [EnvironmentPermissionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EnvironmentPermissionOrderByWithAggregationInput>;

    @Field(() => [EnvironmentPermissionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EnvironmentPermissionScalarFieldEnum>;

    @Field(() => EnvironmentPermissionScalarWhereWithAggregatesInput, {nullable:true})
    having?: EnvironmentPermissionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EnvironmentPermissionCountAggregateInput, {nullable:true})
    _count?: EnvironmentPermissionCountAggregateInput;

    @Field(() => EnvironmentPermissionMinAggregateInput, {nullable:true})
    _min?: EnvironmentPermissionMinAggregateInput;

    @Field(() => EnvironmentPermissionMaxAggregateInput, {nullable:true})
    _max?: EnvironmentPermissionMaxAggregateInput;
}
