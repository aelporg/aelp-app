import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionCreateWithoutParticipantsInput } from './competition-create-without-participants.input';
import { CompetitionCreateOrConnectWithoutParticipantsInput } from './competition-create-or-connect-without-participants.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionCreateNestedOneWithoutParticipantsInput {

    @Field(() => CompetitionCreateWithoutParticipantsInput, {nullable:true})
    create?: CompetitionCreateWithoutParticipantsInput;

    @Field(() => CompetitionCreateOrConnectWithoutParticipantsInput, {nullable:true})
    connectOrCreate?: CompetitionCreateOrConnectWithoutParticipantsInput;

    @Field(() => CompetitionWhereUniqueInput, {nullable:true})
    connect?: CompetitionWhereUniqueInput;
}
