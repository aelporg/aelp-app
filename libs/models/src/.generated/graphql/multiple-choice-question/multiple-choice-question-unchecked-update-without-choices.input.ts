import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { QuestionUncheckedUpdateOneWithoutMultipleChoiceQuestionInput } from '../question/question-unchecked-update-one-without-multiple-choice-question.input';

@InputType()
export class MultipleChoiceQuestionUncheckedUpdateWithoutChoicesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => QuestionUncheckedUpdateOneWithoutMultipleChoiceQuestionInput, {nullable:true})
    baseQuestion?: QuestionUncheckedUpdateOneWithoutMultipleChoiceQuestionInput;
}
