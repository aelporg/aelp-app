import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountWhereInput } from './linked-account-where.input';
import { LinkedAccountOrderByWithRelationInput } from './linked-account-order-by-with-relation.input';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LinkedAccountCountAggregateInput } from './linked-account-count-aggregate.input';
import { LinkedAccountMinAggregateInput } from './linked-account-min-aggregate.input';
import { LinkedAccountMaxAggregateInput } from './linked-account-max-aggregate.input';

@ArgsType()
export class LinkedAccountAggregateArgs {

    @Field(() => LinkedAccountWhereInput, {nullable:true})
    where?: LinkedAccountWhereInput;

    @Field(() => [LinkedAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LinkedAccountOrderByWithRelationInput>;

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:true})
    cursor?: LinkedAccountWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LinkedAccountCountAggregateInput, {nullable:true})
    _count?: LinkedAccountCountAggregateInput;

    @Field(() => LinkedAccountMinAggregateInput, {nullable:true})
    _min?: LinkedAccountMinAggregateInput;

    @Field(() => LinkedAccountMaxAggregateInput, {nullable:true})
    _max?: LinkedAccountMaxAggregateInput;
}
