import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CompetitionRelationFilter } from '../competition/competition-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompetitionParticipantWhereInput {

    @Field(() => [CompetitionParticipantWhereInput], {nullable:true})
    AND?: Array<CompetitionParticipantWhereInput>;

    @Field(() => [CompetitionParticipantWhereInput], {nullable:true})
    OR?: Array<CompetitionParticipantWhereInput>;

    @Field(() => [CompetitionParticipantWhereInput], {nullable:true})
    NOT?: Array<CompetitionParticipantWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => CompetitionRelationFilter, {nullable:true})
    competition?: CompetitionRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    competitionId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
