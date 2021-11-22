import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { EvaluationCriteriaCreateNestedOneWithoutResultsInput } from '../evaluation-criteria/evaluation-criteria-create-nested-one-without-results.input';
import { InputOutputEvaluationResultCreateNestedOneWithoutBaseEvaluationResultInput } from '../input-output-evaluation-result/input-output-evaluation-result-create-nested-one-without-base-evaluation-result.input';

@InputType()
export class EvaluationResultCreateWithoutProgrammingQuestionAnswerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    evaulationPoints!: number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => EvaluationCriteriaCreateNestedOneWithoutResultsInput, {nullable:false})
    evaluationCriteria!: EvaluationCriteriaCreateNestedOneWithoutResultsInput;

    @Field(() => InputOutputEvaluationResultCreateNestedOneWithoutBaseEvaluationResultInput, {nullable:true})
    inputOutputEvaulationResult?: InputOutputEvaluationResultCreateNestedOneWithoutBaseEvaluationResultInput;
}
