import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereInput } from './multiple-choice-question-answer-where.input';

@InputType()
export class MultipleChoiceQuestionAnswerRelationFilter {

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    is?: MultipleChoiceQuestionAnswerWhereInput;

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    isNot?: MultipleChoiceQuestionAnswerWhereInput;
}
