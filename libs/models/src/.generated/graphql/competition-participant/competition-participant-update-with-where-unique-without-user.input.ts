import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantUpdateWithoutUserInput } from './competition-participant-update-without-user.input';

@InputType()
export class CompetitionParticipantUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;

    @Field(() => CompetitionParticipantUpdateWithoutUserInput, {nullable:false})
    data!: CompetitionParticipantUpdateWithoutUserInput;
}
