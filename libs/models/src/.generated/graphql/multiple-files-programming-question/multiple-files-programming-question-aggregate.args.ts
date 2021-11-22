import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereInput } from './multiple-files-programming-question-where.input';
import { MultipleFilesProgrammingQuestionOrderByWithRelationInput } from './multiple-files-programming-question-order-by-with-relation.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCountAggregateInput } from './multiple-files-programming-question-count-aggregate.input';
import { MultipleFilesProgrammingQuestionMinAggregateInput } from './multiple-files-programming-question-min-aggregate.input';
import { MultipleFilesProgrammingQuestionMaxAggregateInput } from './multiple-files-programming-question-max-aggregate.input';

@ArgsType()
export class MultipleFilesProgrammingQuestionAggregateArgs {

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    where?: MultipleFilesProgrammingQuestionWhereInput;

    @Field(() => [MultipleFilesProgrammingQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MultipleFilesProgrammingQuestionOrderByWithRelationInput>;

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:true})
    cursor?: MultipleFilesProgrammingQuestionWhereUniqueInput;

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
