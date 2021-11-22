import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput } from '../competition-participant/competition-participant-unchecked-create-nested-many-without-competition.input';

@InputType()
export class CompetitionUncheckedCreateWithoutAssessmentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isPrivate?: boolean;

    @Field(() => String, {nullable:false})
    creatorUserId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput, {nullable:true})
    participants?: CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput;
}
