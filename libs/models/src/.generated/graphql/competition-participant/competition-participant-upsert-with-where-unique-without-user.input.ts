import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantUpdateWithoutUserInput } from './competition-participant-update-without-user.input';
import { CompetitionParticipantCreateWithoutUserInput } from './competition-participant-create-without-user.input';

@InputType()
export class CompetitionParticipantUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;

    @Field(() => CompetitionParticipantUpdateWithoutUserInput, {nullable:false})
    update!: CompetitionParticipantUpdateWithoutUserInput;

    @Field(() => CompetitionParticipantCreateWithoutUserInput, {nullable:false})
    create!: CompetitionParticipantCreateWithoutUserInput;
}
