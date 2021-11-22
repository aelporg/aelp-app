import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { EvaluationCriteriaCreateNestedOneWithoutResultsInput } from '../evaluation-criteria/evaluation-criteria-create-nested-one-without-results.input';
import { ProgrammingQuestionAnswerCreateNestedOneWithoutEvaluationResultsInput } from '../programming-question-answer/programming-question-answer-create-nested-one-without-evaluation-results.input';

@InputType()
export class EvaluationResultCreateWithoutInputOutputEvaulationResultInput {

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

    @Field(() => ProgrammingQuestionAnswerCreateNestedOneWithoutEvaluationResultsInput, {nullable:false})
    programmingQuestionAnswer!: ProgrammingQuestionAnswerCreateNestedOneWithoutEvaluationResultsInput;
}
