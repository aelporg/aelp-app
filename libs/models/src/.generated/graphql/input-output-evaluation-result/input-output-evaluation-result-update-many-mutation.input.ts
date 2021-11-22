import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { InputOutputEvaluationResultUpdateresultOutputsInput } from '../prisma/input-output-evaluation-result-updateresult-outputs.input';

@InputType()
export class InputOutputEvaluationResultUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => InputOutputEvaluationResultUpdateresultOutputsInput, {nullable:true})
    resultOutputs?: InputOutputEvaluationResultUpdateresultOutputsInput;
}
