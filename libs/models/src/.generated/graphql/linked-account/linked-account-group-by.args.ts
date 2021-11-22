import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountWhereInput } from './linked-account-where.input';
import { LinkedAccountOrderByWithAggregationInput } from './linked-account-order-by-with-aggregation.input';
import { LinkedAccountScalarFieldEnum } from './linked-account-scalar-field.enum';
import { LinkedAccountScalarWhereWithAggregatesInput } from './linked-account-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LinkedAccountCountAggregateInput } from './linked-account-count-aggregate.input';
import { LinkedAccountMinAggregateInput } from './linked-account-min-aggregate.input';
import { LinkedAccountMaxAggregateInput } from './linked-account-max-aggregate.input';

@ArgsType()
export class LinkedAccountGroupByArgs {

    @Field(() => LinkedAccountWhereInput, {nullable:true})
    where?: LinkedAccountWhereInput;

    @Field(() => [LinkedAccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LinkedAccountOrderByWithAggregationInput>;

    @Field(() => [LinkedAccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LinkedAccountScalarFieldEnum>;

    @Field(() => LinkedAccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: LinkedAccountScalarWhereWithAggregatesInput;

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
