import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereInput } from './environment-permission-where.input';

@ArgsType()
export class DeleteManyEnvironmentPermissionArgs {

    @Field(() => EnvironmentPermissionWhereInput, {nullable:true})
    where?: EnvironmentPermissionWhereInput;
}
