import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EvaluationCriteriaOrderByRelationAggregateInput } from '../evaluation-criteria/evaluation-criteria-order-by-relation-aggregate.input';

@InputType()
export class InputOutputEvaluationCriteriaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inputs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    outputs?: keyof typeof SortOrder;

    @Field(() => EvaluationCriteriaOrderByRelationAggregateInput, {nullable:true})
    baseCriteria?: EvaluationCriteriaOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
