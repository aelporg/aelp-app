import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LinkedAccountCountAggregate } from './linked-account-count-aggregate.output';
import { LinkedAccountMinAggregate } from './linked-account-min-aggregate.output';
import { LinkedAccountMaxAggregate } from './linked-account-max-aggregate.output';

@ObjectType()
export class AggregateLinkedAccount {

    @Field(() => LinkedAccountCountAggregate, {nullable:true})
    _count?: LinkedAccountCountAggregate;

    @Field(() => LinkedAccountMinAggregate, {nullable:true})
    _min?: LinkedAccountMinAggregate;

    @Field(() => LinkedAccountMaxAggregate, {nullable:true})
    _max?: LinkedAccountMaxAggregate;
}
