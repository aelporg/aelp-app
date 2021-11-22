import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereInput } from './multiple-files-programming-question-where.input';
import { MultipleFilesProgrammingQuestionOrderByWithAggregationInput } from './multiple-files-programming-question-order-by-with-aggregation.input';
import { MultipleFilesProgrammingQuestionScalarFieldEnum } from './multiple-files-programming-question-scalar-field.enum';
import { MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput } from './multiple-files-programming-question-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCountAggregateInput } from './multiple-files-programming-question-count-aggregate.input';
import { MultipleFilesProgrammingQuestionMinAggregateInput } from './multiple-files-programming-question-min-aggregate.input';
import { MultipleFilesProgrammingQuestionMaxAggregateInput } from './multiple-files-programming-question-max-aggregate.input';

@ArgsType()
export class MultipleFilesProgrammingQuestionGroupByArgs {

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    where?: MultipleFilesProgrammingQuestionWhereInput;

    @Field(() => [MultipleFilesProgrammingQuestionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MultipleFilesProgrammingQuestionOrderByWithAggregationInput>;

    @Field(() => [MultipleFilesProgrammingQuestionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MultipleFilesProgrammingQuestionScalarFieldEnum>;

    @Field(() => MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput, {nullable:true})
    having?: MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MultipleFilesProgrammingQuestionCountAggregateInput, {nullable:true})
    _count?: MultipleFilesProgrammingQuestionCountAggregateInput;

    @Field(() => MultipleFilesProgrammingQuestionMinAggregateInput, {nullable:true})
    _min?: MultipleFilesProgrammingQuestionMinAggregateInput;

    @Field(() => MultipleFilesProgrammingQuestionMaxAggregateInput, {nullable:true})
    _max?: MultipleFilesProgrammingQuestionMaxAggregateInput;
}
