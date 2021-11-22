import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomWhereInput } from './classroom-where.input';
import { ClassroomOrderByWithRelationInput } from './classroom-order-by-with-relation.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClassroomCountAggregateInput } from './classroom-count-aggregate.input';
import { ClassroomMinAggregateInput } from './classroom-min-aggregate.input';
import { ClassroomMaxAggregateInput } from './classroom-max-aggregate.input';

@ArgsType()
export class ClassroomAggregateArgs {

    @Field(() => ClassroomWhereInput, {nullable:true})
    where?: ClassroomWhereInput;

    @Field(() => [ClassroomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClassroomOrderByWithRelationInput>;

    @Field(() => ClassroomWhereUniqueInput, {nullable:true})
    cursor?: ClassroomWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClassroomCountAggregateInput, {nullable:true})
    _count?: ClassroomCountAggregateInput;

    @Field(() => ClassroomMinAggregateInput, {nullable:true})
    _min?: ClassroomMinAggregateInput;

    @Field(() => ClassroomMaxAggregateInput, {nullable:true})
    _max?: ClassroomMaxAggregateInput;
}
