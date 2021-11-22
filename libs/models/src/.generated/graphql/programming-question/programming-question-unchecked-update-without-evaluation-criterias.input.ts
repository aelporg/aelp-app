import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProgrammingQuestionTypeFieldUpdateOperationsInput } from '../prisma/enum-programming-question-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { QuestionUncheckedUpdateOneWithoutProgrammingQuestionInput } from '../question/question-unchecked-update-one-without-programming-question.input';
import { PracticeProgrammingQuestionUncheckedUpdateOneWithoutQuestionInput } from '../practice-programming-question/practice-programming-question-unchecked-update-one-without-question.input';

@InputType()
export class ProgrammingQuestionUncheckedUpdateWithoutEvaluationCriteriasInput {

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

    @Field(() => QuestionUncheckedUpdateOneWithoutProgrammingQuestionInput, {nullable:true})
    baseQuestion?: QuestionUncheckedUpdateOneWithoutProgrammingQuestionInput;

    @Field(() => PracticeProgrammingQuestionUncheckedUpdateOneWithoutQuestionInput, {nullable:true})
    practice?: PracticeProgrammingQuestionUncheckedUpdateOneWithoutQuestionInput;
}
