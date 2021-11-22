import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionCreateInput } from './environment-permission-create.input';
import { EnvironmentPermissionUpdateInput } from './environment-permission-update.input';

@ArgsType()
export class UpsertOneEnvironmentPermissionArgs {

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;

    @Field(() => EnvironmentPermissionCreateInput, {nullable:false})
    create!: EnvironmentPermissionCreateInput;

    @Field(() => EnvironmentPermissionUpdateInput, {nullable:false})
    update!: EnvironmentPermissionUpdateInput;
}
