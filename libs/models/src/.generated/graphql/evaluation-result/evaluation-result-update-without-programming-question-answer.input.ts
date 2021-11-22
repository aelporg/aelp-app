import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EvaluationCriteriaUpdateOneRequiredWithoutResultsInput } from '../evaluation-criteria/evaluation-criteria-update-one-required-without-results.input';
import { InputOutputEvaluationResultUpdateOneWithoutBaseEvaluationResultInput } from '../input-output-evaluation-result/input-output-evaluation-result-update-one-without-base-evaluation-result.input';

@InputType()
export class EvaluationResultUpdateWithoutProgrammingQuestionAnswerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    evaulationPoints?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EvaluationCriteriaUpdateOneRequiredWithoutResultsInput, {nullable:true})
    evaluationCriteria?: EvaluationCriteriaUpdateOneRequiredWithoutResultsInput;

    @Field(() => InputOutputEvaluationResultUpdateOneWithoutBaseEvaluationResultInput, {nullable:true})
    inputOutputEvaulationResult?: InputOutputEvaluationResultUpdateOneWithoutBaseEvaluationResultInput;
}
