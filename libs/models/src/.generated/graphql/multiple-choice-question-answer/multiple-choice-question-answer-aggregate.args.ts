import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereInput } from './multiple-choice-question-answer-where.input';
import { MultipleChoiceQuestionAnswerOrderByWithRelationInput } from './multiple-choice-question-answer-order-by-with-relation.input';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCountAggregateInput } from './multiple-choice-question-answer-count-aggregate.input';
import { MultipleChoiceQuestionAnswerMinAggregateInput } from './multiple-choice-question-answer-min-aggregate.input';
import { MultipleChoiceQuestionAnswerMaxAggregateInput } from './multiple-choice-question-answer-max-aggregate.input';

@ArgsType()
export class MultipleChoiceQuestionAnswerAggregateArgs {

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionAnswerWhereInput;

    @Field(() => [MultipleChoiceQuestionAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionAnswerOrderByWithRelationInput>;

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:true})
    cursor?: MultipleChoiceQuestionAnswerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MultipleChoiceQuestionAnswerCountAggregateInput, {nullable:true})
    _count?: MultipleChoiceQuestionAnswerCountAggregateInput;

    @Field(() => MultipleChoiceQuestionAnswerMinAggregateInput, {nullable:true})
    _min?: MultipleChoiceQuestionAnswerMinAggregateInput;

    @Field(() => MultipleChoiceQuestionAnswerMaxAggregateInput, {nullable:true})
    _max?: MultipleChoiceQuestionAnswerMaxAggregateInput;
}
