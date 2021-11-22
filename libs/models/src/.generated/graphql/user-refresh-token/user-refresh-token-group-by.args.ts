import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenWhereInput } from './user-refresh-token-where.input';
import { UserRefreshTokenOrderByWithAggregationInput } from './user-refresh-token-order-by-with-aggregation.input';
import { UserRefreshTokenScalarFieldEnum } from './user-refresh-token-scalar-field.enum';
import { UserRefreshTokenScalarWhereWithAggregatesInput } from './user-refresh-token-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRefreshTokenCountAggregateInput } from './user-refresh-token-count-aggregate.input';
import { UserRefreshTokenMinAggregateInput } from './user-refresh-token-min-aggregate.input';
import { UserRefreshTokenMaxAggregateInput } from './user-refresh-token-max-aggregate.input';

@ArgsType()
export class UserRefreshTokenGroupByArgs {

    @Field(() => UserRefreshTokenWhereInput, {nullable:true})
    where?: UserRefreshTokenWhereInput;

    @Field(() => [UserRefreshTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserRefreshTokenOrderByWithAggregationInput>;

    @Field(() => [UserRefreshTokenScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserRefreshTokenScalarFieldEnum>;

    @Field(() => UserRefreshTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserRefreshTokenScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserRefreshTokenCountAggregateInput, {nullable:true})
    _count?: UserRefreshTokenCountAggregateInput;

    @Field(() => UserRefreshTokenMinAggregateInput, {nullable:true})
    _min?: UserRefreshTokenMinAggregateInput;

    @Field(() => UserRefreshTokenMaxAggregateInput, {nullable:true})
    _max?: UserRefreshTokenMaxAggregateInput;
}
