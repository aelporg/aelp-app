import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultWhereInput } from './input-output-evaluation-result-where.input';
import { InputOutputEvaluationResultOrderByWithRelationInput } from './input-output-evaluation-result-order-by-with-relation.input';
import { InputOutputEvaluationResultWhereUniqueInput } from './input-output-evaluation-result-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InputOutputEvaluationResultCountAggregateInput } from './input-output-evaluation-result-count-aggregate.input';
import { InputOutputEvaluationResultMinAggregateInput } from './input-output-evaluation-result-min-aggregate.input';
import { InputOutputEvaluationResultMaxAggregateInput } from './input-output-evaluation-result-max-aggregate.input';

@ArgsType()
export class InputOutputEvaluationResultAggregateArgs {

    @Field(() => InputOutputEvaluationResultWhereInput, {nullable:true})
    where?: InputOutputEvaluationResultWhereInput;

    @Field(() => [InputOutputEvaluationResultOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InputOutputEvaluationResultOrderByWithRelationInput>;

    @Field(() => InputOutputEvaluationResultWhereUniqueInput, {nullable:true})
    cursor?: InputOutputEvaluationResultWhereUniqueInput;

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
