import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerWhereInput } from './question-answer-where.input';
import { QuestionAnswerOrderByWithAggregationInput } from './question-answer-order-by-with-aggregation.input';
import { QuestionAnswerScalarFieldEnum } from './question-answer-scalar-field.enum';
import { QuestionAnswerScalarWhereWithAggregatesInput } from './question-answer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { QuestionAnswerCountAggregateInput } from './question-answer-count-aggregate.input';
import { QuestionAnswerAvgAggregateInput } from './question-answer-avg-aggregate.input';
import { QuestionAnswerSumAggregateInput } from './question-answer-sum-aggregate.input';
import { QuestionAnswerMinAggregateInput } from './question-answer-min-aggregate.input';
import { QuestionAnswerMaxAggregateInput } from './question-answer-max-aggregate.input';

@ArgsType()
export class QuestionAnswerGroupByArgs {

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    where?: QuestionAnswerWhereInput;

    @Field(() => [QuestionAnswerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<QuestionAnswerOrderByWithAggregationInput>;

    @Field(() => [QuestionAnswerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof QuestionAnswerScalarFieldEnum>;

    @Field(() => QuestionAnswerScalarWhereWithAggregatesInput, {nullable:true})
    having?: QuestionAnswerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => QuestionAnswerCountAggregateInput, {nullable:true})
    _count?: QuestionAnswerCountAggregateInput;

    @Field(() => QuestionAnswerAvgAggregateInput, {nullable:true})
    _avg?: QuestionAnswerAvgAggregateInput;

    @Field(() => QuestionAnswerSumAggregateInput, {nullable:true})
    _sum?: QuestionAnswerSumAggregateInput;

    @Field(() => QuestionAnswerMinAggregateInput, {nullable:true})
    _min?: QuestionAnswerMinAggregateInput;

    @Field(() => QuestionAnswerMaxAggregateInput, {nullable:true})
    _max?: QuestionAnswerMaxAggregateInput;
}
