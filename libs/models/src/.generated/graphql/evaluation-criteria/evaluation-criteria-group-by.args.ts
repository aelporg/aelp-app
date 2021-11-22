import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereInput } from './evaluation-criteria-where.input';
import { EvaluationCriteriaOrderByWithAggregationInput } from './evaluation-criteria-order-by-with-aggregation.input';
import { EvaluationCriteriaScalarFieldEnum } from './evaluation-criteria-scalar-field.enum';
import { EvaluationCriteriaScalarWhereWithAggregatesInput } from './evaluation-criteria-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EvaluationCriteriaCountAggregateInput } from './evaluation-criteria-count-aggregate.input';
import { EvaluationCriteriaAvgAggregateInput } from './evaluation-criteria-avg-aggregate.input';
import { EvaluationCriteriaSumAggregateInput } from './evaluation-criteria-sum-aggregate.input';
import { EvaluationCriteriaMinAggregateInput } from './evaluation-criteria-min-aggregate.input';
import { EvaluationCriteriaMaxAggregateInput } from './evaluation-criteria-max-aggregate.input';

@ArgsType()
export class EvaluationCriteriaGroupByArgs {

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    where?: EvaluationCriteriaWhereInput;

    @Field(() => [EvaluationCriteriaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EvaluationCriteriaOrderByWithAggregationInput>;

    @Field(() => [EvaluationCriteriaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EvaluationCriteriaScalarFieldEnum>;

    @Field(() => EvaluationCriteriaScalarWhereWithAggregatesInput, {nullable:true})
    having?: EvaluationCriteriaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EvaluationCriteriaCountAggregateInput, {nullable:true})
    _count?: EvaluationCriteriaCountAggregateInput;

    @Field(() => EvaluationCriteriaAvgAggregateInput, {nullable:true})
    _avg?: EvaluationCriteriaAvgAggregateInput;

    @Field(() => EvaluationCriteriaSumAggregateInput, {nullable:true})
    _sum?: EvaluationCriteriaSumAggregateInput;

    @Field(() => EvaluationCriteriaMinAggregateInput, {nullable:true})
    _min?: EvaluationCriteriaMinAggregateInput;

    @Field(() => EvaluationCriteriaMaxAggregateInput, {nullable:true})
    _max?: EvaluationCriteriaMaxAggregateInput;
}
