import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaWhereInput } from './input-output-evaluation-criteria-where.input';
import { InputOutputEvaluationCriteriaOrderByWithAggregationInput } from './input-output-evaluation-criteria-order-by-with-aggregation.input';
import { InputOutputEvaluationCriteriaScalarFieldEnum } from './input-output-evaluation-criteria-scalar-field.enum';
import { InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput } from './input-output-evaluation-criteria-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCountAggregateInput } from './input-output-evaluation-criteria-count-aggregate.input';
import { InputOutputEvaluationCriteriaMinAggregateInput } from './input-output-evaluation-criteria-min-aggregate.input';
import { InputOutputEvaluationCriteriaMaxAggregateInput } from './input-output-evaluation-criteria-max-aggregate.input';

@ArgsType()
export class InputOutputEvaluationCriteriaGroupByArgs {

    @Field(() => InputOutputEvaluationCriteriaWhereInput, {nullable:true})
    where?: InputOutputEvaluationCriteriaWhereInput;

    @Field(() => [InputOutputEvaluationCriteriaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InputOutputEvaluationCriteriaOrderByWithAggregationInput>;

    @Field(() => [InputOutputEvaluationCriteriaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InputOutputEvaluationCriteriaScalarFieldEnum>;

    @Field(() => InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput, {nullable:true})
    having?: InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InputOutputEvaluationCriteriaCountAggregateInput, {nullable:true})
    _count?: InputOutputEvaluationCriteriaCountAggregateInput;

    @Field(() => InputOutputEvaluationCriteriaMinAggregateInput, {nullable:true})
    _min?: InputOutputEvaluationCriteriaMinAggregateInput;

    @Field(() => InputOutputEvaluationCriteriaMaxAggregateInput, {nullable:true})
    _max?: InputOutputEvaluationCriteriaMaxAggregateInput;
}
