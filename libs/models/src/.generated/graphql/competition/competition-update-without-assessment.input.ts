import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCreatedCompetitionsInput } from '../user/user-update-one-required-without-created-competitions.input';
import { CompetitionParticipantUpdateManyWithoutCompetitionInput } from '../competition-participant/competition-participant-update-many-without-competition.input';

@InputType()
export class CompetitionUpdateWithoutAssessmentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPrivate?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCreatedCompetitionsInput, {nullable:true})
    creatorUser?: UserUpdateOneRequiredWithoutCreatedCompetitionsInput;

    @Field(() => CompetitionParticipantUpdateManyWithoutCompetitionInput, {nullable:true})
    participants?: CompetitionParticipantUpdateManyWithoutCompetitionInput;
}
