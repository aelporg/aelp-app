import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantWhereInput } from './competition-participant-where.input';

@ArgsType()
export class DeleteManyCompetitionParticipantArgs {

    @Field(() => CompetitionParticipantWhereInput, {nullable:true})
    where?: CompetitionParticipantWhereInput;
}
