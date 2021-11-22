import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ClassroomMemberUncheckedUpdateManyWithoutClassroomInput } from '../classroom-member/classroom-member-unchecked-update-many-without-classroom.input';
import { AssessmentUncheckedUpdateManyWithoutClassroomInput } from '../assessment/assessment-unchecked-update-many-without-classroom.input';
import { PracticeProgrammingQuestionUncheckedUpdateManyWithoutClassroomInput } from '../practice-programming-question/practice-programming-question-unchecked-update-many-without-classroom.input';

@InputType()
export class ClassroomUncheckedUpdateInput {

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

    @Field(() => ClassroomMemberUncheckedUpdateManyWithoutClassroomInput, {nullable:true})
    members?: ClassroomMemberUncheckedUpdateManyWithoutClassroomInput;

    @Field(() => AssessmentUncheckedUpdateManyWithoutClassroomInput, {nullable:true})
    assessments?: AssessmentUncheckedUpdateManyWithoutClassroomInput;

    @Field(() => PracticeProgrammingQuestionUncheckedUpdateManyWithoutClassroomInput, {nullable:true})
    practiceProgrammingQuestions?: PracticeProgrammingQuestionUncheckedUpdateManyWithoutClassroomInput;
}
