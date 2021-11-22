import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaCreateWithoutResultsInput } from './evaluation-criteria-create-without-results.input';

@InputType()
export class EvaluationCriteriaCreateOrConnectWithoutResultsInput {

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: EvaluationCriteriaWhereUniqueInput;

    @Field(() => EvaluationCriteriaCreateWithoutResultsInput, {nullable:false})
    create!: EvaluationCriteriaCreateWithoutResultsInput;
}
