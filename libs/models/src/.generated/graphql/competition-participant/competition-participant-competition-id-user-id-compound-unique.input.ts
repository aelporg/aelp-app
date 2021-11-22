import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CompetitionParticipantCompetitionIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    competitionId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
