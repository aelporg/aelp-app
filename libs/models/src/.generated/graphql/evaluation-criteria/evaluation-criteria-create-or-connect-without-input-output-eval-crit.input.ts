import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaCreateWithoutInputOutputEvalCritInput } from './evaluation-criteria-create-without-input-output-eval-crit.input';

@InputType()
export class EvaluationCriteriaCreateOrConnectWithoutInputOutputEvalCritInput {

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: EvaluationCriteriaWhereUniqueInput;

    @Field(() => EvaluationCriteriaCreateWithoutInputOutputEvalCritInput, {nullable:false})
    create!: EvaluationCriteriaCreateWithoutInputOutputEvalCritInput;
}
