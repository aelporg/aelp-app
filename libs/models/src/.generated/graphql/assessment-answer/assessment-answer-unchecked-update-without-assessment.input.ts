import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { QuestionAnswerUncheckedUpdateManyWithoutAssessmentSubmissionInput } from '../question-answer/question-answer-unchecked-update-many-without-assessment-submission.input';

@InputType()
export class AssessmentAnswerUncheckedUpdateWithoutAssessmentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    reviewed?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    recPoints?: IntFieldUpdateOperationsInput;

    @Field(() => QuestionAnswerUncheckedUpdateManyWithoutAssessmentSubmissionInput, {nullable:true})
    questionsSubmissions?: QuestionAnswerUncheckedUpdateManyWithoutAssessmentSubmissionInput;
}