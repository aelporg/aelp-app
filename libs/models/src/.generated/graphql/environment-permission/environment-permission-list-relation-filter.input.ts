import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereInput } from './environment-permission-where.input';

@InputType()
export class EnvironmentPermissionListRelationFilter {

    @Field(() => EnvironmentPermissionWhereInput, {nullable:true})
    every?: EnvironmentPermissionWhereInput;

    @Field(() => EnvironmentPermissionWhereInput, {nullable:true})
    some?: EnvironmentPermissionWhereInput;

    @Field(() => EnvironmentPermissionWhereInput, {nullable:true})
    none?: EnvironmentPermissionWhereInput;
}
