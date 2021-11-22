import { registerEnumType } from '@nestjs/graphql';

export enum SingleFileProgrammingQuestionScalarFieldEnum {
    id = "id",
    defaultCode = "defaultCode"
}


registerEnumType(SingleFileProgrammingQuestionScalarFieldEnum, { name: 'SingleFileProgrammingQuestionScalarFieldEnum', description: undefined })
