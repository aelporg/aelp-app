import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { QuestionUpdateOneWithoutMultipleChoiceQuestionInput } from '../question/question-update-one-without-multiple-choice-question.input';

@InputType()
export class MultipleChoiceQuestionUpdateWithoutChoicesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => QuestionUpdateOneWithoutMultipleChoiceQuestionInput, {nullable:true})
    baseQuestion?: QuestionUpdateOneWithoutMultipleChoiceQuestionInput;
}
