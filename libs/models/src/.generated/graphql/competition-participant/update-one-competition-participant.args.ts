import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantUpdateInput } from './competition-participant-update.input';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';

@ArgsType()
export class UpdateOneCompetitionParticipantArgs {

    @Field(() => CompetitionParticipantUpdateInput, {nullable:false})
    data!: CompetitionParticipantUpdateInput;

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;
}
