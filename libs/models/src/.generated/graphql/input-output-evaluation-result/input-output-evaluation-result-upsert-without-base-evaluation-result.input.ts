import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultUpdateWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-update-without-base-evaluation-result.input';
import { InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-create-without-base-evaluation-result.input';

@InputType()
export class InputOutputEvaluationResultUpsertWithoutBaseEvaluationResultInput {

    @Field(() => InputOutputEvaluationResultUpdateWithoutBaseEvaluationResultInput, {nullable:false})
    update!: InputOutputEvaluationResultUpdateWithoutBaseEvaluationResultInput;

    @Field(() => InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput, {nullable:false})
    create!: InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput;
}
