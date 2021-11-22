import { registerEnumType } from '@nestjs/graphql';

export enum CompetitionParticipantScalarFieldEnum {
    userId = "userId",
    competitionId = "competitionId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CompetitionParticipantScalarFieldEnum, { name: 'CompetitionParticipantScalarFieldEnum', description: undefined })
