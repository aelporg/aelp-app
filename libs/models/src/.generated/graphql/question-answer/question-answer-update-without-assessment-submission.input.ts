import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { QuestionUpdateOneRequiredWithoutAnswersInput } from '../question/question-update-one-required-without-answers.input';
import { MultipleChoiceQuestionAnswerUpdateOneWithoutBaseAnswerInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-update-one-without-base-answer.input';
import { ProgrammingQuestionAnswerUpdateOneWithoutBaseAnswerInput } from '../programming-question-answer/programming-question-answer-update-one-without-base-answer.input';

@InputType()
export class QuestionAnswerUpdateWithoutAssessmentSubmissionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    points?: IntFieldUpdateOperationsInput;

    @Field(() => QuestionUpdateOneRequiredWithoutAnswersInput, {nullable:true})
    question?: QuestionUpdateOneRequiredWithoutAnswersInput;

    @Field(() => MultipleChoiceQuestionAnswerUpdateOneWithoutBaseAnswerInput, {nullable:true})
    multipleChoiceQuestionAnswer?: MultipleChoiceQuestionAnswerUpdateOneWithoutBaseAnswerInput;

    @Field(() => ProgrammingQuestionAnswerUpdateOneWithoutBaseAnswerInput, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswerUpdateOneWithoutBaseAnswerInput;
}
