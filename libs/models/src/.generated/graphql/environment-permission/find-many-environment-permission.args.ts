import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionWhereInput } from './environment-permission-where.input';
import { EnvironmentPermissionOrderByWithRelationInput } from './environment-permission-order-by-with-relation.input';
import { EnvironmentPermissionWhereUniqueInput } from './environment-permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EnvironmentPermissionScalarFieldEnum } from './environment-permission-scalar-field.enum';

@ArgsType()
export class FindManyEnvironmentPermissionArgs {

    @Field(() => EnvironmentPermissionWhereInput, {nullable:true})
    where?: EnvironmentPermissionWhereInput;

    @Field(() => [EnvironmentPermissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EnvironmentPermissionOrderByWithRelationInput>;

    @Field(() => EnvironmentPermissionWhereUniqueInput, {nullable:true})
    cursor?: EnvironmentPermissionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EnvironmentPermissionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EnvironmentPermissionScalarFieldEnum>;
}
