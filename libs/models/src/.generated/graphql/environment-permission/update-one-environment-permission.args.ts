import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionUpdateInput } from './environment-permission-update.input';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';

@ArgsType()
export class UpdateOneEnvironmentPermissionArgs {

    @Field(() => EnvironmentPermissionUpdateInput, {nullable:false})
    data!: EnvironmentPermissionUpdateInput;

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;
}
