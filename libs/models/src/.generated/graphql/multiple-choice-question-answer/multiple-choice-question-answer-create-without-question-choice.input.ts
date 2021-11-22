import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput } from '../question-answer/question-answer-create-nested-one-without-multiple-choice-question-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionAnswerCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput;
}
