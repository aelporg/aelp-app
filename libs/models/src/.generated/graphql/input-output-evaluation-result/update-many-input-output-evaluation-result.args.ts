import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultUpdateManyMutationInput } from './input-output-evaluation-result-update-many-mutation.input';
import { InputOutputEvaluationResultWhereInput } from './input-output-evaluation-result-where.input';

@ArgsType()
export class UpdateManyInputOutputEvaluationResultArgs {

    @Field(() => InputOutputEvaluationResultUpdateManyMutationInput, {nullable:false})
    data!: InputOutputEvaluationResultUpdateManyMutationInput;

    @Field(() => InputOutputEvaluationResultWhereInput, {nullable:true})
    where?: InputOutputEvaluationResultWhereInput;
}
