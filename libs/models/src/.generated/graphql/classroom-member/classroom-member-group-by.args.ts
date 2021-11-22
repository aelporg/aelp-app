import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberWhereInput } from './classroom-member-where.input';
import { ClassroomMemberOrderByWithAggregationInput } from './classroom-member-order-by-with-aggregation.input';
import { ClassroomMemberScalarFieldEnum } from './classroom-member-scalar-field.enum';
import { ClassroomMemberScalarWhereWithAggregatesInput } from './classroom-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClassroomMemberCountAggregateInput } from './classroom-member-count-aggregate.input';
import { ClassroomMemberMinAggregateInput } from './classroom-member-min-aggregate.input';
import { ClassroomMemberMaxAggregateInput } from './classroom-member-max-aggregate.input';

@ArgsType()
export class ClassroomMemberGroupByArgs {

    @Field(() => ClassroomMemberWhereInput, {nullable:true})
    where?: ClassroomMemberWhereInput;

    @Field(() => [ClassroomMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClassroomMemberOrderByWithAggregationInput>;

    @Field(() => [ClassroomMemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ClassroomMemberScalarFieldEnum>;

    @Field(() => ClassroomMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClassroomMemberScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClassroomMemberCountAggregateInput, {nullable:true})
    _count?: ClassroomMemberCountAggregateInput;

    @Field(() => ClassroomMemberMinAggregateInput, {nullable:true})
    _min?: ClassroomMemberMinAggregateInput;

    @Field(() => ClassroomMemberMaxAggregateInput, {nullable:true})
    _max?: ClassroomMemberMaxAggregateInput;
}
