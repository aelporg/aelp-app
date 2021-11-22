import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentCreateWithoutPermissionsInput } from './environment-create-without-permissions.input';
import { EnvironmentCreateOrConnectWithoutPermissionsInput } from './environment-create-or-connect-without-permissions.input';
import { EnvironmentUpsertWithoutPermissionsInput } from './environment-upsert-without-permissions.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { EnvironmentUpdateWithoutPermissionsInput } from './environment-update-without-permissions.input';

@InputType()
export class EnvironmentUpdateOneRequiredWithoutPermissionsInput {

    @Field(() => EnvironmentCreateWithoutPermissionsInput, {nullable:true})
    create?: EnvironmentCreateWithoutPermissionsInput;

    @Field(() => EnvironmentCreateOrConnectWithoutPermissionsInput, {nullable:true})
    connectOrCreate?: EnvironmentCreateOrConnectWithoutPermissionsInput;

    @Field(() => EnvironmentUpsertWithoutPermissionsInput, {nullable:true})
    upsert?: EnvironmentUpsertWithoutPermissionsInput;

    @Field(() => EnvironmentWhereUniqueInput, {nullable:true})
    connect?: EnvironmentWhereUniqueInput;

    @Field(() => EnvironmentUpdateWithoutPermissionsInput, {nullable:true})
    update?: EnvironmentUpdateWithoutPermissionsInput;
}
