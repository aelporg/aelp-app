import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultCreateWithoutInputOutputEvaulationResultInput } from './evaluation-result-create-without-input-output-evaulation-result.input';
import { EvaluationResultCreateOrConnectWithoutInputOutputEvaulationResultInput } from './evaluation-result-create-or-connect-without-input-output-evaulation-result.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';

@InputType()
export class EvaluationResultUncheckedCreateNestedOneWithoutInputOutputEvaulationResultInput {

    @Field(() => EvaluationResultCreateWithoutInputOutputEvaulationResultInput, {nullable:true})
    create?: EvaluationResultCreateWithoutInputOutputEvaulationResultInput;

    @Field(() => EvaluationResultCreateOrConnectWithoutInputOutputEvaulationResultInput, {nullable:true})
    connectOrCreate?: EvaluationResultCreateOrConnectWithoutInputOutputEvaulationResultInput;

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:true})
    connect?: EvaluationResultWhereUniqueInput;
}
