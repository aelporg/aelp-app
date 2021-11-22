import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AssessmentRelationFilter } from '../assessment/assessment-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CompetitionParticipantListRelationFilter } from '../competition-participant/competition-participant-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompetitionWhereInput {

    @Field(() => [CompetitionWhereInput], {nullable:true})
    AND?: Array<CompetitionWhereInput>;

    @Field(() => [CompetitionWhereInput], {nullable:true})
    OR?: Array<CompetitionWhereInput>;

    @Field(() => [CompetitionWhereInput], {nullable:true})
    NOT?: Array<CompetitionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPrivate?: BoolFilter;

    @Field(() => AssessmentRelationFilter, {nullable:true})
    assessment?: AssessmentRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    creatorUser?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    creatorUserId?: StringFilter;

    @Field(() => CompetitionParticipantListRelationFilter, {nullable:true})
    participants?: CompetitionParticipantListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
