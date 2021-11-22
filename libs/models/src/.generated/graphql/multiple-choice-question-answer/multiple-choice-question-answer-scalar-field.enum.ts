import { registerEnumType } from '@nestjs/graphql';

export enum MultipleChoiceQuestionAnswerScalarFieldEnum {
    id = "id",
    questionChoiceId = "questionChoiceId"
}


registerEnumType(MultipleChoiceQuestionAnswerScalarFieldEnum, { name: 'MultipleChoiceQuestionAnswerScalarFieldEnum', description: undefined })
