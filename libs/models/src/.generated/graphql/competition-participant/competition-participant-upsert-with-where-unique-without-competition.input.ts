import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantUpdateWithoutCompetitionInput } from './competition-participant-update-without-competition.input';
import { CompetitionParticipantCreateWithoutCompetitionInput } from './competition-participant-create-without-competition.input';

@InputType()
export class CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput {

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;

    @Field(() => CompetitionParticipantUpdateWithoutCompetitionInput, {nullable:false})
    update!: CompetitionParticipantUpdateWithoutCompetitionInput;

    @Field(() => CompetitionParticipantCreateWithoutCompetitionInput, {nullable:false})
    create!: CompetitionParticipantCreateWithoutCompetitionInput;
}
