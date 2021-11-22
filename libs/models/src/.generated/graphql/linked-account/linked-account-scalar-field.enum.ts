import { registerEnumType } from '@nestjs/graphql';

export enum LinkedAccountScalarFieldEnum {
    userId = "userId",
    providerId = "providerId",
    externalId = "externalId",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(LinkedAccountScalarFieldEnum, { name: 'LinkedAccountScalarFieldEnum', description: undefined })
