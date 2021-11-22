import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssessmentAnswerCountAggregate } from './assessment-answer-count-aggregate.output';
import { AssessmentAnswerAvgAggregate } from './assessment-answer-avg-aggregate.output';
import { AssessmentAnswerSumAggregate } from './assessment-answer-sum-aggregate.output';
import { AssessmentAnswerMinAggregate } from './assessment-answer-min-aggregate.output';
import { AssessmentAnswerMaxAggregate } from './assessment-answer-max-aggregate.output';

@ObjectType()
export class AggregateAssessmentAnswer {

    @Field(() => AssessmentAnswerCountAggregate, {nullable:true})
    _count?: AssessmentAnswerCountAggregate;

    @Field(() => AssessmentAnswerAvgAggregate, {nullable:true})
    _avg?: AssessmentAnswerAvgAggregate;

    @Field(() => AssessmentAnswerSumAggregate, {nullable:true})
    _sum?: AssessmentAnswerSumAggregate;

    @Field(() => AssessmentAnswerMinAggregate, {nullable:true})
    _min?: AssessmentAnswerMinAggregate;

    @Field(() => AssessmentAnswerMaxAggregate, {nullable:true})
    _max?: AssessmentAnswerMaxAggregate;
}
