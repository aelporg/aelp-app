import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereInput } from './programming-question-answer-where.input';
import { ProgrammingQuestionAnswerOrderByWithAggregationInput } from './programming-question-answer-order-by-with-aggregation.input';
import { ProgrammingQuestionAnswerScalarFieldEnum } from './programming-question-answer-scalar-field.enum';
import { ProgrammingQuestionAnswerScalarWhereWithAggregatesInput } from './programming-question-answer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCountAggregateInput } from './programming-question-answer-count-aggregate.input';
import { ProgrammingQuestionAnswerMinAggregateInput } from './programming-question-answer-min-aggregate.input';
import { ProgrammingQuestionAnswerMaxAggregateInput } from './programming-question-answer-max-aggregate.input';

@ArgsType()
export class ProgrammingQuestionAnswerGroupByArgs {

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    where?: ProgrammingQuestionAnswerWhereInput;

    @Field(() => [ProgrammingQuestionAnswerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProgrammingQuestionAnswerOrderByWithAggregationInput>;

    @Field(() => [ProgrammingQuestionAnswerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProgrammingQuestionAnswerScalarFieldEnum>;

    @Field(() => ProgrammingQuestionAnswerScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProgrammingQuestionAnswerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProgrammingQuestionAnswerCountAggregateInput, {nullable:true})
    _count?: ProgrammingQuestionAnswerCountAggregateInput;

    @Field(() => ProgrammingQuestionAnswerMinAggregateInput, {nullable:true})
    _min?: ProgrammingQuestionAnswerMinAggregateInput;

    @Field(() => ProgrammingQuestionAnswerMaxAggregateInput, {nullable:true})
    _max?: ProgrammingQuestionAnswerMaxAggregateInput;
}
