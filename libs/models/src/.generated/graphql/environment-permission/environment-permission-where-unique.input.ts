import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionEnvironmentIdUserIdCompoundUniqueInput } from './environment-permission-environment-id-user-id-compound-unique.input';

@InputType()
export class EnvironmentPermissionWhereUniqueInput {

    @Field(() => EnvironmentPermissionEnvironmentIdUserIdCompoundUniqueInput, {nullable:true})
    environmentId_userId?: EnvironmentPermissionEnvironmentIdUserIdCompoundUniqueInput;
}
