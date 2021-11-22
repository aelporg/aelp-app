import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionUpdateWithoutUserInput } from './environment-permission-update-without-user.input';
import { EnvironmentPermissionCreateWithoutUserInput } from './environment-permission-create-without-user.input';

@InputType()
export class EnvironmentPermissionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;

    @Field(() => EnvironmentPermissionUpdateWithoutUserInput, {nullable:false})
    update!: EnvironmentPermissionUpdateWithoutUserInput;

    @Field(() => EnvironmentPermissionCreateWithoutUserInput, {nullable:false})
    create!: EnvironmentPermissionCreateWithoutUserInput;
}
