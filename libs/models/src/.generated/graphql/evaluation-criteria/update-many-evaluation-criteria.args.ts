import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaUpdateManyMutationInput } from './evaluation-criteria-update-many-mutation.input';
import { EvaluationCriteriaWhereInput } from './evaluation-criteria-where.input';

@ArgsType()
export class UpdateManyEvaluationCriteriaArgs {

    @Field(() => EvaluationCriteriaUpdateManyMutationInput, {nullable:false})
    data!: EvaluationCriteriaUpdateManyMutationInput;

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    where?: EvaluationCriteriaWhereInput;
}
