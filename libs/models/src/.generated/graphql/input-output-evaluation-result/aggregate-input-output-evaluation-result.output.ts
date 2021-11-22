import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCountAggregate } from './input-output-evaluation-result-count-aggregate.output';
import { InputOutputEvaluationResultMinAggregate } from './input-output-evaluation-result-min-aggregate.output';
import { InputOutputEvaluationResultMaxAggregate } from './input-output-evaluation-result-max-aggregate.output';

@ObjectType()
export class AggregateInputOutputEvaluationResult {

    @Field(() => InputOutputEvaluationResultCountAggregate, {nullable:true})
    _count?: InputOutputEvaluationResultCountAggregate;

    @Field(() => InputOutputEvaluationResultMinAggregate, {nullable:true})
    _min?: InputOutputEvaluationResultMinAggregate;

    @Field(() => InputOutputEvaluationResultMaxAggregate, {nullable:true})
    _max?: InputOutputEvaluationResultMaxAggregate;
}
