import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumAssessmentTypeFieldUpdateOperationsInput } from '../prisma/enum-assessment-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { QuestionUpdateManyWithoutAssessmentInput } from '../question/question-update-many-without-assessment.input';
import { ClassroomUpdateOneWithoutAssessmentsInput } from '../classroom/classroom-update-one-without-assessments.input';
import { AssessmentAnswerUpdateManyWithoutAssessmentInput } from '../assessment-answer/assessment-answer-update-many-without-assessment.input';

@InputType()
export class AssessmentUpdateWithoutCompetitionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAssessmentTypeFieldUpdateOperationsInput, {nullable:true})
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endTime?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    submitAfterEnd?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalPoints?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => QuestionUpdateManyWithoutAssessmentInput, {nullable:true})
    questions?: QuestionUpdateManyWithoutAssessmentInput;

    @Field(() => ClassroomUpdateOneWithoutAssessmentsInput, {nullable:true})
    classroom?: ClassroomUpdateOneWithoutAssessmentsInput;

    @Field(() => AssessmentAnswerUpdateManyWithoutAssessmentInput, {nullable:true})
    answers?: AssessmentAnswerUpdateManyWithoutAssessmentInput;
}
