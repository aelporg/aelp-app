import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaWhereUniqueInput } from './input-output-evaluation-criteria-where-unique.input';
import { InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-create-without-base-criteria.input';

@InputType()
export class InputOutputEvaluationCriteriaCreateOrConnectWithoutBaseCriteriaInput {

    @Field(() => InputOutputEvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: InputOutputEvaluationCriteriaWhereUniqueInput;

    @Field(() => InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput, {nullable:false})
    create!: InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput;
}
