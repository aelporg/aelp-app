import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserRefreshTokenUncheckedCreateNestedManyWithoutUserInput } from '../user-refresh-token/user-refresh-token-unchecked-create-nested-many-without-user.input';
import { LinkedAccountUncheckedCreateNestedManyWithoutUserInput } from '../linked-account/linked-account-unchecked-create-nested-many-without-user.input';
import { ClassroomMemberUncheckedCreateNestedManyWithoutUserInput } from '../classroom-member/classroom-member-unchecked-create-nested-many-without-user.input';
import { AssessmentAnswerUncheckedCreateNestedManyWithoutUserInput } from '../assessment-answer/assessment-answer-unchecked-create-nested-many-without-user.input';
import { EnvironmentPermissionUncheckedCreateNestedManyWithoutUserInput } from '../environment-permission/environment-permission-unchecked-create-nested-many-without-user.input';
import { CompetitionParticipantUncheckedCreateNestedManyWithoutUserInput } from '../competition-participant/competition-participant-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCreatedCompetitionsInput {

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

    @Field(() => String, {nullable:false})
    countryId!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserRefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: UserRefreshTokenUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => LinkedAccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ClassroomMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    joinedClassrooms?: ClassroomMemberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AssessmentAnswerUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    assessmentAnswers?: AssessmentAnswerUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => EnvironmentPermissionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    envirnmentPermissions?: EnvironmentPermissionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CompetitionParticipantUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    competitionsJoined?: CompetitionParticipantUncheckedCreateNestedManyWithoutUserInput;
}
