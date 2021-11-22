import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantCompetitionIdUserIdCompoundUniqueInput } from './competition-participant-competition-id-user-id-compound-unique.input';

@InputType()
export class CompetitionParticipantWhereUniqueInput {

    @Field(() => CompetitionParticipantCompetitionIdUserIdCompoundUniqueInput, {nullable:true})
    competitionId_userId?: CompetitionParticipantCompetitionIdUserIdCompoundUniqueInput;
}
