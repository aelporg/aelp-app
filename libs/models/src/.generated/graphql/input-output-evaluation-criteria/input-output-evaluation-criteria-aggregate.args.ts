import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaWhereInput } from './input-output-evaluation-criteria-where.input';
import { InputOutputEvaluationCriteriaOrderByWithRelationInput } from './input-output-evaluation-criteria-order-by-with-relation.input';
import { InputOutputEvaluationCriteriaWhereUniqueInput } from './input-output-evaluation-criteria-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCountAggregateInput } from './input-output-evaluation-criteria-count-aggregate.input';
import { InputOutputEvaluationCriteriaMinAggregateInput } from './input-output-evaluation-criteria-min-aggregate.input';
import { InputOutputEvaluationCriteriaMaxAggregateInput } from './input-output-evaluation-criteria-max-aggregate.input';

@ArgsType()
export class InputOutputEvaluationCriteriaAggregateArgs {

    @Field(() => InputOutputEvaluationCriteriaWhereInput, {nullable:true})
    where?: InputOutputEvaluationCriteriaWhereInput;

    @Field(() => [InputOutputEvaluationCriteriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InputOutputEvaluationCriteriaOrderByWithRelationInput>;

    @Field(() => InputOutputEvaluationCriteriaWhereUniqueInput, {nullable:true})
    cursor?: InputOutputEvaluationCriteriaWhereUniqueInput;

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
