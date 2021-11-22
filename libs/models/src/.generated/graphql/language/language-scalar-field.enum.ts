import { registerEnumType } from '@nestjs/graphql';

export enum LanguageScalarFieldEnum {
    id = "id",
    name = "name",
    extension = "extension",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LanguageScalarFieldEnum, { name: 'LanguageScalarFieldEnum', description: undefined })
