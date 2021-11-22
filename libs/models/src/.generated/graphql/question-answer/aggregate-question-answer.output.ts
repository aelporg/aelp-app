import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { QuestionAnswerCountAggregate } from './question-answer-count-aggregate.output';
import { QuestionAnswerAvgAggregate } from './question-answer-avg-aggregate.output';
import { QuestionAnswerSumAggregate } from './question-answer-sum-aggregate.output';
import { QuestionAnswerMinAggregate } from './question-answer-min-aggregate.output';
import { QuestionAnswerMaxAggregate } from './question-answer-max-aggregate.output';

@ObjectType()
export class AggregateQuestionAnswer {

    @Field(() => QuestionAnswerCountAggregate, {nullable:true})
    _count?: QuestionAnswerCountAggregate;

    @Field(() => QuestionAnswerAvgAggregate, {nullable:true})
    _avg?: QuestionAnswerAvgAggregate;

    @Field(() => QuestionAnswerSumAggregate, {nullable:true})
    _sum?: QuestionAnswerSumAggregate;

    @Field(() => QuestionAnswerMinAggregate, {nullable:true})
    _min?: QuestionAnswerMinAggregate;

    @Field(() => QuestionAnswerMaxAggregate, {nullable:true})
    _max?: QuestionAnswerMaxAggregate;
}
