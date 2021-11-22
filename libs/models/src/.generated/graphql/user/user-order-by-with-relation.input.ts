import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CountryOrderByWithRelationInput } from '../country/country-order-by-with-relation.input';
import { UserRefreshTokenOrderByRelationAggregateInput } from '../user-refresh-token/user-refresh-token-order-by-relation-aggregate.input';
import { LinkedAccountOrderByRelationAggregateInput } from '../linked-account/linked-account-order-by-relation-aggregate.input';
import { ClassroomMemberOrderByRelationAggregateInput } from '../classroom-member/classroom-member-order-by-relation-aggregate.input';
import { AssessmentAnswerOrderByRelationAggregateInput } from '../assessment-answer/assessment-answer-order-by-relation-aggregate.input';
import { EnvironmentPermissionOrderByRelationAggregateInput } from '../environment-permission/environment-permission-order-by-relation-aggregate.input';
import { CompetitionParticipantOrderByRelationAggregateInput } from '../competition-participant/competition-participant-order-by-relation-aggregate.input';
import { CompetitionOrderByRelationAggregateInput } from '../competition/competition-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: CountryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => UserRefreshTokenOrderByRelationAggregateInput, {nullable:true})
    refreshTokens?: UserRefreshTokenOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => LinkedAccountOrderByRelationAggregateInput, {nullable:true})
    linkedAccounts?: LinkedAccountOrderByRelationAggregateInput;

    @Field(() => ClassroomMemberOrderByRelationAggregateInput, {nullable:true})
    joinedClassrooms?: ClassroomMemberOrderByRelationAggregateInput;

    @Field(() => AssessmentAnswerOrderByRelationAggregateInput, {nullable:true})
    assessmentAnswers?: AssessmentAnswerOrderByRelationAggregateInput;

    @Field(() => EnvironmentPermissionOrderByRelationAggregateInput, {nullable:true})
    envirnmentPermissions?: EnvironmentPermissionOrderByRelationAggregateInput;

    @Field(() => CompetitionParticipantOrderByRelationAggregateInput, {nullable:true})
    competitionsJoined?: CompetitionParticipantOrderByRelationAggregateInput;

    @Field(() => CompetitionOrderByRelationAggregateInput, {nullable:true})
    createdCompetitions?: CompetitionOrderByRelationAggregateInput;
}
