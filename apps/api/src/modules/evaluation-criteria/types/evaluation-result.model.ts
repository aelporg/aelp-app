import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EvaluationCriteria } from '../evaluation-criteria/evaluation-criteria.model';
import { Float } from '@nestjs/graphql';
import { InputOutputEvaluationResult } from '../input-output-evaluation-result/input-output-evaluation-result.model';
import { ProgrammingQuestionAnswer } from '../programming-question-answer/programming-question-answer.model';

@ObjectType()
export class EvaluationResult {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => EvaluationCriteria, {nullable:false})
    evaluationCriteria?: EvaluationCriteria;

    @Field(() => String, {nullable:false})
    evaluationCriteriaId!: string;

    @Field(() => Float, {nullable:false})
    evaulationPoints!: number;

    @Field(() => InputOutputEvaluationResult, {nullable:true})
    inputOutputEvaulationResult?: InputOutputEvaluationResult | null;

    @Field(() => String, {nullable:true})
    inputOutputEvaluationResultId!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => ProgrammingQuestionAnswer, {nullable:false})
    programmingQuestionAnswer?: ProgrammingQuestionAnswer;

    @Field(() => String, {nullable:false})
    programmingQuestionAnswerId!: string;
}
