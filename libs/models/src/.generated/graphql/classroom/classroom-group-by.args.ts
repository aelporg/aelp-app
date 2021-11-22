import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomWhereInput } from './classroom-where.input';
import { ClassroomOrderByWithAggregationInput } from './classroom-order-by-with-aggregation.input';
import { ClassroomScalarFieldEnum } from './classroom-scalar-field.enum';
import { ClassroomScalarWhereWithAggregatesInput } from './classroom-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClassroomCountAggregateInput } from './classroom-count-aggregate.input';
import { ClassroomMinAggregateInput } from './classroom-min-aggregate.input';
import { ClassroomMaxAggregateInput } from './classroom-max-aggregate.input';

@ArgsType()
export class ClassroomGroupByArgs {

    @Field(() => ClassroomWhereInput, {nullable:true})
    where?: ClassroomWhereInput;

    @Field(() => [ClassroomOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClassroomOrderByWithAggregationInput>;

    @Field(() => [ClassroomScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ClassroomScalarFieldEnum>;

    @Field(() => ClassroomScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClassroomScalarWhereWithAggregatesInput;

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
