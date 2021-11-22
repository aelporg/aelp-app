import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';

@ArgsType()
export class FindUniqueCompetitionParticipantArgs {

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;
}
