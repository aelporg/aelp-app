import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCompetitionsJoinedInput } from '../user/user-update-one-required-without-competitions-joined.input';
import { CompetitionUpdateOneRequiredWithoutParticipantsInput } from '../competition/competition-update-one-required-without-participants.input';

@InputType()
export class CompetitionParticipantUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCompetitionsJoinedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCompetitionsJoinedInput;

    @Field(() => CompetitionUpdateOneRequiredWithoutParticipantsInput, {nullable:true})
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsInput;
}
