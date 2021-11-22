import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantCreateWithoutUserInput } from './competition-participant-create-without-user.input';
import { CompetitionParticipantCreateOrConnectWithoutUserInput } from './competition-participant-create-or-connect-without-user.input';
import { CompetitionParticipantCreateManyUserInputEnvelope } from './competition-participant-create-many-user-input-envelope.input';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';

@InputType()
export class CompetitionParticipantCreateNestedManyWithoutUserInput {

    @Field(() => [CompetitionParticipantCreateWithoutUserInput], {nullable:true})
    create?: Array<CompetitionParticipantCreateWithoutUserInput>;

    @Field(() => [CompetitionParticipantCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CompetitionParticipantCreateOrConnectWithoutUserInput>;

    @Field(() => CompetitionParticipantCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CompetitionParticipantCreateManyUserInputEnvelope;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    connect?: Array<CompetitionParticipantWhereUniqueInput>;
}
