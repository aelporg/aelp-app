import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CompetitionParticipantScalarWhereWithAggregatesInput {

    @Field(() => [CompetitionParticipantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CompetitionParticipantScalarWhereWithAggregatesInput>;

    @Field(() => [CompetitionParticipantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CompetitionParticipantScalarWhereWithAggregatesInput>;

    @Field(() => [CompetitionParticipantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CompetitionParticipantScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    competitionId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
