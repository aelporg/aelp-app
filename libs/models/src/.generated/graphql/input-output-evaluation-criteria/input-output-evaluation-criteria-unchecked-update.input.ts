import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { InputOutputEvaluationCriteriaUpdateinputsInput } from '../prisma/input-output-evaluation-criteria-updateinputs.input';
import { InputOutputEvaluationCriteriaUpdateoutputsInput } from '../prisma/input-output-evaluation-criteria-updateoutputs.input';
import { EvaluationCriteriaUncheckedUpdateManyWithoutInputOutputEvalCritInput } from '../evaluation-criteria/evaluation-criteria-unchecked-update-many-without-input-output-eval-crit.input';

@InputType()
export class InputOutputEvaluationCriteriaUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => InputOutputEvaluationCriteriaUpdateinputsInput, {nullable:true})
    inputs?: InputOutputEvaluationCriteriaUpdateinputsInput;

    @Field(() => InputOutputEvaluationCriteriaUpdateoutputsInput, {nullable:true})
    outputs?: InputOutputEvaluationCriteriaUpdateoutputsInput;

    @Field(() => EvaluationCriteriaUncheckedUpdateManyWithoutInputOutputEvalCritInput, {nullable:true})
    baseCriteria?: EvaluationCriteriaUncheckedUpdateManyWithoutInputOutputEvalCritInput;
}
