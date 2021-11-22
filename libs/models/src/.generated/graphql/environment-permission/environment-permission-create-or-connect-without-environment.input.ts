import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionCreateWithoutEnvironmentInput } from './environment-permission-create-without-environment.input';

@InputType()
export class EnvironmentPermissionCreateOrConnectWithoutEnvironmentInput {

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;

    @Field(() => EnvironmentPermissionCreateWithoutEnvironmentInput, {nullable:false})
    create!: EnvironmentPermissionCreateWithoutEnvironmentInput;
}
