import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LinkedAccountScalarWhereWithAggregatesInput {

    @Field(() => [LinkedAccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LinkedAccountScalarWhereWithAggregatesInput>;

    @Field(() => [LinkedAccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LinkedAccountScalarWhereWithAggregatesInput>;

    @Field(() => [LinkedAccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LinkedAccountScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    providerId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    externalId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
