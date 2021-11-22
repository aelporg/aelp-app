import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRefreshTokenCountOrderByAggregateInput } from './user-refresh-token-count-order-by-aggregate.input';
import { UserRefreshTokenMaxOrderByAggregateInput } from './user-refresh-token-max-order-by-aggregate.input';
import { UserRefreshTokenMinOrderByAggregateInput } from './user-refresh-token-min-order-by-aggregate.input';

@InputType()
export class UserRefreshTokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiryDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => UserRefreshTokenCountOrderByAggregateInput, {nullable:true})
    _count?: UserRefreshTokenCountOrderByAggregateInput;

    @Field(() => UserRefreshTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: UserRefreshTokenMaxOrderByAggregateInput;

    @Field(() => UserRefreshTokenMinOrderByAggregateInput, {nullable:true})
    _min?: UserRefreshTokenMinOrderByAggregateInput;
}
