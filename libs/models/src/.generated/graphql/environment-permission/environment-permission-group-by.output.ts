import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EnvironmentPermissionLevel } from '../prisma/environment-permission-level.enum';
import { EnvironmentPermissionCountAggregate } from './environment-permission-count-aggregate.output';
import { EnvironmentPermissionMinAggregate } from './environment-permission-min-aggregate.output';
import { EnvironmentPermissionMaxAggregate } from './environment-permission-max-aggregate.output';

@ObjectType()
export class EnvironmentPermissionGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    environmentId!: string;

    @Field(() => EnvironmentPermissionLevel, {nullable:false})
    permission!: keyof typeof EnvironmentPermissionLevel;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => EnvironmentPermissionCountAggregate, {nullable:true})
    _count?: EnvironmentPermissionCountAggregate;

    @Field(() => EnvironmentPermissionMinAggregate, {nullable:true})
    _min?: EnvironmentPermissionMinAggregate;

    @Field(() => EnvironmentPermissionMaxAggregate, {nullable:true})
    _max?: EnvironmentPermissionMaxAggregate;
}
