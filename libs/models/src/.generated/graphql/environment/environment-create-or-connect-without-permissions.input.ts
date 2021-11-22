import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { EnvironmentCreateWithoutPermissionsInput } from './environment-create-without-permissions.input';

@InputType()
export class EnvironmentCreateOrConnectWithoutPermissionsInput {

    @Field(() => EnvironmentWhereUniqueInput, {nullable:false})
    where!: EnvironmentWhereUniqueInput;

    @Field(() => EnvironmentCreateWithoutPermissionsInput, {nullable:false})
    create!: EnvironmentCreateWithoutPermissionsInput;
}
