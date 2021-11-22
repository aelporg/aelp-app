import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultUpdateWithoutInputOutputEvaulationResultInput } from './evaluation-result-update-without-input-output-evaulation-result.input';
import { EvaluationResultCreateWithoutInputOutputEvaulationResultInput } from './evaluation-result-create-without-input-output-evaulation-result.input';

@InputType()
export class EvaluationResultUpsertWithoutInputOutputEvaulationResultInput {

    @Field(() => EvaluationResultUpdateWithoutInputOutputEvaulationResultInput, {nullable:false})
    update!: EvaluationResultUpdateWithoutInputOutputEvaulationResultInput;

    @Field(() => EvaluationResultCreateWithoutInputOutputEvaulationResultInput, {nullable:false})
    create!: EvaluationResultCreateWithoutInputOutputEvaulationResultInput;
}
