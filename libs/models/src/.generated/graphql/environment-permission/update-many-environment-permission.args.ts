import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionUpdateManyMutationInput } from './environment-permission-update-many-mutation.input';
import { EnvironmentPermissionWhereInput } from './environment-permission-where.input';

@ArgsType()
export class UpdateManyEnvironmentPermissionArgs {

    @Field(() => EnvironmentPermissionUpdateManyMutationInput, {nullable:false})
    data!: EnvironmentPermissionUpdateManyMutationInput;

    @Field(() => EnvironmentPermissionWhereInput, {nullable:true})
    where?: EnvironmentPermissionWhereInput;
}
