import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CountryUpdateOneRequiredWithoutUsersInput } from '../country/country-update-one-required-without-users.input';
import { UserRefreshTokenUpdateManyWithoutUserInput } from '../user-refresh-token/user-refresh-token-update-many-without-user.input';
import { LinkedAccountUpdateManyWithoutUserInput } from '../linked-account/linked-account-update-many-without-user.input';
import { AssessmentAnswerUpdateManyWithoutUserInput } from '../assessment-answer/assessment-answer-update-many-without-user.input';
import { EnvironmentPermissionUpdateManyWithoutUserInput } from '../environment-permission/environment-permission-update-many-without-user.input';
import { CompetitionParticipantUpdateManyWithoutUserInput } from '../competition-participant/competition-participant-update-many-without-user.input';
import { CompetitionUpdateManyWithoutCreatorUserInput } from '../competition/competition-update-many-without-creator-user.input';

@InputType()
export class UserUpdateWithoutJoinedClassroomsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CountryUpdateOneRequiredWithoutUsersInput, {nullable:true})
    country?: CountryUpdateOneRequiredWithoutUsersInput;

    @Field(() => UserRefreshTokenUpdateManyWithoutUserInput, {nullable:true})
    refreshTokens?: UserRefreshTokenUpdateManyWithoutUserInput;

    @Field(() => LinkedAccountUpdateManyWithoutUserInput, {nullable:true})
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserInput;

    @Field(() => AssessmentAnswerUpdateManyWithoutUserInput, {nullable:true})
    assessmentAnswers?: AssessmentAnswerUpdateManyWithoutUserInput;

    @Field(() => EnvironmentPermissionUpdateManyWithoutUserInput, {nullable:true})
    envirnmentPermissions?: EnvironmentPermissionUpdateManyWithoutUserInput;

    @Field(() => CompetitionParticipantUpdateManyWithoutUserInput, {nullable:true})
    competitionsJoined?: CompetitionParticipantUpdateManyWithoutUserInput;

    @Field(() => CompetitionUpdateManyWithoutCreatorUserInput, {nullable:true})
    createdCompetitions?: CompetitionUpdateManyWithoutCreatorUserInput;
}
