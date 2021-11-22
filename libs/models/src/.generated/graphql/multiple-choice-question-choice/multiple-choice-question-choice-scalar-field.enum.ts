import { registerEnumType } from '@nestjs/graphql';

export enum MultipleChoiceQuestionChoiceScalarFieldEnum {
    id = "id",
    choice = "choice",
    questionId = "questionId",
    correct = "correct",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(MultipleChoiceQuestionChoiceScalarFieldEnum, { name: 'MultipleChoiceQuestionChoiceScalarFieldEnum', description: undefined })
