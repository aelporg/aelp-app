import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoice } from '../multiple-choice-question-choice/multiple-choice-question-choice.model';
import { Question } from '../../types/question.model';
import { MultipleChoiceQuestionCount } from './multiple-choice-question-count.output';

@ObjectType()
export class MultipleChoiceQuestion {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [MultipleChoiceQuestionChoice], {nullable:true})
    choices?: Array<MultipleChoiceQuestionChoice>;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Question, {nullable:true})
    baseQuestion?: Question | null;

    @Field(() => MultipleChoiceQuestionCount, {nullable:false})
    _count?: MultipleChoiceQuestionCount;
}
