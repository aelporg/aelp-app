import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantWhereInput } from './competition-participant-where.input';

@InputType()
export class CompetitionParticipantListRelationFilter {

    @Field(() => CompetitionParticipantWhereInput, {nullable:true})
    every?: CompetitionParticipantWhereInput;

    @Field(() => CompetitionParticipantWhereInput, {nullable:true})
    some?: CompetitionParticipantWhereInput;

    @Field(() => CompetitionParticipantWhereInput, {nullable:true})
    none?: CompetitionParticipantWhereInput;
}
