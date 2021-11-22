import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCreateresultOutputsInput } from '../prisma/input-output-evaluation-result-createresult-outputs.input';
import { EvaluationResultUncheckedCreateNestedOneWithoutInputOutputEvaulationResultInput } from '../evaluation-result/evaluation-result-unchecked-create-nested-one-without-input-output-evaulation-result.input';

@InputType()
export class InputOutputEvaluationResultUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => InputOutputEvaluationResultCreateresultOutputsInput, {nullable:true})
    resultOutputs?: InputOutputEvaluationResultCreateresultOutputsInput;

    @Field(() => EvaluationResultUncheckedCreateNestedOneWithoutInputOutputEvaulationResultInput, {nullable:true})
    baseEvaluationResult?: EvaluationResultUncheckedCreateNestedOneWithoutInputOutputEvaulationResultInput;
}
