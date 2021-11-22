import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnvironmentRelationFilter } from '../environment/environment-relation-filter.input';
import { EnumEnvironmentPermissionLevelFilter } from '../prisma/enum-environment-permission-level-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EnvironmentPermissionWhereInput {

    @Field(() => [EnvironmentPermissionWhereInput], {nullable:true})
    AND?: Array<EnvironmentPermissionWhereInput>;

    @Field(() => [EnvironmentPermissionWhereInput], {nullable:true})
    OR?: Array<EnvironmentPermissionWhereInput>;

    @Field(() => [EnvironmentPermissionWhereInput], {nullable:true})
    NOT?: Array<EnvironmentPermissionWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnvironmentRelationFilter, {nullable:true})
    environment?: EnvironmentRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    environmentId?: StringFilter;

    @Field(() => EnumEnvironmentPermissionLevelFilter, {nullable:true})
    permission?: EnumEnvironmentPermissionLevelFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
