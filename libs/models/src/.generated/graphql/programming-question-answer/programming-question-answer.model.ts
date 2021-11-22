import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { QuestionAnswer } from '../question-answer/question-answer.model';
import { Environment } from '../environment/environment.model';
import { EvaluationResult } from '../evaluation-result/evaluation-result.model';
import { ProgrammingQuestionAnswerCount } from '../programming-question/programming-question-answer-count.output';

@ObjectType()
export class ProgrammingQuestionAnswer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => QuestionAnswer, {nullable:true})
    baseAnswer?: QuestionAnswer | null;

    @Field(() => Environment, {nullable:false})
    envirnment?: Environment;

    @Field(() => String, {nullable:false})
    envirnmentId!: string;

    @Field(() => [EvaluationResult], {nullable:true})
    evaluationResults?: Array<EvaluationResult>;

    @Field(() => ProgrammingQuestionAnswerCount, {nullable:false})
    _count?: ProgrammingQuestionAnswerCount;
}
