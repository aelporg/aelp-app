import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-create-without-base-evaluation-result.input';
import { InputOutputEvaluationResultCreateOrConnectWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-create-or-connect-without-base-evaluation-result.input';
import { InputOutputEvaluationResultWhereUniqueInput } from './input-output-evaluation-result-where-unique.input';

@InputType()
export class InputOutputEvaluationResultCreateNestedOneWithoutBaseEvaluationResultInput {

    @Field(() => InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput, {nullable:true})
    create?: InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput;

    @Field(() => InputOutputEvaluationResultCreateOrConnectWithoutBaseEvaluationResultInput, {nullable:true})
    connectOrCreate?: InputOutputEvaluationResultCreateOrConnectWithoutBaseEvaluationResultInput;

    @Field(() => InputOutputEvaluationResultWhereUniqueInput, {nullable:true})
    connect?: InputOutputEvaluationResultWhereUniqueInput;
}
