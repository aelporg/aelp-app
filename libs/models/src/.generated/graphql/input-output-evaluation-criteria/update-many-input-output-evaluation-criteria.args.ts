import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaUpdateManyMutationInput } from './input-output-evaluation-criteria-update-many-mutation.input';
import { InputOutputEvaluationCriteriaWhereInput } from './input-output-evaluation-criteria-where.input';

@ArgsType()
export class UpdateManyInputOutputEvaluationCriteriaArgs {

    @Field(() => InputOutputEvaluationCriteriaUpdateManyMutationInput, {nullable:false})
    data!: InputOutputEvaluationCriteriaUpdateManyMutationInput;

    @Field(() => InputOutputEvaluationCriteriaWhereInput, {nullable:true})
    where?: InputOutputEvaluationCriteriaWhereInput;
}
