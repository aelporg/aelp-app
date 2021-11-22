import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereInput } from './multiple-choice-question-answer-where.input';

@InputType()
export class MultipleChoiceQuestionAnswerListRelationFilter {

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    every?: MultipleChoiceQuestionAnswerWhereInput;

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    some?: MultipleChoiceQuestionAnswerWhereInput;

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    none?: MultipleChoiceQuestionAnswerWhereInput;
}
