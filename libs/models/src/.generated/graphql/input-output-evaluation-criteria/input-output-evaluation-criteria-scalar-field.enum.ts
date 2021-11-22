import { registerEnumType } from '@nestjs/graphql';

export enum InputOutputEvaluationCriteriaScalarFieldEnum {
    id = "id",
    inputs = "inputs",
    outputs = "outputs",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(InputOutputEvaluationCriteriaScalarFieldEnum, { name: 'InputOutputEvaluationCriteriaScalarFieldEnum', description: undefined })
