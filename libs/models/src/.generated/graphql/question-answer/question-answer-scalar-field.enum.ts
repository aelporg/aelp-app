import { registerEnumType } from '@nestjs/graphql';

export enum QuestionAnswerScalarFieldEnum {
    id = "id",
    questionId = "questionId",
    multipleChoiceQuestionAnswerId = "multipleChoiceQuestionAnswerId",
    programmingQuestionAnswerId = "programmingQuestionAnswerId",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    assessmentSubmissionId = "assessmentSubmissionId",
    points = "points",
    userId = "userId"
}


registerEnumType(QuestionAnswerScalarFieldEnum, { name: 'QuestionAnswerScalarFieldEnum', description: undefined })
