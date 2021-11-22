import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AssessmentUncheckedUpdateOneWithoutCompetitionInput } from '../assessment/assessment-unchecked-update-one-without-competition.input';
import { CompetitionParticipantUncheckedUpdateManyWithoutCompetitionInput } from '../competition-participant/competition-participant-unchecked-update-many-without-competition.input';

@InputType()
export class CompetitionUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPrivate?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    creatorUserId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AssessmentUncheckedUpdateOneWithoutCompetitionInput, {nullable:true})
    assessment?: AssessmentUncheckedUpdateOneWithoutCompetitionInput;

    @Field(() => CompetitionParticipantUncheckedUpdateManyWithoutCompetitionInput, {nullable:true})
    participants?: CompetitionParticipantUncheckedUpdateManyWithoutCompetitionInput;
}
