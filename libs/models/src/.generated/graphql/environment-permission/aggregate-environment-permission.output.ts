import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EnvironmentPermissionCountAggregate } from './environment-permission-count-aggregate.output';
import { EnvironmentPermissionMinAggregate } from './environment-permission-min-aggregate.output';
import { EnvironmentPermissionMaxAggregate } from './environment-permission-max-aggregate.output';

@ObjectType()
export class AggregateEnvironmentPermission {

    @Field(() => EnvironmentPermissionCountAggregate, {nullable:true})
    _count?: EnvironmentPermissionCountAggregate;

    @Field(() => EnvironmentPermissionMinAggregate, {nullable:true})
    _min?: EnvironmentPermissionMinAggregate;

    @Field(() => EnvironmentPermissionMaxAggregate, {nullable:true})
    _max?: EnvironmentPermissionMaxAggregate;
}
