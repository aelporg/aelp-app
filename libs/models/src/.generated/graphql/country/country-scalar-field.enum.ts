import { registerEnumType } from '@nestjs/graphql';

export enum CountryScalarFieldEnum {
    id = "id",
    countryName = "countryName",
    countryCode = "countryCode",
    flagImageUrl = "flagImageUrl",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(CountryScalarFieldEnum, { name: 'CountryScalarFieldEnum', description: undefined })
