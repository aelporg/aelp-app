import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { CompetitionParticipantCreateWithoutUserInput } from './competition-participant-create-without-user.input';

@InputType()
export class CompetitionParticipantCreateOrConnectWithoutUserInput {

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:false})
    where!: CompetitionParticipantWhereUniqueInput;

    @Field(() => CompetitionParticipantCreateWithoutUserInput, {nullable:false})
    create!: CompetitionParticipantCreateWithoutUserInput;
}
