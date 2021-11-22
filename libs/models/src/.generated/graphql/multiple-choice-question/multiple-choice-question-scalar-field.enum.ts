import { registerEnumType } from '@nestjs/graphql';

export enum MultipleChoiceQuestionScalarFieldEnum {
    id = "id",
    description = "description",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(MultipleChoiceQuestionScalarFieldEnum, { name: 'MultipleChoiceQuestionScalarFieldEnum', description: undefined })
