import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerWhereInput } from './assessment-answer-where.input';
import { AssessmentAnswerOrderByWithAggregationInput } from './assessment-answer-order-by-with-aggregation.input';
import { AssessmentAnswerScalarFieldEnum } from './assessment-answer-scalar-field.enum';
import { AssessmentAnswerScalarWhereWithAggregatesInput } from './assessment-answer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AssessmentAnswerCountAggregateInput } from './assessment-answer-count-aggregate.input';
import { AssessmentAnswerAvgAggregateInput } from './assessment-answer-avg-aggregate.input';
import { AssessmentAnswerSumAggregateInput } from './assessment-answer-sum-aggregate.input';
import { AssessmentAnswerMinAggregateInput } from './assessment-answer-min-aggregate.input';
import { AssessmentAnswerMaxAggregateInput } from './assessment-answer-max-aggregate.input';

@ArgsType()
export class AssessmentAnswerGroupByArgs {

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    where?: AssessmentAnswerWhereInput;

    @Field(() => [AssessmentAnswerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AssessmentAnswerOrderByWithAggregationInput>;

    @Field(() => [AssessmentAnswerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AssessmentAnswerScalarFieldEnum>;

    @Field(() => AssessmentAnswerScalarWhereWithAggregatesInput, {nullable:true})
    having?: AssessmentAnswerScalarWhereWithAggregatesInput;

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
