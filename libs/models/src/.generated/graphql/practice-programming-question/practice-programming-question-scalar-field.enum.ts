import { registerEnumType } from '@nestjs/graphql';

export enum PracticeProgrammingQuestionScalarFieldEnum {
    id = "id",
    questionId = "questionId",
    diffculty = "diffculty",
    classroomId = "classroomId"
}


registerEnumType(PracticeProgrammingQuestionScalarFieldEnum, { name: 'PracticeProgrammingQuestionScalarFieldEnum', description: undefined })
