import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereInput } from './evaluation-criteria-where.input';
import { EvaluationCriteriaOrderByWithRelationInput } from './evaluation-criteria-order-by-with-relation.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EvaluationCriteriaCountAggregateInput } from './evaluation-criteria-count-aggregate.input';
import { EvaluationCriteriaAvgAggregateInput } from './evaluation-criteria-avg-aggregate.input';
import { EvaluationCriteriaSumAggregateInput } from './evaluation-criteria-sum-aggregate.input';
import { EvaluationCriteriaMinAggregateInput } from './evaluation-criteria-min-aggregate.input';
import { EvaluationCriteriaMaxAggregateInput } from './evaluation-criteria-max-aggregate.input';

@ArgsType()
export class EvaluationCriteriaAggregateArgs {

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    where?: EvaluationCriteriaWhereInput;

    @Field(() => [EvaluationCriteriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvaluationCriteriaOrderByWithRelationInput>;

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:true})
    cursor?: EvaluationCriteriaWhereUniqueInput;

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
