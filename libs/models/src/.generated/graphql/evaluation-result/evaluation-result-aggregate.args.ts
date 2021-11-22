import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultWhereInput } from './evaluation-result-where.input';
import { EvaluationResultOrderByWithRelationInput } from './evaluation-result-order-by-with-relation.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EvaluationResultCountAggregateInput } from './evaluation-result-count-aggregate.input';
import { EvaluationResultAvgAggregateInput } from './evaluation-result-avg-aggregate.input';
import { EvaluationResultSumAggregateInput } from './evaluation-result-sum-aggregate.input';
import { EvaluationResultMinAggregateInput } from './evaluation-result-min-aggregate.input';
import { EvaluationResultMaxAggregateInput } from './evaluation-result-max-aggregate.input';

@ArgsType()
export class EvaluationResultAggregateArgs {

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    where?: EvaluationResultWhereInput;

    @Field(() => [EvaluationResultOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvaluationResultOrderByWithRelationInput>;

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:true})
    cursor?: EvaluationResultWhereUniqueInput;

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
