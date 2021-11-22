import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClassroomCountOrderByAggregateInput } from './classroom-count-order-by-aggregate.input';
import { ClassroomMaxOrderByAggregateInput } from './classroom-max-order-by-aggregate.input';
import { ClassroomMinOrderByAggregateInput } from './classroom-min-order-by-aggregate.input';

@InputType()
export class ClassroomOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    section?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inviteCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ClassroomCountOrderByAggregateInput, {nullable:true})
    _count?: ClassroomCountOrderByAggregateInput;

    @Field(() => ClassroomMaxOrderByAggregateInput, {nullable:true})
    _max?: ClassroomMaxOrderByAggregateInput;

    @Field(() => ClassroomMinOrderByAggregateInput, {nullable:true})
    _min?: ClassroomMinOrderByAggregateInput;
}
