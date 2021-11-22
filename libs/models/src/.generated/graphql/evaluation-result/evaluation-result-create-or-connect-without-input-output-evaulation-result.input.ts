import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultCreateWithoutInputOutputEvaulationResultInput } from './evaluation-result-create-without-input-output-evaulation-result.input';

@InputType()
export class EvaluationResultCreateOrConnectWithoutInputOutputEvaulationResultInput {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultCreateWithoutInputOutputEvaulationResultInput, {nullable:false})
    create!: EvaluationResultCreateWithoutInputOutputEvaulationResultInput;
}
