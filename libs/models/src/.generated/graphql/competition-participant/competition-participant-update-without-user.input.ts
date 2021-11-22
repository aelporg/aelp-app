import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CompetitionUpdateOneRequiredWithoutParticipantsInput } from '../competition/competition-update-one-required-without-participants.input';

@InputType()
export class CompetitionParticipantUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CompetitionUpdateOneRequiredWithoutParticipantsInput, {nullable:true})
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsInput;
}
