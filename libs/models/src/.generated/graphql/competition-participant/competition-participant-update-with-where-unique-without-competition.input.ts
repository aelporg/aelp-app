import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantUpdateWithoutCompetitionInput } from './competition-participant-update-without-competition.input';

@InputType()
export class CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput {

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;

    @Field(() => CompetitionParticipantUpdateWithoutCompetitionInput, {nullable:false})
    data!: CompetitionParticipantUpdateWithoutCompetitionInput;
}
