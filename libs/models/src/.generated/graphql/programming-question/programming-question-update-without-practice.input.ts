import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProgrammingQuestionTypeFieldUpdateOperationsInput } from '../prisma/enum-programming-question-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SingleFileProgrammingQuestionUpdateOneWithoutBaseProgrammingQuestionInput } from '../single-file-programming-question/single-file-programming-question-update-one-without-base-programming-question.input';
import { MultipleFilesProgrammingQuestionUpdateOneWithoutBaseProgrammingQuestionInput } from '../multiple-files-programming-question/multiple-files-programming-question-update-one-without-base-programming-question.input';
import { QuestionUpdateOneWithoutProgrammingQuestionInput } from '../question/question-update-one-without-programming-question.input';
import { EvaluationCriteriaUpdateManyWithoutProgrammingQuestionInput } from '../evaluation-criteria/evaluation-criteria-update-many-without-programming-question.input';

@InputType()
export class ProgrammingQuestionUpdateWithoutPracticeInput {

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SingleFileProgrammingQuestionUpdateOneWithoutBaseProgrammingQuestionInput, {nullable:true})
    singleFileProgrammingQuestion?: SingleFileProgrammingQuestionUpdateOneWithoutBaseProgrammingQuestionInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateOneWithoutBaseProgrammingQuestionInput, {nullable:true})
    multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionUpdateOneWithoutBaseProgrammingQuestionInput;

    @Field(() => QuestionUpdateOneWithoutProgrammingQuestionInput, {nullable:true})
    baseQuestion?: QuestionUpdateOneWithoutProgrammingQuestionInput;

    @Field(() => EvaluationCriteriaUpdateManyWithoutProgrammingQuestionInput, {nullable:true})
    evaluationCriterias?: EvaluationCriteriaUpdateManyWithoutProgrammingQuestionInput;
}
