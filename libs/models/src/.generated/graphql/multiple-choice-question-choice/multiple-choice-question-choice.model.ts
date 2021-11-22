import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MultipleChoiceQuestion } from '../multiple-choice-question/multiple-choice-question.model';
import { MultipleChoiceQuestionAnswer } from '../multiple-choice-question-answer/multiple-choice-question-answer.model';
import { MultipleChoiceQuestionChoiceCount } from '../multiple-choice-question/multiple-choice-question-choice-count.output';

@ObjectType()
export class MultipleChoiceQuestionChoice {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    choice!: string;

    @Field(() => MultipleChoiceQuestion, {nullable:false})
    question?: MultipleChoiceQuestion;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    correct!: boolean;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [MultipleChoiceQuestionAnswer], {nullable:true})
    answers?: Array<MultipleChoiceQuestionAnswer>;

    @Field(() => MultipleChoiceQuestionChoiceCount, {nullable:false})
    _count?: MultipleChoiceQuestionChoiceCount;
}
