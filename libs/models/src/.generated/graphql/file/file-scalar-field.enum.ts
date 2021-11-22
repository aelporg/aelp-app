import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    name = "name",
    extension = "extension",
    data = "data",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    environmentId = "environmentId"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
