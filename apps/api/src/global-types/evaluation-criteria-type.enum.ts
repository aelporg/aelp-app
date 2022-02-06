import { registerEnumType } from '@nestjs/graphql';

export enum EvaluationCriteriaType {
    MANUAL = "MANUAL",
    INPUT_OUTPUT = "INPUT_OUTPUT",
    PLAG_CHECK = "PLAG_CHECK"
}


registerEnumType(EvaluationCriteriaType, { name: 'EvaluationCriteriaType', description: undefined })
