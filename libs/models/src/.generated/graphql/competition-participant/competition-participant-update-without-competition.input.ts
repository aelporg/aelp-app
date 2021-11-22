import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCompetitionsJoinedInput } from '../user/user-update-one-required-without-competitions-joined.input';

@InputType()
export class CompetitionParticipantUpdateWithoutCompetitionInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCompetitionsJoinedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCompetitionsJoinedInput;
}
