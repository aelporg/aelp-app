import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AssessmentUpdateManyWithoutClassroomInput } from '../assessment/assessment-update-many-without-classroom.input';
import { PracticeProgrammingQuestionUpdateManyWithoutClassroomInput } from '../practice-programming-question/practice-programming-question-update-many-without-classroom.input';

@InputType()
export class ClassroomUpdateWithoutMembersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subject?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    section?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    inviteCode?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AssessmentUpdateManyWithoutClassroomInput, {nullable:true})
    assessments?: AssessmentUpdateManyWithoutClassroomInput;

    @Field(() => PracticeProgrammingQuestionUpdateManyWithoutClassroomInput, {nullable:true})
    practiceProgrammingQuestions?: PracticeProgrammingQuestionUpdateManyWithoutClassroomInput;
}
