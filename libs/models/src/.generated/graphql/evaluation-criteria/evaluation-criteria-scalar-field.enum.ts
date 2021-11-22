import { registerEnumType } from '@nestjs/graphql';

export enum EvaluationCriteriaScalarFieldEnum {
    id = "id",
    name = "name",
    type = "type",
    totalPoints = "totalPoints",
    inputOutputEvalCritId = "inputOutputEvalCritId",
    requiredToPass = "requiredToPass",
    programmingQuestionId = "programmingQuestionId",
    hidden = "hidden",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(EvaluationCriteriaScalarFieldEnum, { name: 'EvaluationCriteriaScalarFieldEnum', description: undefined })
