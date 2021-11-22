import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerWhereInput } from './assessment-answer-where.input';
import { AssessmentAnswerOrderByWithRelationInput } from './assessment-answer-order-by-with-relation.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssessmentAnswerCountAggregateInput } from './assessment-answer-count-aggregate.input';
import { AssessmentAnswerAvgAggregateInput } from './assessment-answer-avg-aggregate.input';
import { AssessmentAnswerSumAggregateInput } from './assessment-answer-sum-aggregate.input';
import { AssessmentAnswerMinAggregateInput } from './assessment-answer-min-aggregate.input';
import { AssessmentAnswerMaxAggregateInput } from './assessment-answer-max-aggregate.input';

@ArgsType()
export class AssessmentAnswerAggregateArgs {

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    where?: AssessmentAnswerWhereInput;

    @Field(() => [AssessmentAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssessmentAnswerOrderByWithRelationInput>;

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:true})
    cursor?: AssessmentAnswerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssessmentAnswerCountAggregateInput, {nullable:true})
    _count?: AssessmentAnswerCountAggregateInput;

    @Field(() => AssessmentAnswerAvgAggregateInput, {nullable:true})
    _avg?: AssessmentAnswerAvgAggregateInput;

    @Field(() => AssessmentAnswerSumAggregateInput, {nullable:true})
    _sum?: AssessmentAnswerSumAggregateInput;

    @Field(() => AssessmentAnswerMinAggregateInput, {nullable:true})
    _min?: AssessmentAnswerMinAggregateInput;

    @Field(() => AssessmentAnswerMaxAggregateInput, {nullable:true})
    _max?: AssessmentAnswerMaxAggregateInput;
}
