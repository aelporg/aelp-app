import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CompetitionCountAggregate } from './competition-count-aggregate.output';
import { CompetitionMinAggregate } from './competition-min-aggregate.output';
import { CompetitionMaxAggregate } from './competition-max-aggregate.output';

@ObjectType()
export class CompetitionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false})
    isPrivate!: boolean;

    @Field(() => String, {nullable:false})
    creatorUserId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CompetitionCountAggregate, {nullable:true})
    _count?: CompetitionCountAggregate;

    @Field(() => CompetitionMinAggregate, {nullable:true})
    _min?: CompetitionMinAggregate;

    @Field(() => CompetitionMaxAggregate, {nullable:true})
    _max?: CompetitionMaxAggregate;
}
