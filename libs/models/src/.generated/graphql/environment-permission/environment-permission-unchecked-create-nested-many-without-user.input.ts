import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionCreateWithoutUserInput } from './environment-permission-create-without-user.input';
import { EnvironmentPermissionCreateOrConnectWithoutUserInput } from './environment-permission-create-or-connect-without-user.input';
import { EnvironmentPermissionCreateManyUserInputEnvelope } from './environment-permission-create-many-user-input-envelope.input';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';

@InputType()
export class EnvironmentPermissionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [EnvironmentPermissionCreateWithoutUserInput], {nullable:true})
    create?: Array<EnvironmentPermissionCreateWithoutUserInput>;

    @Field(() => [EnvironmentPermissionCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EnvironmentPermissionCreateOrConnectWithoutUserInput>;

    @Field(() => EnvironmentPermissionCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EnvironmentPermissionCreateManyUserInputEnvelope;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    connect?: Array<EnvironmentPermissionWhereUniqueInput>;
}
