import { registerEnumType } from '@nestjs/graphql';

export enum InputOutputEvaluationResultScalarFieldEnum {
    id = "id",
    resultOutputs = "resultOutputs"
}


registerEnumType(InputOutputEvaluationResultScalarFieldEnum, { name: 'InputOutputEvaluationResultScalarFieldEnum', description: undefined })
