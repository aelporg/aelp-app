import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionUpdateWithoutEnvironmentInput } from './environment-permission-update-without-environment.input';

@InputType()
export class EnvironmentPermissionUpdateWithWhereUniqueWithoutEnvironmentInput {

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;

    @Field(() => EnvironmentPermissionUpdateWithoutEnvironmentInput, {nullable:false})
    data!: EnvironmentPermissionUpdateWithoutEnvironmentInput;
}
