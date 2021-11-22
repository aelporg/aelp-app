import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultWhereInput } from './input-output-evaluation-result-where.input';
import { InputOutputEvaluationResultOrderByWithAggregationInput } from './input-output-evaluation-result-order-by-with-aggregation.input';
import { InputOutputEvaluationResultScalarFieldEnum } from './input-output-evaluation-result-scalar-field.enum';
import { InputOutputEvaluationResultScalarWhereWithAggregatesInput } from './input-output-evaluation-result-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InputOutputEvaluationResultCountAggregateInput } from './input-output-evaluation-result-count-aggregate.input';
import { InputOutputEvaluationResultMinAggregateInput } from './input-output-evaluation-result-min-aggregate.input';
import { InputOutputEvaluationResultMaxAggregateInput } from './input-output-evaluation-result-max-aggregate.input';

@ArgsType()
export class InputOutputEvaluationResultGroupByArgs {

    @Field(() => InputOutputEvaluationResultWhereInput, {nullable:true})
    where?: InputOutputEvaluationResultWhereInput;

    @Field(() => [InputOutputEvaluationResultOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InputOutputEvaluationResultOrderByWithAggregationInput>;

    @Field(() => [InputOutputEvaluationResultScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InputOutputEvaluationResultScalarFieldEnum>;

    @Field(() => InputOutputEvaluationResultScalarWhereWithAggregatesInput, {nullable:true})
    having?: InputOutputEvaluationResultScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InputOutputEvaluationResultCountAggregateInput, {nullable:true})
    _count?: InputOutputEvaluationResultCountAggregateInput;

    @Field(() => InputOutputEvaluationResultMinAggregateInput, {nullable:true})
    _min?: InputOutputEvaluationResultMinAggregateInput;

    @Field(() => InputOutputEvaluationResultMaxAggregateInput, {nullable:true})
    _max?: InputOutputEvaluationResultMaxAggregateInput;
}
