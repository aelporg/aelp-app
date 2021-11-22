import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateNestedOneWithoutAnswersInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-create-nested-one-without-answers.input';

@InputType()
export class MultipleChoiceQuestionAnswerCreateWithoutBaseAnswerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MultipleChoiceQuestionChoiceCreateNestedOneWithoutAnswersInput, {nullable:false})
    questionChoice!: MultipleChoiceQuestionChoiceCreateNestedOneWithoutAnswersInput;
}
