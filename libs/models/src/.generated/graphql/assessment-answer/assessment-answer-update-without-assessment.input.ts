import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAssessmentAnswersInput } from '../user/user-update-one-required-without-assessment-answers.input';
import { QuestionAnswerUpdateManyWithoutAssessmentSubmissionInput } from '../question-answer/question-answer-update-many-without-assessment-submission.input';

@InputType()
export class AssessmentAnswerUpdateWithoutAssessmentInput {

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

    @Field(() => UserUpdateOneRequiredWithoutAssessmentAnswersInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAssessmentAnswersInput;

    @Field(() => QuestionAnswerUpdateManyWithoutAssessmentSubmissionInput, {nullable:true})
    questionsSubmissions?: QuestionAnswerUpdateManyWithoutAssessmentSubmissionInput;
}
