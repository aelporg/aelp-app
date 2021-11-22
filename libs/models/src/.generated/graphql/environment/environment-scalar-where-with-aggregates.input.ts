import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EnvironmentScalarWhereWithAggregatesInput {

    @Field(() => [EnvironmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EnvironmentScalarWhereWithAggregatesInput>;

    @Field(() => [EnvironmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EnvironmentScalarWhereWithAggregatesInput>;

    @Field(() => [EnvironmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EnvironmentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    scratchPadData?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    submitted?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
