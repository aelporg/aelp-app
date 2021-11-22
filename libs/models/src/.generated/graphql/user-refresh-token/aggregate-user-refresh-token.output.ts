import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRefreshTokenCountAggregate } from './user-refresh-token-count-aggregate.output';
import { UserRefreshTokenMinAggregate } from './user-refresh-token-min-aggregate.output';
import { UserRefreshTokenMaxAggregate } from './user-refresh-token-max-aggregate.output';

@ObjectType()
export class AggregateUserRefreshToken {

    @Field(() => UserRefreshTokenCountAggregate, {nullable:true})
    _count?: UserRefreshTokenCountAggregate;

    @Field(() => UserRefreshTokenMinAggregate, {nullable:true})
    _min?: UserRefreshTokenMinAggregate;

    @Field(() => UserRefreshTokenMaxAggregate, {nullable:true})
    _max?: UserRefreshTokenMaxAggregate;
}
