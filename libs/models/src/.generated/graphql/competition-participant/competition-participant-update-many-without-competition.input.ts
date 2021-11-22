import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantCreateWithoutCompetitionInput } from './competition-participant-create-without-competition.input';
import { CompetitionParticipantCreateOrConnectWithoutCompetitionInput } from './competition-participant-create-or-connect-without-competition.input';
import { CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput } from './competition-participant-upsert-with-where-unique-without-competition.input';
import { CompetitionParticipantCreateManyCompetitionInputEnvelope } from './competition-participant-create-many-competition-input-envelope.input';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput } from './competition-participant-update-with-where-unique-without-competition.input';
import { CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput } from './competition-participant-update-many-with-where-without-competition.input';
import { CompetitionParticipantScalarWhereInput } from './competition-participant-scalar-where.input';

@InputType()
export class CompetitionParticipantUpdateManyWithoutCompetitionInput {

    @Field(() => [CompetitionParticipantCreateWithoutCompetitionInput], {nullable:true})
    create?: Array<CompetitionParticipantCreateWithoutCompetitionInput>;

    @Field(() => [CompetitionParticipantCreateOrConnectWithoutCompetitionInput], {nullable:true})
    connectOrCreate?: Array<CompetitionParticipantCreateOrConnectWithoutCompetitionInput>;

    @Field(() => [CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput], {nullable:true})
    upsert?: Array<CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput>;

    @Field(() => CompetitionParticipantCreateManyCompetitionInputEnvelope, {nullable:true})
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    set?: Array<CompetitionParticipantWhereUniqueInput>;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    disconnect?: Array<CompetitionParticipantWhereUniqueInput>;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    delete?: Array<CompetitionParticipantWhereUniqueInput>;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    connect?: Array<CompetitionParticipantWhereUniqueInput>;

    @Field(() => [CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput], {nullable:true})
    update?: Array<CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput>;

    @Field(() => [CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput], {nullable:true})
    updateMany?: Array<CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput>;

    @Field(() => [CompetitionParticipantScalarWhereInput], {nullable:true})
    deleteMany?: Array<CompetitionParticipantScalarWhereInput>;
}
