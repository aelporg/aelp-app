import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionCreateWithoutEnvironmentInput } from './environment-permission-create-without-environment.input';
import { EnvironmentPermissionCreateOrConnectWithoutEnvironmentInput } from './environment-permission-create-or-connect-without-environment.input';
import { EnvironmentPermissionUpsertWithWhereUniqueWithoutEnvironmentInput } from './environment-permission-upsert-with-where-unique-without-environment.input';
import { EnvironmentPermissionCreateManyEnvironmentInputEnvelope } from './environment-permission-create-many-environment-input-envelope.input';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionUpdateWithWhereUniqueWithoutEnvironmentInput } from './environment-permission-update-with-where-unique-without-environment.input';
import { EnvironmentPermissionUpdateManyWithWhereWithoutEnvironmentInput } from './environment-permission-update-many-with-where-without-environment.input';
import { EnvironmentPermissionScalarWhereInput } from './environment-permission-scalar-where.input';

@InputType()
export class EnvironmentPermissionUncheckedUpdateManyWithoutEnvironmentInput {

    @Field(() => [EnvironmentPermissionCreateWithoutEnvironmentInput], {nullable:true})
    create?: Array<EnvironmentPermissionCreateWithoutEnvironmentInput>;

    @Field(() => [EnvironmentPermissionCreateOrConnectWithoutEnvironmentInput], {nullable:true})
    connectOrCreate?: Array<EnvironmentPermissionCreateOrConnectWithoutEnvironmentInput>;

    @Field(() => [EnvironmentPermissionUpsertWithWhereUniqueWithoutEnvironmentInput], {nullable:true})
    upsert?: Array<EnvironmentPermissionUpsertWithWhereUniqueWithoutEnvironmentInput>;

    @Field(() => EnvironmentPermissionCreateManyEnvironmentInputEnvelope, {nullable:true})
    createMany?: EnvironmentPermissionCreateManyEnvironmentInputEnvelope;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    set?: Array<EnvironmentPermissionWhereUniqueInput>;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    disconnect?: Array<EnvironmentPermissionWhereUniqueInput>;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    delete?: Array<EnvironmentPermissionWhereUniqueInput>;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    connect?: Array<EnvironmentPermissionWhereUniqueInput>;

    @Field(() => [EnvironmentPermissionUpdateWithWhereUniqueWithoutEnvironmentInput], {nullable:true})
    update?: Array<EnvironmentPermissionUpdateWithWhereUniqueWithoutEnvironmentInput>;

    @Field(() => [EnvironmentPermissionUpdateManyWithWhereWithoutEnvironmentInput], {nullable:true})
    updateMany?: Array<EnvironmentPermissionUpdateManyWithWhereWithoutEnvironmentInput>;

    @Field(() => [EnvironmentPermissionScalarWhereInput], {nullable:true})
    deleteMany?: Array<EnvironmentPermissionScalarWhereInput>;
}
