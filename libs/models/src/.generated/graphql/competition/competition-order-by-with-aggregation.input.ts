import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CompetitionCountOrderByAggregateInput } from './competition-count-order-by-aggregate.input';
import { CompetitionMaxOrderByAggregateInput } from './competition-max-order-by-aggregate.input';
import { CompetitionMinOrderByAggregateInput } from './competition-min-order-by-aggregate.input';

@InputType()
export class CompetitionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPrivate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creatorUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CompetitionCountOrderByAggregateInput, {nullable:true})
    _count?: CompetitionCountOrderByAggregateInput;

    @Field(() => CompetitionMaxOrderByAggregateInput, {nullable:true})
    _max?: CompetitionMaxOrderByAggregateInput;

    @Field(() => CompetitionMinOrderByAggregateInput, {nullable:true})
    _min?: CompetitionMinOrderByAggregateInput;
}
