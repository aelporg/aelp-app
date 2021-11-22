import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionAnswerCountAggregate } from './question-answer-count-aggregate.output';
import { QuestionAnswerAvgAggregate } from './question-answer-avg-aggregate.output';
import { QuestionAnswerSumAggregate } from './question-answer-sum-aggregate.output';
import { QuestionAnswerMinAggregate } from './question-answer-min-aggregate.output';
import { QuestionAnswerMaxAggregate } from './question-answer-max-aggregate.output';

@ObjectType()
export class QuestionAnswerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionAnswerId?: string;

    @Field(() => String, {nullable:true})
    programmingQuestionAnswerId?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    assessmentSubmissionId?: string;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => String, {nullable:true})
    userId?: string;

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
