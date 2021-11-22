import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProviderCountAggregate } from './provider-count-aggregate.output';
import { ProviderMinAggregate } from './provider-min-aggregate.output';
import { ProviderMaxAggregate } from './provider-max-aggregate.output';

@ObjectType()
export class AggregateProvider {

    @Field(() => ProviderCountAggregate, {nullable:true})
    _count?: ProviderCountAggregate;

    @Field(() => ProviderMinAggregate, {nullable:true})
    _min?: ProviderMinAggregate;

    @Field(() => ProviderMaxAggregate, {nullable:true})
    _max?: ProviderMaxAggregate;
}
