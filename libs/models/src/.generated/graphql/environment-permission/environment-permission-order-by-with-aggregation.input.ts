import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EnvironmentPermissionCountOrderByAggregateInput } from './environment-permission-count-order-by-aggregate.input';
import { EnvironmentPermissionMaxOrderByAggregateInput } from './environment-permission-max-order-by-aggregate.input';
import { EnvironmentPermissionMinOrderByAggregateInput } from './environment-permission-min-order-by-aggregate.input';

@InputType()
export class EnvironmentPermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    environmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permission?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => EnvironmentPermissionCountOrderByAggregateInput, {nullable:true})
    _count?: EnvironmentPermissionCountOrderByAggregateInput;

    @Field(() => EnvironmentPermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: EnvironmentPermissionMaxOrderByAggregateInput;

    @Field(() => EnvironmentPermissionMinOrderByAggregateInput, {nullable:true})
    _min?: EnvironmentPermissionMinOrderByAggregateInput;
}
