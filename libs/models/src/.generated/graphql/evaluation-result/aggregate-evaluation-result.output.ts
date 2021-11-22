import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EvaluationResultCountAggregate } from './evaluation-result-count-aggregate.output';
import { EvaluationResultAvgAggregate } from './evaluation-result-avg-aggregate.output';
import { EvaluationResultSumAggregate } from './evaluation-result-sum-aggregate.output';
import { EvaluationResultMinAggregate } from './evaluation-result-min-aggregate.output';
import { EvaluationResultMaxAggregate } from './evaluation-result-max-aggregate.output';

@ObjectType()
export class AggregateEvaluationResult {

    @Field(() => EvaluationResultCountAggregate, {nullable:true})
    _count?: EvaluationResultCountAggregate;

    @Field(() => EvaluationResultAvgAggregate, {nullable:true})
    _avg?: EvaluationResultAvgAggregate;

    @Field(() => EvaluationResultSumAggregate, {nullable:true})
    _sum?: EvaluationResultSumAggregate;

    @Field(() => EvaluationResultMinAggregate, {nullable:true})
    _min?: EvaluationResultMinAggregate;

    @Field(() => EvaluationResultMaxAggregate, {nullable:true})
    _max?: EvaluationResultMaxAggregate;
}
