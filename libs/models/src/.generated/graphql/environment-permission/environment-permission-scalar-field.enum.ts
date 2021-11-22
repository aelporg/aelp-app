import { registerEnumType } from '@nestjs/graphql';

export enum EnvironmentPermissionScalarFieldEnum {
    userId = "userId",
    environmentId = "environmentId",
    permission = "permission",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EnvironmentPermissionScalarFieldEnum, { name: 'EnvironmentPermissionScalarFieldEnum', description: undefined })
