import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaUpdateWithoutResultsInput } from './evaluation-criteria-update-without-results.input';
import { EvaluationCriteriaCreateWithoutResultsInput } from './evaluation-criteria-create-without-results.input';

@InputType()
export class EvaluationCriteriaUpsertWithoutResultsInput {

    @Field(() => EvaluationCriteriaUpdateWithoutResultsInput, {nullable:false})
    update!: EvaluationCriteriaUpdateWithoutResultsInput;

    @Field(() => EvaluationCriteriaCreateWithoutResultsInput, {nullable:false})
    create!: EvaluationCriteriaCreateWithoutResultsInput;
}
