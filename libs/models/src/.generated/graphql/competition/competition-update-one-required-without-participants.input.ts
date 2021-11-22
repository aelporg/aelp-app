import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionCreateWithoutParticipantsInput } from './competition-create-without-participants.input';
import { CompetitionCreateOrConnectWithoutParticipantsInput } from './competition-create-or-connect-without-participants.input';
import { CompetitionUpsertWithoutParticipantsInput } from './competition-upsert-without-participants.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithoutParticipantsInput } from './competition-update-without-participants.input';

@InputType()
export class CompetitionUpdateOneRequiredWithoutParticipantsInput {

    @Field(() => CompetitionCreateWithoutParticipantsInput, {nullable:true})
    create?: CompetitionCreateWithoutParticipantsInput;

    @Field(() => CompetitionCreateOrConnectWithoutParticipantsInput, {nullable:true})
    connectOrCreate?: CompetitionCreateOrConnectWithoutParticipantsInput;

    @Field(() => CompetitionUpsertWithoutParticipantsInput, {nullable:true})
    upsert?: CompetitionUpsertWithoutParticipantsInput;

    @Field(() => CompetitionWhereUniqueInput, {nullable:true})
    connect?: CompetitionWhereUniqueInput;

    @Field(() => CompetitionUpdateWithoutParticipantsInput, {nullable:true})
    update?: CompetitionUpdateWithoutParticipantsInput;
}
