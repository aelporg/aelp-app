import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaUpdateInput } from './evaluation-criteria-update.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';

@ArgsType()
export class UpdateOneEvaluationCriteriaArgs {

    @Field(() => EvaluationCriteriaUpdateInput, {nullable:false})
    data!: EvaluationCriteriaUpdateInput;

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: EvaluationCriteriaWhereUniqueInput;
}
