import { registerEnumType } from '@nestjs/graphql';

export enum AssessmentAnswerScalarFieldEnum {
    userId = "userId",
    assessmentId = "assessmentId",
    reviewed = "reviewed",
    submittedAt = "submittedAt",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    recPoints = "recPoints"
}


registerEnumType(AssessmentAnswerScalarFieldEnum, { name: 'AssessmentAnswerScalarFieldEnum', description: undefined })
