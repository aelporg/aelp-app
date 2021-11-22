import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEnvironmentPermissionLevelWithAggregatesFilter } from '../prisma/enum-environment-permission-level-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EnvironmentPermissionScalarWhereWithAggregatesInput {

    @Field(() => [EnvironmentPermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EnvironmentPermissionScalarWhereWithAggregatesInput>;

    @Field(() => [EnvironmentPermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EnvironmentPermissionScalarWhereWithAggregatesInput>;

    @Field(() => [EnvironmentPermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EnvironmentPermissionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    environmentId?: StringWithAggregatesFilter;

    @Field(() => EnumEnvironmentPermissionLevelWithAggregatesFilter, {nullable:true})
    permission?: EnumEnvironmentPermissionLevelWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
