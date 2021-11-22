import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionScalarWhereInput } from './environment-permission-scalar-where.input';
import { EnvironmentPermissionUpdateManyMutationInput } from './environment-permission-update-many-mutation.input';

@InputType()
export class EnvironmentPermissionUpdateManyWithWhereWithoutEnvironmentInput {

    @Field(() => EnvironmentPermissionScalarWhereInput, {nullable:false})
    where!: EnvironmentPermissionScalarWhereInput;

    @Field(() => EnvironmentPermissionUpdateManyMutationInput, {nullable:false})
    data!: EnvironmentPermissionUpdateManyMutationInput;
}
