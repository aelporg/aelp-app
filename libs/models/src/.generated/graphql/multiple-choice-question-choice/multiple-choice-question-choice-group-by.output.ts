import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCountAggregate } from './multiple-choice-question-choice-count-aggregate.output';
import { MultipleChoiceQuestionChoiceMinAggregate } from './multiple-choice-question-choice-min-aggregate.output';
import { MultipleChoiceQuestionChoiceMaxAggregate } from './multiple-choice-question-choice-max-aggregate.output';

@ObjectType()
export class MultipleChoiceQuestionChoiceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    choice!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => Boolean, {nullable:false})
    correct!: boolean;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => MultipleChoiceQuestionChoiceCountAggregate, {nullable:true})
    _count?: MultipleChoiceQuestionChoiceCountAggregate;

    @Field(() => MultipleChoiceQuestionChoiceMinAggregate, {nullable:true})
    _min?: MultipleChoiceQuestionChoiceMinAggregate;

    @Field(() => MultipleChoiceQuestionChoiceMaxAggregate, {nullable:true})
    _max?: MultipleChoiceQuestionChoiceMaxAggregate;
}
