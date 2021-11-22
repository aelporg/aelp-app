import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultWhereUniqueInput } from './input-output-evaluation-result-where-unique.input';
import { InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-create-without-base-evaluation-result.input';

@InputType()
export class InputOutputEvaluationResultCreateOrConnectWithoutBaseEvaluationResultInput {

    @Field(() => InputOutputEvaluationResultWhereUniqueInput, {nullable:false})
    where!: InputOutputEvaluationResultWhereUniqueInput;

    @Field(() => InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput, {nullable:false})
    create!: InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput;
}
