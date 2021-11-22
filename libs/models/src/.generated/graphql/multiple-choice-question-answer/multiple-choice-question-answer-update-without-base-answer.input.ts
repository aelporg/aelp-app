import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MultipleChoiceQuestionChoiceUpdateOneRequiredWithoutAnswersInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-update-one-required-without-answers.input';

@InputType()
export class MultipleChoiceQuestionAnswerUpdateWithoutBaseAnswerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MultipleChoiceQuestionChoiceUpdateOneRequiredWithoutAnswersInput, {nullable:true})
    questionChoice?: MultipleChoiceQuestionChoiceUpdateOneRequiredWithoutAnswersInput;
}
