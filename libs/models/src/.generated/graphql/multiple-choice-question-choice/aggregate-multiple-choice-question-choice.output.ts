import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCountAggregate } from './multiple-choice-question-choice-count-aggregate.output';
import { MultipleChoiceQuestionChoiceMinAggregate } from './multiple-choice-question-choice-min-aggregate.output';
import { MultipleChoiceQuestionChoiceMaxAggregate } from './multiple-choice-question-choice-max-aggregate.output';

@ObjectType()
export class AggregateMultipleChoiceQuestionChoice {

    @Field(() => MultipleChoiceQuestionChoiceCountAggregate, {nullable:true})
    _count?: MultipleChoiceQuestionChoiceCountAggregate;

    @Field(() => MultipleChoiceQuestionChoiceMinAggregate, {nullable:true})
    _min?: MultipleChoiceQuestionChoiceMinAggregate;

    @Field(() => MultipleChoiceQuestionChoiceMaxAggregate, {nullable:true})
    _max?: MultipleChoiceQuestionChoiceMaxAggregate;
}
