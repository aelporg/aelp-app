import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentUpdateWithoutPermissionsInput } from './environment-update-without-permissions.input';
import { EnvironmentCreateWithoutPermissionsInput } from './environment-create-without-permissions.input';

@InputType()
export class EnvironmentUpsertWithoutPermissionsInput {

    @Field(() => EnvironmentUpdateWithoutPermissionsInput, {nullable:false})
    update!: EnvironmentUpdateWithoutPermissionsInput;

    @Field(() => EnvironmentCreateWithoutPermissionsInput, {nullable:false})
    create!: EnvironmentCreateWithoutPermissionsInput;
}
