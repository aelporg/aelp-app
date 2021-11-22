import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserRefreshTokenUncheckedUpdateManyWithoutUserInput } from '../user-refresh-token/user-refresh-token-unchecked-update-many-without-user.input';
import { LinkedAccountUncheckedUpdateManyWithoutUserInput } from '../linked-account/linked-account-unchecked-update-many-without-user.input';
import { AssessmentAnswerUncheckedUpdateManyWithoutUserInput } from '../assessment-answer/assessment-answer-unchecked-update-many-without-user.input';
import { EnvironmentPermissionUncheckedUpdateManyWithoutUserInput } from '../environment-permission/environment-permission-unchecked-update-many-without-user.input';
import { CompetitionParticipantUncheckedUpdateManyWithoutUserInput } from '../competition-participant/competition-participant-unchecked-update-many-without-user.input';
import { CompetitionUncheckedUpdateManyWithoutCreatorUserInput } from '../competition/competition-unchecked-update-many-without-creator-user.input';

@InputType()
export class UserUncheckedUpdateWithoutJoinedClassroomsInput {

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserRefreshTokenUncheckedUpdateManyWithoutUserInput, {nullable:true})
    refreshTokens?: UserRefreshTokenUncheckedUpdateManyWithoutUserInput;

    @Field(() => LinkedAccountUncheckedUpdateManyWithoutUserInput, {nullable:true})
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserInput;

    @Field(() => AssessmentAnswerUncheckedUpdateManyWithoutUserInput, {nullable:true})
    assessmentAnswers?: AssessmentAnswerUncheckedUpdateManyWithoutUserInput;

    @Field(() => EnvironmentPermissionUncheckedUpdateManyWithoutUserInput, {nullable:true})
    envirnmentPermissions?: EnvironmentPermissionUncheckedUpdateManyWithoutUserInput;

    @Field(() => CompetitionParticipantUncheckedUpdateManyWithoutUserInput, {nullable:true})
    competitionsJoined?: CompetitionParticipantUncheckedUpdateManyWithoutUserInput;

    @Field(() => CompetitionUncheckedUpdateManyWithoutCreatorUserInput, {nullable:true})
    createdCompetitions?: CompetitionUncheckedUpdateManyWithoutCreatorUserInput;
}
