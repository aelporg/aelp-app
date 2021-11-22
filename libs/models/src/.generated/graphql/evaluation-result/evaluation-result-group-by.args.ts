import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultWhereInput } from './evaluation-result-where.input';
import { EvaluationResultOrderByWithAggregationInput } from './evaluation-result-order-by-with-aggregation.input';
import { EvaluationResultScalarFieldEnum } from './evaluation-result-scalar-field.enum';
import { EvaluationResultScalarWhereWithAggregatesInput } from './evaluation-result-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EvaluationResultCountAggregateInput } from './evaluation-result-count-aggregate.input';
import { EvaluationResultAvgAggregateInput } from './evaluation-result-avg-aggregate.input';
import { EvaluationResultSumAggregateInput } from './evaluation-result-sum-aggregate.input';
import { EvaluationResultMinAggregateInput } from './evaluation-result-min-aggregate.input';
import { EvaluationResultMaxAggregateInput } from './evaluation-result-max-aggregate.input';

@ArgsType()
export class EvaluationResultGroupByArgs {

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    where?: EvaluationResultWhereInput;

    @Field(() => [EvaluationResultOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EvaluationResultOrderByWithAggregationInput>;

    @Field(() => [EvaluationResultScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EvaluationResultScalarFieldEnum>;

    @Field(() => EvaluationResultScalarWhereWithAggregatesInput, {nullable:true})
    having?: EvaluationResultScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EvaluationResultCountAggregateInput, {nullable:true})
    _count?: EvaluationResultCountAggregateInput;

    @Field(() => EvaluationResultAvgAggregateInput, {nullable:true})
    _avg?: EvaluationResultAvgAggregateInput;

    @Field(() => EvaluationResultSumAggregateInput, {nullable:true})
    _sum?: EvaluationResultSumAggregateInput;

    @Field(() => EvaluationResultMinAggregateInput, {nullable:true})
    _min?: EvaluationResultMinAggregateInput;

    @Field(() => EvaluationResultMaxAggregateInput, {nullable:true})
    _max?: EvaluationResultMaxAggregateInput;
}
