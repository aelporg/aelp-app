import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultUpdateWithoutEvaluationCriteriaInput } from './evaluation-result-update-without-evaluation-criteria.input';
import { EvaluationResultCreateWithoutEvaluationCriteriaInput } from './evaluation-result-create-without-evaluation-criteria.input';

@InputType()
export class EvaluationResultUpsertWithWhereUniqueWithoutEvaluationCriteriaInput {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultUpdateWithoutEvaluationCriteriaInput, {nullable:false})
    update!: EvaluationResultUpdateWithoutEvaluationCriteriaInput;

    @Field(() => EvaluationResultCreateWithoutEvaluationCriteriaInput, {nullable:false})
    create!: EvaluationResultCreateWithoutEvaluationCriteriaInput;
}
