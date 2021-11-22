import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { InputOutputEvaluationResultUpdateresultOutputsInput } from '../prisma/input-output-evaluation-result-updateresult-outputs.input';
import { EvaluationResultUpdateOneWithoutInputOutputEvaulationResultInput } from '../evaluation-result/evaluation-result-update-one-without-input-output-evaulation-result.input';

@InputType()
export class InputOutputEvaluationResultUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => InputOutputEvaluationResultUpdateresultOutputsInput, {nullable:true})
    resultOutputs?: InputOutputEvaluationResultUpdateresultOutputsInput;

    @Field(() => EvaluationResultUpdateOneWithoutInputOutputEvaulationResultInput, {nullable:true})
    baseEvaluationResult?: EvaluationResultUpdateOneWithoutInputOutputEvaulationResultInput;
}
