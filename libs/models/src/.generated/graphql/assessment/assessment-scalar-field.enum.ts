import { registerEnumType } from '@nestjs/graphql';

export enum AssessmentScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    assessmentType = "assessmentType",
    startTime = "startTime",
    endTime = "endTime",
    submitAfterEnd = "submitAfterEnd",
    totalPoints = "totalPoints",
    classroomId = "classroomId",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    competitionId = "competitionId"
}


registerEnumType(AssessmentScalarFieldEnum, { name: 'AssessmentScalarFieldEnum', description: undefined })
