import { registerEnumType } from '@nestjs/graphql';

export enum MultipleFilesProgrammingQuestionScalarFieldEnum {
    id = "id",
    languageId = "languageId"
}


registerEnumType(MultipleFilesProgrammingQuestionScalarFieldEnum, { name: 'MultipleFilesProgrammingQuestionScalarFieldEnum', description: undefined })
