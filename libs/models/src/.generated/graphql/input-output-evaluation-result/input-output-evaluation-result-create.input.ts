import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCreateresultOutputsInput } from '../prisma/input-output-evaluation-result-createresult-outputs.input';
import { EvaluationResultCreateNestedOneWithoutInputOutputEvaulationResultInput } from '../evaluation-result/evaluation-result-create-nested-one-without-input-output-evaulation-result.input';

@InputType()
export class InputOutputEvaluationResultCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => InputOutputEvaluationResultCreateresultOutputsInput, {nullable:true})
    resultOutputs?: InputOutputEvaluationResultCreateresultOutputsInput;

    @Field(() => EvaluationResultCreateNestedOneWithoutInputOutputEvaulationResultInput, {nullable:true})
    baseEvaluationResult?: EvaluationResultCreateNestedOneWithoutInputOutputEvaulationResultInput;
}
