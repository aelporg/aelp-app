import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutParticipantsInput } from './competition-create-without-participants.input';

@InputType()
export class CompetitionCreateOrConnectWithoutParticipantsInput {

    @Field(() => CompetitionWhereUniqueInput, {nullable:false})
    where!: CompetitionWhereUniqueInput;

    @Field(() => CompetitionCreateWithoutParticipantsInput, {nullable:false})
    create!: CompetitionCreateWithoutParticipantsInput;
}
