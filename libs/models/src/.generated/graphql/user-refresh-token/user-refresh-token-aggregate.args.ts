import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenWhereInput } from './user-refresh-token-where.input';
import { UserRefreshTokenOrderByWithRelationInput } from './user-refresh-token-order-by-with-relation.input';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRefreshTokenCountAggregateInput } from './user-refresh-token-count-aggregate.input';
import { UserRefreshTokenMinAggregateInput } from './user-refresh-token-min-aggregate.input';
import { UserRefreshTokenMaxAggregateInput } from './user-refresh-token-max-aggregate.input';

@ArgsType()
export class UserRefreshTokenAggregateArgs {

    @Field(() => UserRefreshTokenWhereInput, {nullable:true})
    where?: UserRefreshTokenWhereInput;

    @Field(() => [UserRefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserRefreshTokenOrderByWithRelationInput>;

    @Field(() => UserRefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: UserRefreshTokenWhereUniqueInput;

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
