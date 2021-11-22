import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantCreateInput } from './competition-participant-create.input';
import { CompetitionParticipantUpdateInput } from './competition-participant-update.input';

@ArgsType()
export class UpsertOneCompetitionParticipantArgs {

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;

    @Field(() => CompetitionParticipantCreateInput, {nullable:false})
    create!: CompetitionParticipantCreateInput;

    @Field(() => CompetitionParticipantUpdateInput, {nullable:false})
    update!: CompetitionParticipantUpdateInput;
}
