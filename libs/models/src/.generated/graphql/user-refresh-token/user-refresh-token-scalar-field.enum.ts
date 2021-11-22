import { registerEnumType } from '@nestjs/graphql';

export enum UserRefreshTokenScalarFieldEnum {
    id = "id",
    userId = "userId",
    token = "token",
    expiryDate = "expiryDate",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(UserRefreshTokenScalarFieldEnum, { name: 'UserRefreshTokenScalarFieldEnum', description: undefined })
