import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CompetitionScalarWhereWithAggregatesInput {

    @Field(() => [CompetitionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CompetitionScalarWhereWithAggregatesInput>;

    @Field(() => [CompetitionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CompetitionScalarWhereWithAggregatesInput>;

    @Field(() => [CompetitionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CompetitionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPrivate?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    creatorUserId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
