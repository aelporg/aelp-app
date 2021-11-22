import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultUpdateManyMutationInput } from './evaluation-result-update-many-mutation.input';
import { EvaluationResultWhereInput } from './evaluation-result-where.input';

@ArgsType()
export class UpdateManyEvaluationResultArgs {

    @Field(() => EvaluationResultUpdateManyMutationInput, {nullable:false})
    data!: EvaluationResultUpdateManyMutationInput;

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    where?: EvaluationResultWhereInput;
}
