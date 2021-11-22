import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionUpdateWithoutEnvironmentInput } from './environment-permission-update-without-environment.input';
import { EnvironmentPermissionCreateWithoutEnvironmentInput } from './environment-permission-create-without-environment.input';

@InputType()
export class EnvironmentPermissionUpsertWithWhereUniqueWithoutEnvironmentInput {

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;

    @Field(() => EnvironmentPermissionUpdateWithoutEnvironmentInput, {nullable:false})
    update!: EnvironmentPermissionUpdateWithoutEnvironmentInput;

    @Field(() => EnvironmentPermissionCreateWithoutEnvironmentInput, {nullable:false})
    create!: EnvironmentPermissionCreateWithoutEnvironmentInput;
}
