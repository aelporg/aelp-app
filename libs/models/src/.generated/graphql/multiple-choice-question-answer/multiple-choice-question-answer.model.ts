import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoice } from '../multiple-choice-question-choice/multiple-choice-question-choice.model';
import { QuestionAnswer } from '../question-answer/question-answer.model';

@ObjectType()
export class MultipleChoiceQuestionAnswer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => MultipleChoiceQuestionChoice, {nullable:false})
    questionChoice?: MultipleChoiceQuestionChoice;

    @Field(() => String, {nullable:false})
    questionChoiceId!: string;

    @Field(() => QuestionAnswer, {nullable:true})
    baseAnswer?: QuestionAnswer | null;
}
