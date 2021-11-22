import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEvaluationCriteriaTypeFieldUpdateOperationsInput } from '../prisma/enum-evaluation-criteria-type-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { InputOutputEvaluationCriteriaUpdateOneWithoutBaseCriteriaInput } from '../input-output-evaluation-criteria/input-output-evaluation-criteria-update-one-without-base-criteria.input';
import { ProgrammingQuestionUpdateOneRequiredWithoutEvaluationCriteriasInput } from '../programming-question/programming-question-update-one-required-without-evaluation-criterias.input';
import { EvaluationResultUpdateManyWithoutEvaluationCriteriaInput } from '../evaluation-result/evaluation-result-update-many-without-evaluation-criteria.input';

@InputType()
export class EvaluationCriteriaUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEvaluationCriteriaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumEvaluationCriteriaTypeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalPoints?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    requiredToPass?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hidden?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => InputOutputEvaluationCriteriaUpdateOneWithoutBaseCriteriaInput, {nullable:true})
    inputOutputEvalCrit?: InputOutputEvaluationCriteriaUpdateOneWithoutBaseCriteriaInput;

    @Field(() => ProgrammingQuestionUpdateOneRequiredWithoutEvaluationCriteriasInput, {nullable:true})
    programmingQuestion?: ProgrammingQuestionUpdateOneRequiredWithoutEvaluationCriteriasInput;

    @Field(() => EvaluationResultUpdateManyWithoutEvaluationCriteriaInput, {nullable:true})
    results?: EvaluationResultUpdateManyWithoutEvaluationCriteriaInput;
}
