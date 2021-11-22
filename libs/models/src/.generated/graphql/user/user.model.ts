import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Country } from '../country/country.model';
import { UserRefreshToken } from '../user-refresh-token/user-refresh-token.model';
import { Role } from '../prisma/role.enum';
import { LinkedAccount } from '../linked-account/linked-account.model';
import { ClassroomMember } from '../classroom-member/classroom-member.model';
import { AssessmentAnswer } from '../assessment-answer/assessment-answer.model';
import { EnvironmentPermission } from '../environment-permission/environment-permission.model';
import { CompetitionParticipant } from '../competition-participant/competition-participant.model';
import { Competition } from '../competition/competition.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string | null;

    @Field(() => Country, {nullable:false})
    country?: Country;

    @Field(() => String, {nullable:false})
    countryId!: string;

    @Field(() => [UserRefreshToken], {nullable:true})
    refreshTokens?: Array<UserRefreshToken>;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [LinkedAccount], {nullable:true})
    linkedAccounts?: Array<LinkedAccount>;

    @Field(() => [ClassroomMember], {nullable:true})
    joinedClassrooms?: Array<ClassroomMember>;

    @Field(() => [AssessmentAnswer], {nullable:true})
    assessmentAnswers?: Array<AssessmentAnswer>;

    @Field(() => [EnvironmentPermission], {nullable:true})
    envirnmentPermissions?: Array<EnvironmentPermission>;

    @Field(() => [CompetitionParticipant], {nullable:true})
    competitionsJoined?: Array<CompetitionParticipant>;

    @Field(() => [Competition], {nullable:true})
    createdCompetitions?: Array<Competition>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
