import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';

@ArgsType()
export class DeleteOneEnvironmentPermissionArgs {

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;
}
