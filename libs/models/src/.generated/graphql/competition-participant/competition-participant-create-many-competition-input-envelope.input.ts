import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantCreateManyCompetitionInput } from './competition-participant-create-many-competition.input';

@InputType()
export class CompetitionParticipantCreateManyCompetitionInputEnvelope {

    @Field(() => [CompetitionParticipantCreateManyCompetitionInput], {nullable:false})
    data!: Array<CompetitionParticipantCreateManyCompetitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
