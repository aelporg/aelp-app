import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCountAggregate } from './multiple-choice-question-answer-count-aggregate.output';
import { MultipleChoiceQuestionAnswerMinAggregate } from './multiple-choice-question-answer-min-aggregate.output';
import { MultipleChoiceQuestionAnswerMaxAggregate } from './multiple-choice-question-answer-max-aggregate.output';

@ObjectType()
export class MultipleChoiceQuestionAnswerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionChoiceId!: string;

    @Field(() => MultipleChoiceQuestionAnswerCountAggregate, {nullable:true})
    _count?: MultipleChoiceQuestionAnswerCountAggregate;

    @Field(() => MultipleChoiceQuestionAnswerMinAggregate, {nullable:true})
    _min?: MultipleChoiceQuestionAnswerMinAggregate;

    @Field(() => MultipleChoiceQuestionAnswerMaxAggregate, {nullable:true})
    _max?: MultipleChoiceQuestionAnswerMaxAggregate;
}
