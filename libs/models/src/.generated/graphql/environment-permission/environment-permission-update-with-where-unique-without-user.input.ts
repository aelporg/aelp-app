import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { EnvironmentPermissionUpdateWithoutUserInput } from './environment-permission-update-without-user.input';

@InputType()
export class EnvironmentPermissionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:false})
    where!: EnvironmentPermissionWhereUniqueInput;

    @Field(() => EnvironmentPermissionUpdateWithoutUserInput, {nullable:false})
    data!: EnvironmentPermissionUpdateWithoutUserInput;
}
