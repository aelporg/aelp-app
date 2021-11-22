import { registerEnumType } from '@nestjs/graphql';

export enum ProgrammingQuestionAnswerScalarFieldEnum {
    id = "id",
    envirnmentId = "envirnmentId"
}


registerEnumType(ProgrammingQuestionAnswerScalarFieldEnum, { name: 'ProgrammingQuestionAnswerScalarFieldEnum', description: undefined })
