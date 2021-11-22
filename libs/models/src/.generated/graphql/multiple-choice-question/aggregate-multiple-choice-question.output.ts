import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCountAggregate } from './multiple-choice-question-count-aggregate.output';
import { MultipleChoiceQuestionMinAggregate } from './multiple-choice-question-min-aggregate.output';
import { MultipleChoiceQuestionMaxAggregate } from './multiple-choice-question-max-aggregate.output';

@ObjectType()
export class AggregateMultipleChoiceQuestion {

    @Field(() => MultipleChoiceQuestionCountAggregate, {nullable:true})
    _count?: MultipleChoiceQuestionCountAggregate;

    @Field(() => MultipleChoiceQuestionMinAggregate, {nullable:true})
    _min?: MultipleChoiceQuestionMinAggregate;

    @Field(() => MultipleChoiceQuestionMaxAggregate, {nullable:true})
    _max?: MultipleChoiceQuestionMaxAggregate;
}
