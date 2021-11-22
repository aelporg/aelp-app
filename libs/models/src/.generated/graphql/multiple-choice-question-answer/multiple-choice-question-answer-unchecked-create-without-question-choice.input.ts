import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerUncheckedCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput } from '../question-answer/question-answer-unchecked-create-nested-one-without-multiple-choice-question-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerUncheckedCreateWithoutQuestionChoiceInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionAnswerUncheckedCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUncheckedCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput;
}
