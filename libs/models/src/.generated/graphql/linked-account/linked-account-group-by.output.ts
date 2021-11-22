import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LinkedAccountCountAggregate } from './linked-account-count-aggregate.output';
import { LinkedAccountMinAggregate } from './linked-account-min-aggregate.output';
import { LinkedAccountMaxAggregate } from './linked-account-max-aggregate.output';

@ObjectType()
export class LinkedAccountGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => LinkedAccountCountAggregate, {nullable:true})
    _count?: LinkedAccountCountAggregate;

    @Field(() => LinkedAccountMinAggregate, {nullable:true})
    _min?: LinkedAccountMinAggregate;

    @Field(() => LinkedAccountMaxAggregate, {nullable:true})
    _max?: LinkedAccountMaxAggregate;
}
