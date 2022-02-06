import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionLevel } from './environment-permission-level.enum';
import { NestedEnumEnvironmentPermissionLevelFilter } from './nested-enum-environment-permission-level-filter.input';

@InputType()
export class EnumEnvironmentPermissionLevelFilter {

    @Field(() => EnvironmentPermissionLevel, {nullable:true})
    equals?: keyof typeof EnvironmentPermissionLevel;

    @Field(() => [EnvironmentPermissionLevel], {nullable:true})
    in?: Array<keyof typeof EnvironmentPermissionLevel>;

    @Field(() => [EnvironmentPermissionLevel], {nullable:true})
    notIn?: Array<keyof typeof EnvironmentPermissionLevel>;

    @Field(() => NestedEnumEnvironmentPermissionLevelFilter, {nullable:true})
    not?: NestedEnumEnvironmentPermissionLevelFilter;
}
