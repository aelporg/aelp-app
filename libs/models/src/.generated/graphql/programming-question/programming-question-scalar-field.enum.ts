import { registerEnumType } from '@nestjs/graphql';

export enum ProgrammingQuestionScalarFieldEnum {
    id = "id",
    title = "title",
    statementMrkdwn = "statementMrkdwn",
    statementCompiled = "statementCompiled",
    programmingQuestionType = "programmingQuestionType",
    singleFileProgrammingQuestionId = "singleFileProgrammingQuestionId",
    multipleFilesProgrammingQuestionId = "multipleFilesProgrammingQuestionId",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(ProgrammingQuestionScalarFieldEnum, { name: 'ProgrammingQuestionScalarFieldEnum', description: undefined })
