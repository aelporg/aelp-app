import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LinkedAccountCountOrderByAggregateInput } from './linked-account-count-order-by-aggregate.input';
import { LinkedAccountMaxOrderByAggregateInput } from './linked-account-max-order-by-aggregate.input';
import { LinkedAccountMinOrderByAggregateInput } from './linked-account-min-order-by-aggregate.input';

@InputType()
export class LinkedAccountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => LinkedAccountCountOrderByAggregateInput, {nullable:true})
    _count?: LinkedAccountCountOrderByAggregateInput;

    @Field(() => LinkedAccountMaxOrderByAggregateInput, {nullable:true})
    _max?: LinkedAccountMaxOrderByAggregateInput;

    @Field(() => LinkedAccountMinOrderByAggregateInput, {nullable:true})
    _min?: LinkedAccountMinOrderByAggregateInput;
}
