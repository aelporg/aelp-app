import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultCreateWithoutInputOutputEvaulationResultInput } from './evaluation-result-create-without-input-output-evaulation-result.input';
import { EvaluationResultCreateOrConnectWithoutInputOutputEvaulationResultInput } from './evaluation-result-create-or-connect-without-input-output-evaulation-result.input';
import { EvaluationResultUpsertWithoutInputOutputEvaulationResultInput } from './evaluation-result-upsert-without-input-output-evaulation-result.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultUpdateWithoutInputOutputEvaulationResultInput } from './evaluation-result-update-without-input-output-evaulation-result.input';

@InputType()
export class EvaluationResultUncheckedUpdateOneWithoutInputOutputEvaulationResultInput {

    @Field(() => EvaluationResultCreateWithoutInputOutputEvaulationResultInput, {nullable:true})
    create?: EvaluationResultCreateWithoutInputOutputEvaulationResultInput;

    @Field(() => EvaluationResultCreateOrConnectWithoutInputOutputEvaulationResultInput, {nullable:true})
    connectOrCreate?: EvaluationResultCreateOrConnectWithoutInputOutputEvaulationResultInput;

    @Field(() => EvaluationResultUpsertWithoutInputOutputEvaulationResultInput, {nullable:true})
    upsert?: EvaluationResultUpsertWithoutInputOutputEvaulationResultInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:true})
    connect?: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultUpdateWithoutInputOutputEvaulationResultInput, {nullable:true})
    update?: EvaluationResultUpdateWithoutInputOutputEvaulationResultInput;
}
