import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionLevel } from './environment-permission-level.enum';
import { NestedEnumEnvironmentPermissionLevelWithAggregatesFilter } from './nested-enum-environment-permission-level-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEnvironmentPermissionLevelFilter } from './nested-enum-environment-permission-level-filter.input';

@InputType()
export class EnumEnvironmentPermissionLevelWithAggregatesFilter {

    @Field(() => EnvironmentPermissionLevel, {nullable:true})
    equals?: keyof typeof EnvironmentPermissionLevel;

    @Field(() => [EnvironmentPermissionLevel], {nullable:true})
    in?: Array<keyof typeof EnvironmentPermissionLevel>;

    @Field(() => [EnvironmentPermissionLevel], {nullable:true})
    notIn?: Array<keyof typeof EnvironmentPermissionLevel>;

    @Field(() => NestedEnumEnvironmentPermissionLevelWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEnvironmentPermissionLevelWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEnvironmentPermissionLevelFilter, {nullable:true})
    _min?: NestedEnumEnvironmentPermissionLevelFilter;

    @Field(() => NestedEnumEnvironmentPermissionLevelFilter, {nullable:true})
    _max?: NestedEnumEnvironmentPermissionLevelFilter;
}
