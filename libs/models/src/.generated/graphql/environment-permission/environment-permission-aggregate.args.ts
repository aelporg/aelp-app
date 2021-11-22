import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereInput } from './environment-permission-where.input';
import { EnvironmentPermissionOrderByWithRelationInput } from './environment-permission-order-by-with-relation.input';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EnvironmentPermissionCountAggregateInput } from './environment-permission-count-aggregate.input';
import { EnvironmentPermissionMinAggregateInput } from './environment-permission-min-aggregate.input';
import { EnvironmentPermissionMaxAggregateInput } from './environment-permission-max-aggregate.input';

@ArgsType()
export class EnvironmentPermissionAggregateArgs {

    @Field(() => EnvironmentPermissionWhereInput, {nullable:true})
    where?: EnvironmentPermissionWhereInput;

    @Field(() => [EnvironmentPermissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EnvironmentPermissionOrderByWithRelationInput>;

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:true})
    cursor?: EnvironmentPermissionWhereUniqueInput;

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
