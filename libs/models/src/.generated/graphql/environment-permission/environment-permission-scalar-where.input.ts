import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEnvironmentPermissionLevelFilter } from '../prisma/enum-environment-permission-level-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EnvironmentPermissionScalarWhereInput {

    @Field(() => [EnvironmentPermissionScalarWhereInput], {nullable:true})
    AND?: Array<EnvironmentPermissionScalarWhereInput>;

    @Field(() => [EnvironmentPermissionScalarWhereInput], {nullable:true})
    OR?: Array<EnvironmentPermissionScalarWhereInput>;

    @Field(() => [EnvironmentPermissionScalarWhereInput], {nullable:true})
    NOT?: Array<EnvironmentPermissionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    environmentId?: StringFilter;

    @Field(() => EnumEnvironmentPermissionLevelFilter, {nullable:true})
    permission?: EnumEnvironmentPermissionLevelFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
