import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionUpdateWithoutParticipantsInput } from './competition-update-without-participants.input';
import { CompetitionCreateWithoutParticipantsInput } from './competition-create-without-participants.input';

@InputType()
export class CompetitionUpsertWithoutParticipantsInput {

    @Field(() => CompetitionUpdateWithoutParticipantsInput, {nullable:false})
    update!: CompetitionUpdateWithoutParticipantsInput;

    @Field(() => CompetitionCreateWithoutParticipantsInput, {nullable:false})
    create!: CompetitionCreateWithoutParticipantsInput;
}
