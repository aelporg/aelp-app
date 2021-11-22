import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantUpdateManyMutationInput } from './competition-participant-update-many-mutation.input';
import { CompetitionParticipantWhereInput } from './competition-participant-where.input';

@ArgsType()
export class UpdateManyCompetitionParticipantArgs {

    @Field(() => CompetitionParticipantUpdateManyMutationInput, {nullable:false})
    data!: CompetitionParticipantUpdateManyMutationInput;

    @Field(() => CompetitionParticipantWhereInput, {nullable:true})
    where?: CompetitionParticipantWhereInput;
}
