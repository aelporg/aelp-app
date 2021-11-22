import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCreateresultOutputsInput } from '../prisma/input-output-evaluation-result-createresult-outputs.input';

@InputType()
export class InputOutputEvaluationResultUncheckedCreateWithoutBaseEvaluationResultInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => InputOutputEvaluationResultCreateresultOutputsInput, {nullable:true})
    resultOutputs?: InputOutputEvaluationResultCreateresultOutputsInput;
}
