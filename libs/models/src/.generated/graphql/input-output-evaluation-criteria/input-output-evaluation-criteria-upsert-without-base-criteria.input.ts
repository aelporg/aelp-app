import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaUpdateWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-update-without-base-criteria.input';
import { InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-create-without-base-criteria.input';

@InputType()
export class InputOutputEvaluationCriteriaUpsertWithoutBaseCriteriaInput {

    @Field(() => InputOutputEvaluationCriteriaUpdateWithoutBaseCriteriaInput, {nullable:false})
    update!: InputOutputEvaluationCriteriaUpdateWithoutBaseCriteriaInput;

    @Field(() => InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput, {nullable:false})
    create!: InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput;
}
