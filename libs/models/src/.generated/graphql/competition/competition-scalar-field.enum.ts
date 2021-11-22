import { registerEnumType } from '@nestjs/graphql';

export enum CompetitionScalarFieldEnum {
    id = "id",
    isPrivate = "isPrivate",
    creatorUserId = "creatorUserId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CompetitionScalarFieldEnum, { name: 'CompetitionScalarFieldEnum', description: undefined })
