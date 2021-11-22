import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionCreateInput } from './environment-permission-create.input';

@ArgsType()
export class CreateOneEnvironmentPermissionArgs {

    @Field(() => EnvironmentPermissionCreateInput, {nullable:false})
    data!: EnvironmentPermissionCreateInput;
}
