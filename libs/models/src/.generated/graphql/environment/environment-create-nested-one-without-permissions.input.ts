import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentCreateWithoutPermissionsInput } from './environment-create-without-permissions.input';
import { EnvironmentCreateOrConnectWithoutPermissionsInput } from './environment-create-or-connect-without-permissions.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';

@InputType()
export class EnvironmentCreateNestedOneWithoutPermissionsInput {

    @Field(() => EnvironmentCreateWithoutPermissionsInput, {nullable:true})
    create?: EnvironmentCreateWithoutPermissionsInput;

    @Field(() => EnvironmentCreateOrConnectWithoutPermissionsInput, {nullable:true})
    connectOrCreate?: EnvironmentCreateOrConnectWithoutPermissionsInput;

    @Field(() => EnvironmentWhereUniqueInput, {nullable:true})
    connect?: EnvironmentWhereUniqueInput;
}
