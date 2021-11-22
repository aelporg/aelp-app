import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultCreateWithoutEvaluationCriteriaInput } from './evaluation-result-create-without-evaluation-criteria.input';

@InputType()
export class EvaluationResultCreateOrConnectWithoutEvaluationCriteriaInput {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultCreateWithoutEvaluationCriteriaInput, {nullable:false})
    create!: EvaluationResultCreateWithoutEvaluationCriteriaInput;
}
