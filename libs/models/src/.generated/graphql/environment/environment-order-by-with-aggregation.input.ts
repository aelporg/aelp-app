import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EnvironmentCountOrderByAggregateInput } from './environment-count-order-by-aggregate.input';
import { EnvironmentMaxOrderByAggregateInput } from './environment-max-order-by-aggregate.input';
import { EnvironmentMinOrderByAggregateInput } from './environment-min-order-by-aggregate.input';

@InputType()
export class EnvironmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scratchPadData?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    submitted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => EnvironmentCountOrderByAggregateInput, {nullable:true})
    _count?: EnvironmentCountOrderByAggregateInput;

    @Field(() => EnvironmentMaxOrderByAggregateInput, {nullable:true})
    _max?: EnvironmentMaxOrderByAggregateInput;

    @Field(() => EnvironmentMinOrderByAggregateInput, {nullable:true})
    _min?: EnvironmentMinOrderByAggregateInput;
}
