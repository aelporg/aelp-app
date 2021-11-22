import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaUpdateInput } from './input-output-evaluation-criteria-update.input';
import { InputOutputEvaluationCriteriaWhereUniqueInput } from './input-output-evaluation-criteria-where-unique.input';

@ArgsType()
export class UpdateOneInputOutputEvaluationCriteriaArgs {

    @Field(() => InputOutputEvaluationCriteriaUpdateInput, {nullable:false})
    data!: InputOutputEvaluationCriteriaUpdateInput;

    @Field(() => InputOutputEvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: InputOutputEvaluationCriteriaWhereUniqueInput;
}
