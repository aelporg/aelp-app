import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaUpdateWithoutInputOutputEvalCritInput } from './evaluation-criteria-update-without-input-output-eval-crit.input';

@InputType()
export class EvaluationCriteriaUpdateWithWhereUniqueWithoutInputOutputEvalCritInput {

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: EvaluationCriteriaWhereUniqueInput;

    @Field(() => EvaluationCriteriaUpdateWithoutInputOutputEvalCritInput, {nullable:false})
    data!: EvaluationCriteriaUpdateWithoutInputOutputEvalCritInput;
}
