import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProviderCountOrderByAggregateInput } from './provider-count-order-by-aggregate.input';
import { ProviderMaxOrderByAggregateInput } from './provider-max-order-by-aggregate.input';
import { ProviderMinOrderByAggregateInput } from './provider-min-order-by-aggregate.input';

@InputType()
export class ProviderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProviderCountOrderByAggregateInput, {nullable:true})
    _count?: ProviderCountOrderByAggregateInput;

    @Field(() => ProviderMaxOrderByAggregateInput, {nullable:true})
    _max?: ProviderMaxOrderByAggregateInput;

    @Field(() => ProviderMinOrderByAggregateInput, {nullable:true})
    _min?: ProviderMinOrderByAggregateInput;
}
