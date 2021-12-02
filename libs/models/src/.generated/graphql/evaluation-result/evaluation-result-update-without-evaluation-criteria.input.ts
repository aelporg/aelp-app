import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { InputOutputEvaluationResultUpdateOneWithoutBaseEvaluationResultInput } from '../input-output-evaluation-result/input-output-evaluation-result-update-one-without-base-evaluation-result.input';
import { ProgrammingQuestionAnswerUpdateOneRequiredWithoutEvaluationResultsInput } from '../programming-question-answer/programming-question-answer-update-one-required-without-evaluation-results.input';

@InputType()
export class EvaluationResultUpdateWithoutEvaluationCriteriaInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    evaulationPoints?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => InputOutputEvaluationResultUpdateOneWithoutBaseEvaluationResultInput, {nullable:true})
    inputOutputEvaulationResult?: InputOutputEvaluationResultUpdateOneWithoutBaseEvaluationResultInput;

    @Field(() => ProgrammingQuestionAnswerUpdateOneRequiredWithoutEvaluationResultsInput, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswerUpdateOneRequiredWithoutEvaluationResultsInput;
}