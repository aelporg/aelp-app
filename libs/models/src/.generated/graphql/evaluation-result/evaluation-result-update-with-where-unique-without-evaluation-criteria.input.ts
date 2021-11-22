import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultUpdateWithoutEvaluationCriteriaInput } from './evaluation-result-update-without-evaluation-criteria.input';

@InputType()
export class EvaluationResultUpdateWithWhereUniqueWithoutEvaluationCriteriaInput {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultUpdateWithoutEvaluationCriteriaInput, {nullable:false})
    data!: EvaluationResultUpdateWithoutEvaluationCriteriaInput;
}
