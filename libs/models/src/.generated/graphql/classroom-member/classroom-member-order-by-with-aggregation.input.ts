import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClassroomMemberCountOrderByAggregateInput } from './classroom-member-count-order-by-aggregate.input';
import { ClassroomMemberMaxOrderByAggregateInput } from './classroom-member-max-order-by-aggregate.input';
import { ClassroomMemberMinOrderByAggregateInput } from './classroom-member-min-order-by-aggregate.input';

@InputType()
export class ClassroomMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    classroomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    classroomRole?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ClassroomMemberCountOrderByAggregateInput, {nullable:true})
    _count?: ClassroomMemberCountOrderByAggregateInput;

    @Field(() => ClassroomMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: ClassroomMemberMaxOrderByAggregateInput;

    @Field(() => ClassroomMemberMinOrderByAggregateInput, {nullable:true})
    _min?: ClassroomMemberMinOrderByAggregateInput;
}
