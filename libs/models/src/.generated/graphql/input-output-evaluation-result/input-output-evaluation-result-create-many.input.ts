import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCreateManyresultOutputsInput } from './input-output-evaluation-result-create-manyresult-outputs.input';

@InputType()
export class InputOutputEvaluationResultCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => InputOutputEvaluationResultCreateManyresultOutputsInput, {nullable:true})
    resultOutputs?: InputOutputEvaluationResultCreateManyresultOutputsInput;
}
