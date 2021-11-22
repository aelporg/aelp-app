import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateNestedOneWithoutAnswersInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-create-nested-one-without-answers.input';
import { QuestionAnswerCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput } from '../question-answer/question-answer-create-nested-one-without-multiple-choice-question-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MultipleChoiceQuestionChoiceCreateNestedOneWithoutAnswersInput, {nullable:false})
    questionChoice!: MultipleChoiceQuestionChoiceCreateNestedOneWithoutAnswersInput;

    @Field(() => QuestionAnswerCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput;
}
