import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionLevel } from '../prisma/environment-permission-level.enum';
import { EnvironmentCreateNestedOneWithoutPermissionsInput } from '../environment/environment-create-nested-one-without-permissions.input';

@InputType()
export class EnvironmentPermissionCreateWithoutUserInput {

    @Field(() => EnvironmentPermissionLevel, {nullable:false})
    permission!: keyof typeof EnvironmentPermissionLevel;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EnvironmentCreateNestedOneWithoutPermissionsInput, {nullable:false})
    environment!: EnvironmentCreateNestedOneWithoutPermissionsInput;
}
