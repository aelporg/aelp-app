import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { CountryCreateNestedOneWithoutUsersInput } from '../country/country-create-nested-one-without-users.input';
import { UserRefreshTokenCreateNestedManyWithoutUserInput } from '../user-refresh-token/user-refresh-token-create-nested-many-without-user.input';
import { LinkedAccountCreateNestedManyWithoutUserInput } from '../linked-account/linked-account-create-nested-many-without-user.input';
import { ClassroomMemberCreateNestedManyWithoutUserInput } from '../classroom-member/classroom-member-create-nested-many-without-user.input';
import { AssessmentAnswerCreateNestedManyWithoutUserInput } from '../assessment-answer/assessment-answer-create-nested-many-without-user.input';
import { EnvironmentPermissionCreateNestedManyWithoutUserInput } from '../environment-permission/environment-permission-create-nested-many-without-user.input';
import { CompetitionParticipantCreateNestedManyWithoutUserInput } from '../competition-participant/competition-participant-create-nested-many-without-user.input';
import { CompetitionCreateNestedManyWithoutCreatorUserInput } from '../competition/competition-create-nested-many-without-creator-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CountryCreateNestedOneWithoutUsersInput, {nullable:false})
    country!: CountryCreateNestedOneWithoutUsersInput;

    @Field(() => UserRefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: UserRefreshTokenCreateNestedManyWithoutUserInput;

    @Field(() => LinkedAccountCreateNestedManyWithoutUserInput, {nullable:true})
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput;

    @Field(() => ClassroomMemberCreateNestedManyWithoutUserInput, {nullable:true})
    joinedClassrooms?: ClassroomMemberCreateNestedManyWithoutUserInput;

    @Field(() => AssessmentAnswerCreateNestedManyWithoutUserInput, {nullable:true})
    assessmentAnswers?: AssessmentAnswerCreateNestedManyWithoutUserInput;

    @Field(() => EnvironmentPermissionCreateNestedManyWithoutUserInput, {nullable:true})
    envirnmentPermissions?: EnvironmentPermissionCreateNestedManyWithoutUserInput;

    @Field(() => CompetitionParticipantCreateNestedManyWithoutUserInput, {nullable:true})
    competitionsJoined?: CompetitionParticipantCreateNestedManyWithoutUserInput;

    @Field(() => CompetitionCreateNestedManyWithoutCreatorUserInput, {nullable:true})
    createdCompetitions?: CompetitionCreateNestedManyWithoutCreatorUserInput;
}
