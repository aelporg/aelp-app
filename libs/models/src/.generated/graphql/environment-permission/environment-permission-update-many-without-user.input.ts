import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionCreateWithoutUserInput } from './environment-permission-create-without-user.input';
import { EnvironmentPermissionCreateOrConnectWithoutUserInput } from './environment-permission-create-or-connect-without-user.input';
import { EnvironmentPermissionUpsertWithWhereUniqueWithoutUserInput } from './environment-permission-upsert-with-where-unique-without-user.input';
import { EnvironmentPermissionCreateManyUserInputEnvelope } from './environment-permission-create-many-user-input-envelope.input';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionUpdateWithWhereUniqueWithoutUserInput } from './environment-permission-update-with-where-unique-without-user.input';
import { EnvironmentPermissionUpdateManyWithWhereWithoutUserInput } from './environment-permission-update-many-with-where-without-user.input';
import { EnvironmentPermissionScalarWhereInput } from './environment-permission-scalar-where.input';

@InputType()
export class EnvironmentPermissionUpdateManyWithoutUserInput {

    @Field(() => [EnvironmentPermissionCreateWithoutUserInput], {nullable:true})
    create?: Array<EnvironmentPermissionCreateWithoutUserInput>;

    @Field(() => [EnvironmentPermissionCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EnvironmentPermissionCreateOrConnectWithoutUserInput>;

    @Field(() => [EnvironmentPermissionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<EnvironmentPermissionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EnvironmentPermissionCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EnvironmentPermissionCreateManyUserInputEnvelope;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    set?: Array<EnvironmentPermissionWhereUniqueInput>;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    disconnect?: Array<EnvironmentPermissionWhereUniqueInput>;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    delete?: Array<EnvironmentPermissionWhereUniqueInput>;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    connect?: Array<EnvironmentPermissionWhereUniqueInput>;

    @Field(() => [EnvironmentPermissionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<EnvironmentPermissionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EnvironmentPermissionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<EnvironmentPermissionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EnvironmentPermissionScalarWhereInput], {nullable:true})
    deleteMany?: Array<EnvironmentPermissionScalarWhereInput>;
}
