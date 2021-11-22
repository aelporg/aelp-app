import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantCreateWithoutCompetitionInput } from './competition-participant-create-without-competition.input';

@InputType()
export class CompetitionParticipantCreateOrConnectWithoutCompetitionInput {

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;

    @Field(() => CompetitionParticipantCreateWithoutCompetitionInput, {nullable:false})
    create!: CompetitionParticipantCreateWithoutCompetitionInput;
}
