import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EnvironmentCountAggregate } from './environment-count-aggregate.output';
import { EnvironmentMinAggregate } from './environment-min-aggregate.output';
import { EnvironmentMaxAggregate } from './environment-max-aggregate.output';

@ObjectType()
export class AggregateEnvironment {

    @Field(() => EnvironmentCountAggregate, {nullable:true})
    _count?: EnvironmentCountAggregate;

    @Field(() => EnvironmentMinAggregate, {nullable:true})
    _min?: EnvironmentMinAggregate;

    @Field(() => EnvironmentMaxAggregate, {nullable:true})
    _max?: EnvironmentMaxAggregate;
}
