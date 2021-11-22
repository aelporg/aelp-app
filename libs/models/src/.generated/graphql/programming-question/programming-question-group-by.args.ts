import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereInput } from './programming-question-where.input';
import { ProgrammingQuestionOrderByWithAggregationInput } from './programming-question-order-by-with-aggregation.input';
import { ProgrammingQuestionScalarFieldEnum } from './programming-question-scalar-field.enum';
import { ProgrammingQuestionScalarWhereWithAggregatesInput } from './programming-question-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProgrammingQuestionCountAggregateInput } from './programming-question-count-aggregate.input';
import { ProgrammingQuestionMinAggregateInput } from './programming-question-min-aggregate.input';
import { ProgrammingQuestionMaxAggregateInput } from './programming-question-max-aggregate.input';

@ArgsType()
export class ProgrammingQuestionGroupByArgs {

    @Field(() => ProgrammingQuestionWhereInput, {nullable:true})
    where?: ProgrammingQuestionWhereInput;

    @Field(() => [ProgrammingQuestionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProgrammingQuestionOrderByWithAggregationInput>;

    @Field(() => [ProgrammingQuestionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProgrammingQuestionScalarFieldEnum>;

    @Field(() => ProgrammingQuestionScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProgrammingQuestionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProgrammingQuestionCountAggregateInput, {nullable:true})
    _count?: ProgrammingQuestionCountAggregateInput;

    @Field(() => ProgrammingQuestionMinAggregateInput, {nullable:true})
    _min?: ProgrammingQuestionMinAggregateInput;

    @Field(() => ProgrammingQuestionMaxAggregateInput, {nullable:true})
    _max?: ProgrammingQuestionMaxAggregateInput;
}
