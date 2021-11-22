import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { InputOutputEvaluationResultUpdateresultOutputsInput } from '../prisma/input-output-evaluation-result-updateresult-outputs.input';
import { EvaluationResultUncheckedUpdateOneWithoutInputOutputEvaulationResultInput } from '../evaluation-result/evaluation-result-unchecked-update-one-without-input-output-evaulation-result.input';

@InputType()
export class InputOutputEvaluationResultUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => InputOutputEvaluationResultUpdateresultOutputsInput, {nullable:true})
    resultOutputs?: InputOutputEvaluationResultUpdateresultOutputsInput;

    @Field(() => EvaluationResultUncheckedUpdateOneWithoutInputOutputEvaulationResultInput, {nullable:true})
    baseEvaluationResult?: EvaluationResultUncheckedUpdateOneWithoutInputOutputEvaulationResultInput;
}
