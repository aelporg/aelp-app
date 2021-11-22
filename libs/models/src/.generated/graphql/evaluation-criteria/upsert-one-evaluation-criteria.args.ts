import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaCreateInput } from './evaluation-criteria-create.input';
import { EvaluationCriteriaUpdateInput } from './evaluation-criteria-update.input';

@ArgsType()
export class UpsertOneEvaluationCriteriaArgs {

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: EvaluationCriteriaWhereUniqueInput;

    @Field(() => EvaluationCriteriaCreateInput, {nullable:false})
    create!: EvaluationCriteriaCreateInput;

    @Field(() => EvaluationCriteriaUpdateInput, {nullable:false})
    update!: EvaluationCriteriaUpdateInput;
}
