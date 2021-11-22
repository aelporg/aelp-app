import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantCreateWithoutUserInput } from './competition-participant-create-without-user.input';
import { CompetitionParticipantCreateOrConnectWithoutUserInput } from './competition-participant-create-or-connect-without-user.input';
import { CompetitionParticipantUpsertWithWhereUniqueWithoutUserInput } from './competition-participant-upsert-with-where-unique-without-user.input';
import { CompetitionParticipantCreateManyUserInputEnvelope } from './competition-participant-create-many-user-input-envelope.input';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantUpdateWithWhereUniqueWithoutUserInput } from './competition-participant-update-with-where-unique-without-user.input';
import { CompetitionParticipantUpdateManyWithWhereWithoutUserInput } from './competition-participant-update-many-with-where-without-user.input';
import { CompetitionParticipantScalarWhereInput } from './competition-participant-scalar-where.input';

@InputType()
export class CompetitionParticipantUpdateManyWithoutUserInput {

    @Field(() => [CompetitionParticipantCreateWithoutUserInput], {nullable:true})
    create?: Array<CompetitionParticipantCreateWithoutUserInput>;

    @Field(() => [CompetitionParticipantCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CompetitionParticipantCreateOrConnectWithoutUserInput>;

    @Field(() => [CompetitionParticipantUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<CompetitionParticipantUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CompetitionParticipantCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CompetitionParticipantCreateManyUserInputEnvelope;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    set?: Array<CompetitionParticipantWhereUniqueInput>;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    disconnect?: Array<CompetitionParticipantWhereUniqueInput>;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    delete?: Array<CompetitionParticipantWhereUniqueInput>;

    @Field(() => [CompetitionParticipantWhereUniqueInput], {nullable:true})
    connect?: Array<CompetitionParticipantWhereUniqueInput>;

    @Field(() => [CompetitionParticipantUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<CompetitionParticipantUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CompetitionParticipantUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<CompetitionParticipantUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CompetitionParticipantScalarWhereInput], {nullable:true})
    deleteMany?: Array<CompetitionParticipantScalarWhereInput>;
}
