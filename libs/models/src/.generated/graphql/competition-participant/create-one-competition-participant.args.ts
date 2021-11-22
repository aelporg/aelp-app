import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantCreateInput } from './competition-participant-create.input';

@ArgsType()
export class CreateOneCompetitionParticipantArgs {

    @Field(() => CompetitionParticipantCreateInput, {nullable:false})
    data!: CompetitionParticipantCreateInput;
}
