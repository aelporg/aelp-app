import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssessmentCountAggregate } from './assessment-count-aggregate.output';
import { AssessmentAvgAggregate } from './assessment-avg-aggregate.output';
import { AssessmentSumAggregate } from './assessment-sum-aggregate.output';
import { AssessmentMinAggregate } from './assessment-min-aggregate.output';
import { AssessmentMaxAggregate } from './assessment-max-aggregate.output';

@ObjectType()
export class AggregateAssessment {

    @Field(() => AssessmentCountAggregate, {nullable:true})
    _count?: AssessmentCountAggregate;

    @Field(() => AssessmentAvgAggregate, {nullable:true})
    _avg?: AssessmentAvgAggregate;

    @Field(() => AssessmentSumAggregate, {nullable:true})
    _sum?: AssessmentSumAggregate;

    @Field(() => AssessmentMinAggregate, {nullable:true})
    _min?: AssessmentMinAggregate;

    @Field(() => AssessmentMaxAggregate, {nullable:true})
    _max?: AssessmentMaxAggregate;
}
