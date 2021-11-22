import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberWhereInput } from './classroom-member-where.input';
import { ClassroomMemberOrderByWithRelationInput } from './classroom-member-order-by-with-relation.input';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClassroomMemberCountAggregateInput } from './classroom-member-count-aggregate.input';
import { ClassroomMemberMinAggregateInput } from './classroom-member-min-aggregate.input';
import { ClassroomMemberMaxAggregateInput } from './classroom-member-max-aggregate.input';

@ArgsType()
export class ClassroomMemberAggregateArgs {

    @Field(() => ClassroomMemberWhereInput, {nullable:true})
    where?: ClassroomMemberWhereInput;

    @Field(() => [ClassroomMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClassroomMemberOrderByWithRelationInput>;

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:true})
    cursor?: ClassroomMemberWhereUniqueInput;

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
