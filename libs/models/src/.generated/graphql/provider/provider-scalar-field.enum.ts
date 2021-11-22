import { registerEnumType } from '@nestjs/graphql';

export enum ProviderScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProviderScalarFieldEnum, { name: 'ProviderScalarFieldEnum', description: undefined })
