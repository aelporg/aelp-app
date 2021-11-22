import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionCreateWithoutEnvironmentInput } from './environment-permission-create-without-environment.input';
import { EnvironmentPermissionCreateOrConnectWithoutEnvironmentInput } from './environment-permission-create-or-connect-without-environment.input';
import { EnvironmentPermissionCreateManyEnvironmentInputEnvelope } from './environment-permission-create-many-environment-input-envelope.input';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';

@InputType()
export class EnvironmentPermissionCreateNestedManyWithoutEnvironmentInput {

    @Field(() => [EnvironmentPermissionCreateWithoutEnvironmentInput], {nullable:true})
    create?: Array<EnvironmentPermissionCreateWithoutEnvironmentInput>;

    @Field(() => [EnvironmentPermissionCreateOrConnectWithoutEnvironmentInput], {nullable:true})
    connectOrCreate?: Array<EnvironmentPermissionCreateOrConnectWithoutEnvironmentInput>;

    @Field(() => EnvironmentPermissionCreateManyEnvironmentInputEnvelope, {nullable:true})
    createMany?: EnvironmentPermissionCreateManyEnvironmentInputEnvelope;

    @Field(() => [EnvironmentPermissionWhereUniqueInput], {nullable:true})
    connect?: Array<EnvironmentPermissionWhereUniqueInput>;
}
