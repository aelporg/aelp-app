import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProgrammingQuestionTypeFieldUpdateOperationsInput } from '../prisma/enum-programming-question-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EvaluationCriteriaUncheckedUpdateManyWithoutProgrammingQuestionInput } from '../evaluation-criteria/evaluation-criteria-unchecked-update-many-without-programming-question.input';
import { PracticeProgrammingQuestionUncheckedUpdateOneWithoutQuestionInput } from '../practice-programming-question/practice-programming-question-unchecked-update-one-without-question.input';

@InputType()
export class ProgrammingQuestionUncheckedUpdateWithoutBaseQuestionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statementMrkdwn?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statementCompiled?: StringFieldUpdateOperationsInput;

    @Field(() => EnumProgrammingQuestionTypeFieldUpdateOperationsInput, {nullable:true})
    programmingQuestionType?: EnumProgrammingQuestionTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    singleFileProgrammingQuestionId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    multipleFilesProgrammingQuestionId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EvaluationCriteriaUncheckedUpdateManyWithoutProgrammingQuestionInput, {nullable:true})
    evaluationCriterias?: EvaluationCriteriaUncheckedUpdateManyWithoutProgrammingQuestionInput;

    @Field(() => PracticeProgrammingQuestionUncheckedUpdateOneWithoutQuestionInput, {nullable:true})
    practice?: PracticeProgrammingQuestionUncheckedUpdateOneWithoutQuestionInput;
}
