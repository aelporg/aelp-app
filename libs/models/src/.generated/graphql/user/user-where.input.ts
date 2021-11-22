import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CountryRelationFilter } from '../country/country-relation-filter.input';
import { UserRefreshTokenListRelationFilter } from '../user-refresh-token/user-refresh-token-list-relation-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LinkedAccountListRelationFilter } from '../linked-account/linked-account-list-relation-filter.input';
import { ClassroomMemberListRelationFilter } from '../classroom-member/classroom-member-list-relation-filter.input';
import { AssessmentAnswerListRelationFilter } from '../assessment-answer/assessment-answer-list-relation-filter.input';
import { EnvironmentPermissionListRelationFilter } from '../environment-permission/environment-permission-list-relation-filter.input';
import { CompetitionParticipantListRelationFilter } from '../competition-participant/competition-participant-list-relation-filter.input';
import { CompetitionListRelationFilter } from '../competition/competition-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    userName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => CountryRelationFilter, {nullable:true})
    country?: CountryRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    countryId?: StringFilter;

    @Field(() => UserRefreshTokenListRelationFilter, {nullable:true})
    refreshTokens?: UserRefreshTokenListRelationFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => LinkedAccountListRelationFilter, {nullable:true})
    linkedAccounts?: LinkedAccountListRelationFilter;

    @Field(() => ClassroomMemberListRelationFilter, {nullable:true})
    joinedClassrooms?: ClassroomMemberListRelationFilter;

    @Field(() => AssessmentAnswerListRelationFilter, {nullable:true})
    assessmentAnswers?: AssessmentAnswerListRelationFilter;

    @Field(() => EnvironmentPermissionListRelationFilter, {nullable:true})
    envirnmentPermissions?: EnvironmentPermissionListRelationFilter;

    @Field(() => CompetitionParticipantListRelationFilter, {nullable:true})
    competitionsJoined?: CompetitionParticipantListRelationFilter;

    @Field(() => CompetitionListRelationFilter, {nullable:true})
    createdCompetitions?: CompetitionListRelationFilter;
}
