import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantCreateWithoutCompetitionInput } from './competition-participant-create-without-competition.input';
import { CompetitionParticipantCreateOrConnectWithoutCompetitionInput } from './competition-participant-create-or-connect-without-competition.input';
import { CompetitionParticipantCreateManyCompetitionInputEnvelope } from './competition-participant-create-many-competition-input-envelope.input';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';

@InputType()
export class CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput {

    @Field(() => [CompetitionParticipantCreateWithoutCompetitionInput], {nullable:true})
    create?: Array<CompetitionParticipantCreateWithoutCompetitionInput>;

    @Field(() => [CompetitionParticipantCreateOrConnectWithoutCompetitionInput], {nullable:true})
    connectOrCreate?: Array<CompetitionParticipantCreateOrConnectWithoutCompetitionInput>;

    @Field(() => CompetitionParticipantCreateManyCompetitionInputEnvelope, {nullable:true})
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    connect?: Array<CompetitionParticipantWhereUniqueInput>;
}
