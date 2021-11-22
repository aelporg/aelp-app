import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaWhereUniqueInput } from './input-output-evaluation-criteria-where-unique.input';
import { InputOutputEvaluationCriteriaCreateInput } from './input-output-evaluation-criteria-create.input';
import { InputOutputEvaluationCriteriaUpdateInput } from './input-output-evaluation-criteria-update.input';

@ArgsType()
export class UpsertOneInputOutputEvaluationCriteriaArgs {

    @Field(() => InputOutputEvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: InputOutputEvaluationCriteriaWhereUniqueInput;

    @Field(() => InputOutputEvaluationCriteriaCreateInput, {nullable:false})
    create!: InputOutputEvaluationCriteriaCreateInput;

    @Field(() => InputOutputEvaluationCriteriaUpdateInput, {nullable:false})
    update!: InputOutputEvaluationCriteriaUpdateInput;
}
