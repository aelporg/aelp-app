import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionLevel } from '../prisma/environment-permission-level.enum';
import { UserCreateNestedOneWithoutEnvirnmentPermissionsInput } from '../user/user-create-nested-one-without-envirnment-permissions.input';

@InputType()
export class EnvironmentPermissionCreateWithoutEnvironmentInput {

    @Field(() => EnvironmentPermissionLevel, {nullable:false})
    permission!: keyof typeof EnvironmentPermissionLevel;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutEnvirnmentPermissionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutEnvirnmentPermissionsInput;
}
