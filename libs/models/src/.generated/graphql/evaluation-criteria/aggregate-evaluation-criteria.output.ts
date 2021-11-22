import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EvaluationCriteriaCountAggregate } from './evaluation-criteria-count-aggregate.output';
import { EvaluationCriteriaAvgAggregate } from './evaluation-criteria-avg-aggregate.output';
import { EvaluationCriteriaSumAggregate } from './evaluation-criteria-sum-aggregate.output';
import { EvaluationCriteriaMinAggregate } from './evaluation-criteria-min-aggregate.output';
import { EvaluationCriteriaMaxAggregate } from './evaluation-criteria-max-aggregate.output';

@ObjectType()
export class AggregateEvaluationCriteria {

    @Field(() => EvaluationCriteriaCountAggregate, {nullable:true})
    _count?: EvaluationCriteriaCountAggregate;

    @Field(() => EvaluationCriteriaAvgAggregate, {nullable:true})
    _avg?: EvaluationCriteriaAvgAggregate;

    @Field(() => EvaluationCriteriaSumAggregate, {nullable:true})
    _sum?: EvaluationCriteriaSumAggregate;

    @Field(() => EvaluationCriteriaMinAggregate, {nullable:true})
    _min?: EvaluationCriteriaMinAggregate;

    @Field(() => EvaluationCriteriaMaxAggregate, {nullable:true})
    _max?: EvaluationCriteriaMaxAggregate;
}
