import { registerEnumType } from '@nestjs/graphql';

export enum QuestionScalarFieldEnum {
    id = "id",
    questionType = "questionType",
    points = "points",
    multipleChoiceQuestionId = "multipleChoiceQuestionId",
    programmingQuestionId = "programmingQuestionId",
    assessmentId = "assessmentId",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(QuestionScalarFieldEnum, { name: 'QuestionScalarFieldEnum', description: undefined })
