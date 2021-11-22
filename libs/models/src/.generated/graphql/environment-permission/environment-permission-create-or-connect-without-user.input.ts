import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionCreateWithoutUserInput } from './environment-permission-create-without-user.input';

@InputType()
export class EnvironmentPermissionCreateOrConnectWithoutUserInput {

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;

    @Field(() => EnvironmentPermissionCreateWithoutUserInput, {nullable:false})
    create!: EnvironmentPermissionCreateWithoutUserInput;
}
