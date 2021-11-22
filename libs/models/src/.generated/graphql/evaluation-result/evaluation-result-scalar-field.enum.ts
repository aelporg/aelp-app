import { registerEnumType } from '@nestjs/graphql';

export enum EvaluationResultScalarFieldEnum {
    id = "id",
    evaluationCriteriaId = "evaluationCriteriaId",
    evaulationPoints = "evaulationPoints",
    inputOutputEvaluationResultId = "inputOutputEvaluationResultId",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    programmingQuestionAnswerId = "programmingQuestionAnswerId"
}


registerEnumType(EvaluationResultScalarFieldEnum, { name: 'EvaluationResultScalarFieldEnum', description: undefined })
