import { registerEnumType } from '@nestjs/graphql';

export enum EnvironmentScalarFieldEnum {
    id = "id",
    scratchPadData = "scratchPadData",
    submitted = "submitted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EnvironmentScalarFieldEnum, { name: 'EnvironmentScalarFieldEnum', description: undefined })
