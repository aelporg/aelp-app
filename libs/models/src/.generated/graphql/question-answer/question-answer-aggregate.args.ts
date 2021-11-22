import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerWhereInput } from './question-answer-where.input';
import { QuestionAnswerOrderByWithRelationInput } from './question-answer-order-by-with-relation.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuestionAnswerCountAggregateInput } from './question-answer-count-aggregate.input';
import { QuestionAnswerAvgAggregateInput } from './question-answer-avg-aggregate.input';
import { QuestionAnswerSumAggregateInput } from './question-answer-sum-aggregate.input';
import { QuestionAnswerMinAggregateInput } from './question-answer-min-aggregate.input';
import { QuestionAnswerMaxAggregateInput } from './question-answer-max-aggregate.input';

@ArgsType()
export class QuestionAnswerAggregateArgs {

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    where?: QuestionAnswerWhereInput;

    @Field(() => [QuestionAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuestionAnswerOrderByWithRelationInput>;

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:true})
    cursor?: QuestionAnswerWhereUniqueInput;

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
